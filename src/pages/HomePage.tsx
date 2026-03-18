import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, Code, Server, Brain, Cloud, Layers } from 'lucide-react';
import { getPublishedNotes } from '@/content/notes';
import { categories } from '@/content/categories';
import type { Note } from '@/types/note';

// 图标映射
const categoryIcons: Record<string, React.ElementType> = {
  frontend: Code,
  backend: Server,
  ai: Brain,
  devops: Cloud,
  architecture: Layers,
};

export function HomePage() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'zh' | 'en';
  
  const publishedNotes = getPublishedNotes().slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('home.title')}
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 mb-4">
            {t('home.subtitle')}
          </p>
          <p className="text-lg text-indigo-200 mb-8 max-w-2xl mx-auto">
            {t('home.description')}
          </p>
          <Link to="/notes">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
              {t('home.viewAll')}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
            {t('home.categories')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const Icon = categoryIcons[category.slug] || BookOpen;
              return (
                <Link key={category.id} to={`/category/${category.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                          <Icon className="w-6 h-6 text-indigo-500 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-800 mb-1">
                            {category[lang].name}
                          </h3>
                          <p className="text-sm text-slate-500">
                            {category[lang].description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Notes Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
              {t('home.latestNotes')}
            </h2>
            <Link to="/notes">
              <Button variant="ghost" className="text-indigo-600">
                {t('home.viewAll')}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publishedNotes.map((note) => (
              <NoteCard key={note.id} note={note} lang={lang} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

interface NoteCardProps {
  note: Note;
  lang: 'zh' | 'en';
}

function NoteCard({ note, lang }: NoteCardProps) {
  const category = categories.find(c => c.slug === note.category);

  return (
    <Link to={`/notes/${note.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary" className="text-xs">
              {category?.[lang].name}
            </Badge>
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2 line-clamp-2">
            {note[lang].title}
          </h3>
          <p className="text-sm text-slate-500 mb-4 line-clamp-3">
            {note[lang].summary}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1">
              {note.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-xs text-slate-400">
                  #{tag}
                </span>
              ))}
            </div>
            <span className="text-xs text-slate-400">
              {note.createdAt}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
