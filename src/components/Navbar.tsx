import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, BookOpen, Home } from 'lucide-react';

export function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { path: '/', label: t('nav.home'), icon: Home },
    { path: '/notes', label: t('nav.notes'), icon: BookOpen },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800">
              {t('home.title')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? 'default' : 'ghost'}
                  className={isActive(item.path) ? 'bg-indigo-500 hover:bg-indigo-600' : ''}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden md:flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              <span>{i18n.language === 'zh' ? 'EN' : '中文'}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    variant={isActive(item.path) ? 'default' : 'ghost'}
                    className={`w-full justify-start ${
                      isActive(item.path) ? 'bg-indigo-500 hover:bg-indigo-600' : ''
                    }`}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                </Link>
              ))}
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  toggleLanguage();
                  setIsMobileMenuOpen(false);
                }}
              >
                <Globe className="w-4 h-4 mr-2" />
                {t('language.switch')} ({i18n.language === 'zh' ? 'EN' : '中文'})
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
