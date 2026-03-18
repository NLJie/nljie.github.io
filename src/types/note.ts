export type NoteStatus = 'published' | 'draft';

export interface Note {
  id: string;
  slug: string;
  status: NoteStatus;
  category: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  // 中文内容
  zh: {
    title: string;
    summary: string;
    content: string;
  };
  // 英文内容
  en: {
    title: string;
    summary: string;
    content: string;
  };
}

export interface Category {
  id: string;
  slug: string;
  icon: string;
  // 中文
  zh: {
    name: string;
    description: string;
  };
  // 英文
  en: {
    name: string;
    description: string;
  };
}

// 视图类型
export type ViewMode = 'card' | 'list';

// 排序选项
export type SortOption = 'newest' | 'oldest' | 'title' | 'updated';

// 排序配置
export interface SortConfig {
  option: SortOption;
  label: string;
}
