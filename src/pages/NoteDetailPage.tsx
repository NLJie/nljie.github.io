import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Tag, 
  FolderOpen,
  ChevronRight
} from 'lucide-react';
import { getNoteBySlug, getPublishedNotes } from '@/content/notes';
import { categories } from '@/content/categories';

export function NoteDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'zh' | 'en';

  const note = slug ? getNoteBySlug(slug) : undefined;

  if (!note || note.status !== 'published') {
    return <Navigate to="/notes" replace />;
  }

  const category = categories.find(c => c.slug === note.category);
  const relatedNotes = getPublishedNotes()
    .filter(n => n.category === note.category && n.id !== note.id)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <Link to="/" className="hover:text-indigo-600">{t('nav.home')}</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/notes" className="hover:text-indigo-600">{t('nav.notes')}</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-slate-800">{note[lang].title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <Card>
            <CardContent className="p-8">
              {/* Header */}
              <div className="mb-8">
                {/* Category */}
                <Link to={`/category/${note.category}`}>
                  <Badge className="mb-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
                    <FolderOpen className="w-3 h-3 mr-1" />
                    {category?.[lang].name}
                  </Badge>
                </Link>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  {note[lang].title}
                </h1>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {t('notes.publishedOn')} {note.createdAt}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {t('notes.updatedOn')} {note.updatedAt}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {note.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="inline-flex items-center gap-1 text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-slate max-w-none">
                <MarkdownRenderer content={note[lang].content || ''} />
              </div>

              {/* Back Button */}
              <div className="mt-12 pt-8 border-t border-slate-100">
                <Link to="/notes">
                  <Button variant="outline">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {t('note.backToList')}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            {/* Related Notes */}
            {relatedNotes.length > 0 && (
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-slate-800 mb-4">
                    {t('note.relatedNotes')}
                  </h3>
                  <div className="space-y-3">
                    {relatedNotes.map((relatedNote) => (
                      <Link 
                        key={relatedNote.id} 
                        to={`/notes/${relatedNote.slug}`}
                        className="block p-3 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <p className="text-sm font-medium text-slate-700 line-clamp-2">
                          {relatedNote[lang].title}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          {relatedNote.createdAt}
                        </p>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Category Info */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-slate-800 mb-2">
                  {category?.[lang].name}
                </h3>
                <p className="text-sm text-slate-500">
                  {category?.[lang].description}
                </p>
                <Link to={`/category/${note.category}`}>
                  <Button variant="ghost" size="sm" className="mt-3 text-indigo-600">
                    {t('categories.viewNotes')}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
