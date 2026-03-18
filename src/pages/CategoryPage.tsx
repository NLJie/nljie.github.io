import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowLeft, 
  Calendar, 
  Tag, 
  FolderOpen,
  ChevronRight,
  BookOpen,
  Code,
  Cpu, 
  Microchip,
  Grid3x3,
  Timer,
  Terminal,
  FileCode,
  Network,
  Wifi,
  Wrench,
  CircuitBoard,
  Car,
  Radio,
  Factory,
  Calculator
} from 'lucide-react';
import { getNotesByCategory } from '@/content/notes';
import { getCategoryBySlug } from '@/content/categories';
import type { Note } from '@/types/note';

// 图标映射 - 嵌入式方向
const categoryIcons: Record<string, React.ElementType> = {
  mcu: Cpu,
  mpu: Microchip,
  fpga: Grid3x3,
  rtos: Timer,
  'embedded-linux': Terminal,
  firmware: FileCode,
  protocols: Network,
  network: Wifi,
  tools: Wrench,
  'hardware-design': CircuitBoard,
  automotive: Car,
  iot: Radio,
  industrial: Factory,
  'embedded-c': Code,
  algorithms: Calculator,
  // 兼容旧分类
  frontend: Code,
  backend: Microchip,
  devops: Wrench,
};

export function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'zh' | 'en';

  const category = slug ? getCategoryBySlug(slug) : undefined;

  if (!category) {
    return <Navigate to="/notes" replace />;
  }

  const notes = getNotesByCategory(slug!);
  const Icon = categoryIcons[category.slug] || FolderOpen;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <Link to="/" className="hover:text-indigo-600">{t('nav.home')}</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/notes" className="hover:text-indigo-600">{t('nav.notes')}</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-slate-800">{category[lang].name}</span>
      </nav>

      {/* Category Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Icon className="w-7 h-7 text-indigo-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              {category[lang].name}
            </h1>
            <p className="text-slate-500 mt-1">
              {category[lang].description}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            {t('categories.noteCount', { count: notes.length })}
          </span>
        </div>
      </div>

      {/* Notes Grid */}
      {notes.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-slate-400 text-lg">{t('notes.noNotes')}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} lang={lang} />
          ))}
        </div>
      )}

      {/* Back Button */}
      <div className="mt-12">
        <Link to="/notes">
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('note.backToList')}
          </Button>
        </Link>
      </div>
    </div>
  );
}

interface NoteCardProps {
  note: Note;
  lang: 'zh' | 'en';
}

function NoteCard({ note, lang }: NoteCardProps) {
  return (
    <Link to={`/notes/${note.slug}`}>
      <Card className="h-full hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1">
        <CardContent className="p-6">
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
