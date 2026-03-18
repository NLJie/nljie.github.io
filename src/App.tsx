import { HashRouter, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { NotesPage } from '@/pages/NotesPage';
import { NoteDetailPage } from '@/pages/NoteDetailPage';
import { CategoryPage } from '@/pages/CategoryPage';
import './App.css';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/notes/:slug" element={<NoteDetailPage />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
          </Routes>
        </Layout>
      </HashRouter>
    </I18nextProvider>
  );
}

export default App;
