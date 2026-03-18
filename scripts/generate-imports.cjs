#!/usr/bin/env node
/**
 * 自动生成 Markdown 文件导入语句
 * 扫描 src/content/notes/markdown 目录下的所有 .md 文件
 * 生成 import 语句和笔记对象模板
 */

const fs = require('fs');
const path = require('path');

const MARKDOWN_DIR = path.join(__dirname, '../src/content/notes/markdown');
const INDEX_FILE = path.join(__dirname, '../src/content/notes/index.ts');

// 扫描所有 .md 文件
function scanMarkdownFiles(dir, basePath = '') {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const relativePath = basePath ? `${basePath}/${item}` : item;
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...scanMarkdownFiles(fullPath, relativePath));
    } else if (item.endsWith('.md')) {
      files.push({
        fullPath,
        relativePath,
        name: item.replace('.md', ''),
        dir: basePath
      });
    }
  }
  
  return files;
}

// 生成合法的变量名
function generateVarName(filePath) {
  // 去掉 .md 扩展名
  let name = filePath.replace('.md', '');
  // 替换 / - . 为下划线
  name = name.replace(/[\/\-\.]/g, '_');
  // 如果首字符是数字，添加前缀
  if (/^\d/.test(name)) {
    name = 'n' + name;
  }
  return name;
}

// 从文件路径推断分类
function inferCategory(dirPath) {
  if (!dirPath) return 'uncategorized';
  
  const parts = dirPath.split('/');
  
  // 映射目录到分类 slug
  const categoryMap = {
    'mcu': 'mcu',
    'stm32': 'mcu',
    'esp32': 'mcu',
    'rtos': 'rtos',
    'freertos': 'rtos',
    'rt-thread': 'rtos',
    'protocols': 'protocols',
    'can': 'protocols',
    'modbus': 'protocols',
    'hardware-design': 'hardware-design',
    'pcb': 'hardware-design',
    'altium': 'hardware-design',
    'tools': 'tools',
    'keil': 'tools',
    'vscode': 'tools',
  };
  
  // 优先使用最具体的分类
  for (let i = parts.length - 1; i >= 0; i--) {
    if (categoryMap[parts[i]]) {
      return categoryMap[parts[i]];
    }
  }
  
  return parts[0] || 'uncategorized';
}

// 生成导入语句
function generateImports(files) {
  const lines = ['// 导入 Markdown 文件内容', ''];
  
  // 按路径排序，让同目录的文件在一起
  const sortedFiles = [...files].sort((a, b) => a.relativePath.localeCompare(b.relativePath));
  
  let currentDir = '';
  for (const file of sortedFiles) {
    const varName = generateVarName(file.relativePath);
    // 使用完整的相对路径，包括子目录
    const importPath = `./markdown/${file.relativePath}?raw`;
    
    // 如果换了目录，添加空行分隔
    const dir = file.dir || '(root)';
    if (currentDir && currentDir !== dir) {
      lines.push('');
    }
    currentDir = dir;
    
    lines.push(`import ${varName} from '${importPath}';`);
  }
  
  return lines.join('\n');
}

// 生成笔记对象模板
function generateNoteObjects(files) {
  const lines = ['// 笔记数据', 'export const notes: Note[] = ['];
  let id = 1;
  
  for (const file of files) {
    const varName = generateVarName(file.relativePath);
    const category = inferCategory(file.dir);
    
    // 从文件名提取 slug（去掉语言后缀）
    const slugBase = file.name.replace(/\.(zh|en)$/, '');
    
    // 检测语言
    const isZh = file.name.endsWith('.zh');
    const isEn = file.name.endsWith('.en');
    
    // 只处理中文文件，英文作为配对
    if (isZh) {
      const enVarName = varName.replace(/_zh$/, '_en');
      
      lines.push(`  {`);
      lines.push(`    id: '${id}',`);
      lines.push(`    slug: '${slugBase}',`);
      lines.push(`    status: 'draft',  // TODO: 修改为 published`);
      lines.push(`    category: '${category}',`);
      lines.push(`    tags: ['TODO'],  // TODO: 添加标签`);
      lines.push(`    createdAt: '${new Date().toISOString().split('T')[0]}',`);
      lines.push(`    updatedAt: '${new Date().toISOString().split('T')[0]}',`);
      lines.push(`    zh: {`);
      lines.push(`      title: 'TODO: 中文标题',`);
      lines.push(`      summary: 'TODO: 中文摘要',`);
      lines.push(`      content: ${varName}`);
      lines.push(`    },`);
      lines.push(`    en: {`);
      lines.push(`      title: 'TODO: English Title',`);
      lines.push(`      summary: 'TODO: English summary',`);
      lines.push(`      content: ${enVarName}`);
      lines.push(`    }`);
      lines.push(`  },`);
      lines.push('');
      id++;
    }
  }
  
  lines.push('];');
  return lines.join('\n');
}

// 主函数
function main() {
  console.log('🔍 扫描 Markdown 文件...\n');
  
  const files = scanMarkdownFiles(MARKDOWN_DIR);
  
  console.log(`📄 找到 ${files.length} 个 Markdown 文件:\n`);
  
  // 按目录分组显示
  const byDir = {};
  for (const file of files) {
    const dir = file.dir || '(root)';
    if (!byDir[dir]) byDir[dir] = [];
    byDir[dir].push(file.name);
  }
  
  for (const [dir, names] of Object.entries(byDir)) {
    console.log(`  📁 ${dir}/`);
    for (const name of names) {
      console.log(`     - ${name}`);
    }
  }
  
  console.log('\n' + '='.repeat(60) + '\n');
  
  // 生成导入语句
  const imports = generateImports(files);
  const noteObjects = generateNoteObjects(files);
  
  console.log('📋 生成的导入语句:\n');
  console.log(imports);
  
  console.log('\n' + '='.repeat(60) + '\n');
  
  console.log('📝 生成的笔记对象模板:\n');
  console.log(noteObjects);
  
  // 保存到临时文件（包含类型导入，可直接使用）
  const outputFile = path.join(__dirname, '../src/content/notes/generated-imports.ts');
  const fullContent = `import type { Note } from '@/types/note';\n\n${imports}\n\n${noteObjects}\n`;
  fs.writeFileSync(outputFile, fullContent);
  
  console.log(`\n✅ 已保存到: ${outputFile}`);
  console.log('\n💡 使用说明:');
  console.log('   方式1 - 快速替换:');
  console.log('     cp src/content/notes/generated-imports.ts src/content/notes/index.ts');
  console.log('   方式2 - 手动复制:');
  console.log('     1. 复制生成的导入语句到 index.ts 顶部');
  console.log('     2. 复制生成的笔记对象到 notes 数组');
  console.log('     3. 修改 TODO 项: status, tags, title, summary');
}

main();
