import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  zh: {
    translation: {
      // 导航
      nav: {
        home: '首页',
        notes: '笔记',
        about: '关于',
      },
      // 首页
      home: {
        title: '技术笔记',
        subtitle: '记录学习，分享知识',
        description: '这里是我整理的技术笔记，涵盖前端、后端、AI、DevOps 等多个领域。',
        viewAll: '查看全部笔记',
        latestNotes: '最新笔记',
        categories: '分类浏览',
      },
      // 笔记列表
      notes: {
        title: '全部笔记',
        search: '搜索笔记...',
        filterByCategory: '按分类筛选',
        allCategories: '全部分类',
        readMore: '阅读更多',
        noNotes: '暂无笔记',
        publishedOn: '发布于',
        updatedOn: '更新于',
        // 视图切换
        viewMode: '视图',
        cardView: '卡片视图',
        listView: '列表视图',
        // 排序
        sortBy: '排序',
        newest: '最新发布',
        oldest: '最早发布',
        sortTitle: '标题',
        recentlyUpdated: '最近更新',
      },
      // 笔记详情
      note: {
        backToList: '返回列表',
        tags: '标签',
        relatedNotes: '相关笔记',
      },
      // 分类
      categories: {
        title: '分类',
        viewNotes: '查看笔记',
        noteCount: '{{count}} 篇笔记',
      },
      // 页脚
      footer: {
        copyright: '© 2024 技术笔记. All rights reserved.',
        poweredBy: 'Powered by React + Vite',
      },
      // 语言切换
      language: {
        zh: '中文',
        en: 'English',
        switch: '切换语言',
      },
    },
  },
  en: {
    translation: {
      // Navigation
      nav: {
        home: 'Home',
        notes: 'Notes',
        about: 'About',
      },
      // Home
      home: {
        title: 'Tech Notes',
        subtitle: 'Learn, Record, Share',
        description: 'Here are my organized technical notes covering frontend, backend, AI, DevOps and more.',
        viewAll: 'View All Notes',
        latestNotes: 'Latest Notes',
        categories: 'Browse by Category',
      },
      // Notes List
      notes: {
        title: 'All Notes',
        search: 'Search notes...',
        filterByCategory: 'Filter by Category',
        allCategories: 'All Categories',
        readMore: 'Read More',
        noNotes: 'No notes yet',
        publishedOn: 'Published on',
        updatedOn: 'Updated on',
        // View Mode
        viewMode: 'View',
        cardView: 'Card View',
        listView: 'List View',
        // Sort
        sortBy: 'Sort by',
        newest: 'Newest First',
        oldest: 'Oldest First',
        sortTitle: 'Title',
        recentlyUpdated: 'Recently Updated',
      },
      // Note Detail
      note: {
        backToList: 'Back to List',
        tags: 'Tags',
        relatedNotes: 'Related Notes',
      },
      // Categories
      categories: {
        title: 'Categories',
        viewNotes: 'View Notes',
        noteCount: '{{count}} notes',
      },
      // Footer
      footer: {
        copyright: '© 2024 Tech Notes. All rights reserved.',
        poweredBy: 'Powered by React + Vite',
      },
      // Language
      language: {
        zh: '中文',
        en: 'English',
        switch: 'Switch Language',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh',
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
