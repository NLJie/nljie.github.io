import type { Note } from '@/types/note';

// ============================================
// 自动扫描所有 Markdown 文件（推荐方式）
// ============================================

// Vite 自动扫描所有 .md 文件
// 返回形如: { './markdown/mcu/stm32/xxx.zh.md': string }
const markdownModules = import.meta.glob('./markdown/**/*.md', { 
  eager: true,           // 立即加载，不是懒加载
  query: '?raw',         // 作为原始字符串导入
  import: 'default'      // 导入默认导出（即字符串内容）
});

// 调试：打印扫描到的文件
console.log('📄 扫描到的 Markdown 文件:', Object.keys(markdownModules));

// 解析文件路径，自动提取信息
interface ParsedFile {
  path: string;
  slug: string;
  lang: 'zh' | 'en';
  category: string;
  subCategory?: string;
  content: string;
}

function parseFilePath(fullPath: string, content: string): ParsedFile | null {
  // 路径格式: ./markdown/xxx/yyy/zzz.zh.md
  const match = fullPath.match(/^\.\/markdown\/(.+)\.([a-z]{2})\.md$/);
  if (!match) return null;

  const relativePath = match[1]; // xxx/yyy/zzz
  const lang = match[2] as 'zh' | 'en';
  
  // 从路径推断分类
  const pathParts = relativePath.split('/');
  const slug = pathParts[pathParts.length - 1]; // 最后一部分是 slug
  
  // 分类推断逻辑
  let category = 'uncategorized';
  if (pathParts.length >= 1) {
    const firstDir = pathParts[0];
    const categoryMap: Record<string, string> = {
      'mcu': 'mcu',
      'rtos': 'rtos',
      'protocols': 'protocols',
      'hardware-design': 'hardware-design',
      'tools': 'tools',
      'embedded-linux': 'embedded-linux',
      'automotive': 'automotive',
      'iot': 'iot',
      'industrial': 'industrial',
      'embedded-c': 'embedded-c',
      'algorithms': 'algorithms',
    };
    category = categoryMap[firstDir] || firstDir;
  }

  return {
    path: fullPath,
    slug,
    lang,
    category,
    subCategory: pathParts.length > 2 ? pathParts[1] : undefined,
    content
  };
}

// 自动配对中英文文件，生成笔记数据
function generateNotes(): Note[] {
  const fileMap = new Map<string, { zh?: ParsedFile; en?: ParsedFile }>();

  // 遍历所有扫描到的文件
  for (const [path, module] of Object.entries(markdownModules)) {
    const content = module as unknown as string;
    const parsed = parseFilePath(path, content);
    if (!parsed) continue;

    // 按 slug 分组
    if (!fileMap.has(parsed.slug)) {
      fileMap.set(parsed.slug, {});
    }
    const group = fileMap.get(parsed.slug)!;
    group[parsed.lang] = parsed;
  }

  // 生成笔记数组
  const notes: Note[] = [];
  let id = 1;

  for (const [slug, { zh, en }] of fileMap) {
    // 至少需要中文版本
    if (!zh) {
      console.warn(`⚠️ 跳过 ${slug}: 缺少中文版本`);
      continue;
    }

    // 从 Markdown 内容中提取标题（第一个 # 后面的文字）
    const titleMatch = zh.content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1].trim() : slug;

    // 从 Markdown 内容中提取摘要（第一段文字）
    const summaryMatch = zh.content.match(/^#\s+.+\n+(.+?)(?:\n\n|\n#{1,6}\s)/s);
    const summary = summaryMatch 
      ? summaryMatch[1].replace(/\n/g, ' ').substring(0, 100) + '...'
      : '暂无摘要';

    notes.push({
      id: String(id++),
      slug,
      status: 'published',
      category: zh.category,
      tags: [zh.category, zh.subCategory].filter(Boolean) as string[],
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      zh: {
        title,
        summary,
        content: zh.content
      },
      en: {
        title: en ? (en.content.match(/^#\s+(.+)$/m)?.[1].trim() || title) : title,
        summary: en ? (en.content.match(/^#\s+.+\n+(.+?)(?:\n\n|\n#{1,6}\s)/s)?.[1].replace(/\n/g, ' ').substring(0, 100) + '...' || summary) : summary,
        content: en?.content || zh.content  // 如果没有英文版，复用中文版
      }
    });
  }

  console.log(`✅ 自动生成 ${notes.length} 篇笔记`);
  return notes;
}

// 生成并导出笔记数据
export const notes: Note[] = generateNotes();

// ============================================
// 查询函数
// ============================================

export function getPublishedNotes(): Note[] {
  return notes.filter(note => note.status === 'published');
}

export function getNoteBySlug(slug: string): Note | undefined {
  return notes.find(note => note.slug === slug);
}

export function getNotesByCategory(categorySlug: string): Note[] {
  return getPublishedNotes().filter(note => note.category === categorySlug);
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  getPublishedNotes().forEach(note => {
    note.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet);
}

export function searchNotes(query: string, lang: 'zh' | 'en'): Note[] {
  const lowerQuery = query.toLowerCase();
  return getPublishedNotes().filter(note => 
    note[lang].title.toLowerCase().includes(lowerQuery) ||
    note[lang].summary.toLowerCase().includes(lowerQuery) ||
    note.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}
