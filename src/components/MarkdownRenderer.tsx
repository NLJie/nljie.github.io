import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // 简单的 Markdown 渲染逻辑
  const lines = content.split('\n');
  const elements: React.ReactElement[] = [];
  let inCodeBlock = false;
  let codeContent = '';

  lines.forEach((line, index) => {
    // 代码块处理
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        elements.push(
          <pre key={`code-${index}`} className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto my-4">
            <code className="text-sm font-mono">{codeContent.trim()}</code>
          </pre>
        );
        codeContent = '';
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeContent += line + '\n';
      return;
    }

    // 标题处理
    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={index} className="text-3xl font-bold text-slate-800 mt-8 mb-4">
          {formatInlineText(line.slice(2))}
        </h1>
      );
      return;
    }
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={index} className="text-2xl font-semibold text-slate-800 mt-6 mb-3">
          {formatInlineText(line.slice(3))}
        </h2>
      );
      return;
    }
    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={index} className="text-xl font-semibold text-slate-800 mt-5 mb-2">
          {formatInlineText(line.slice(4))}
        </h3>
      );
      return;
    }

    // 列表处理
    if (line.startsWith('- ') || line.startsWith('* ')) {
      elements.push(
        <li key={index} className="ml-6 text-slate-700 leading-relaxed list-disc">
          {formatInlineText(line.slice(2))}
        </li>
      );
      return;
    }

    // 数字列表
    const numberedMatch = line.match(/^(\d+)\.\s(.+)$/);
    if (numberedMatch) {
      elements.push(
        <li key={index} className="ml-6 text-slate-700 leading-relaxed list-decimal">
          {formatInlineText(numberedMatch[2])}
        </li>
      );
      return;
    }

    // 图片处理
    const imageMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imageMatch) {
      const alt = imageMatch[1];
      const src = imageMatch[2];
      elements.push(
        <img 
          key={`img-${index}`} 
          src={src} 
          alt={alt} 
          className="w-full rounded-lg my-6 shadow-md"
          loading="lazy"
        />
      );
      return;
    }

    // 空行
    if (line.trim() === '') {
      elements.push(<div key={index} className="h-4" />);
      return;
    }

    // 普通段落
    elements.push(
      <p key={index} className="text-slate-700 leading-relaxed mb-4">
        {formatInlineText(line)}
      </p>
    );
  });

  return <>{elements}</>;
}

// 格式化行内文本
function formatInlineText(text: string): React.ReactElement {
  const parts: (string | React.ReactElement)[] = [];
  let lastIndex = 0;
  const regex = /(\*\*|\*|`)(.+?)\1/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const marker = match[1];
    const content = match[2];

    if (marker === '**') {
      parts.push(<strong key={match.index} className="font-semibold text-slate-800">{content}</strong>);
    } else if (marker === '*') {
      parts.push(<em key={match.index} className="italic">{content}</em>);
    } else if (marker === '`') {
      parts.push(
        <code key={match.index} className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-sm font-mono">
          {content}
        </code>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <>{parts}</>;
}
