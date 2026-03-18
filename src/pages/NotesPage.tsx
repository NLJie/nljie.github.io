import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { 
  Search, 
  Calendar, 
  Tag, 
  LayoutGrid, 
  List,
  ArrowUpDown,
  Clock,
  ChevronRight
} from 'lucide-react';
import { getPublishedNotes } from '@/content/notes';
import { categories } from '@/content/categories';
import type { Note, ViewMode, SortOption } from '@/types/note';

export function NotesPage() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'zh' | 'en';
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('card');
  const [sortOption, setSortOption] = useState<SortOption>('newest');

  const allNotes = getPublishedNotes();

  // 排序选项配置
  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'newest', label: t('notes.newest') },
    { value: 'oldest', label: t('notes.oldest') },
    { value: 'title', label: t('notes.title') },
    { value: 'updated', label: t('notes.recentlyUpdated') },
  ];

  // 过滤和排序笔记
  const filteredAndSortedNotes = useMemo(() => {
    let notes = allNotes.filter((note) => {
      const matchesSearch = 
        note[lang].title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note[lang].summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = 
        selectedCategory === 'all' || note.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    // 排序
    notes = [...notes].sort((a, b) => {
      switch (sortOption) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'title':
          return a[lang].title.localeCompare(b[lang].title, lang);
        case 'updated':
          return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
        default:
          return 0;
      }
    });

    return notes;
  }, [allNotes, searchQuery, selectedCategory, sortOption, lang]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          {t('notes.title')}
        </h1>
        
        {/* Filters & Controls */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder={t('notes.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full lg:w-48">
              <SelectValue placeholder={t('notes.filterByCategory')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('notes.allCategories')}</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.slug}>
                  {category[lang].name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Sort */}
          <Select value={sortOption} onValueChange={(v) => setSortOption(v as SortOption)}>
            <SelectTrigger className="w-full lg:w-44">
              <ArrowUpDown className="w-4 h-4 mr-2" />
              <SelectValue placeholder={t('notes.sortBy')} />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* View Mode Toggle */}
          <TooltipProvider>
            <div className="flex items-center gap-1 border rounded-lg p-1 bg-white">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={viewMode === 'card' ? 'default' : 'ghost'}
                    size="icon"
                    className="h-9 w-9"
                    onClick={() => setViewMode('card')}
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t('notes.cardView')}</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="icon"
                    className="h-9 w-9"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t('notes.listView')}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>

        {/* Results Count */}
        <div className="mt-4 text-sm text-slate-500">
          {filteredAndSortedNotes.length} {lang === 'zh' ? '篇笔记' : 'notes'}
        </div>
      </div>

      {/* Notes Display */}
      {filteredAndSortedNotes.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-slate-400 text-lg">{t('notes.noNotes')}</p>
        </div>
      ) : (
        <div className={viewMode === 'card' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          : 'flex flex-col gap-4'
        }>
          {filteredAndSortedNotes.map((note) => (
            viewMode === 'card' 
              ? <NoteCard key={note.id} note={note} lang={lang} />
              : <NoteListItem key={note.id} note={note} lang={lang} />
          ))}
        </div>
      )}
    </div>
  );
}

// 卡片视图组件
interface NoteCardProps {
  note: Note;
  lang: 'zh' | 'en';
}

function NoteCard({ note, lang }: NoteCardProps) {
  const category = categories.find(c => c.slug === note.category);

  return (
    <Link to={`/notes/${note.slug}`}>
      <Card className="h-full hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1">
        <CardContent className="p-6">
          {/* Category Badge */}
          <div className="flex items-center gap-2 mb-3">
            <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-100">
              {category?.[lang].name}
            </Badge>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-slate-800 mb-3 line-clamp-2">
            {note[lang].title}
          </h3>

          {/* Summary */}
          <p className="text-sm text-slate-500 mb-4 line-clamp-3">
            {note[lang].summary}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {note.createdAt}
              </span>
            </div>
            <div className="flex gap-1">
              {note.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-xs text-slate-400 flex items-center gap-0.5">
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

// 列表视图组件
interface NoteListItemProps {
  note: Note;
  lang: 'zh' | 'en';
}

function NoteListItem({ note, lang }: NoteListItemProps) {
  const category = categories.find(c => c.slug === note.category);

  return (
    <Link to={`/notes/${note.slug}`}>
      <Card className="hover:shadow-md transition-all cursor-pointer group">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            {/* Category Icon */}
            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <span className="text-xs font-medium text-indigo-600">
                {category?.[lang].name.slice(0, 2)}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                {note[lang].title}
              </h3>
              <p className="text-sm text-slate-500 line-clamp-1 mt-1">
                {note[lang].summary}
              </p>
            </div>

            {/* Meta Info */}
            <div className="hidden sm:flex flex-col items-end gap-1 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {note.createdAt}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {note.updatedAt}
              </span>
            </div>

            {/* Tags */}
            <div className="hidden md:flex flex-wrap gap-1 max-w-[150px] justify-end">
              {note.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Arrow */}
            <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-500 transition-colors" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
