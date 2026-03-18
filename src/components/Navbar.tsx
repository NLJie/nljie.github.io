import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Menu, X, Globe, BookOpen, Home, ChevronDown,
  Cpu, Microchip, Grid3x3, Timer, Terminal, FileCode,
  Network, Wifi, Wrench, CircuitBoard, Car, Radio, Factory,
  Code, Calculator, Bug, Layout
} from 'lucide-react';
import { getRootCategories } from '@/content/categories';
import type { Category } from '@/types/note';

// 图标映射
const iconMap: Record<string, React.ElementType> = {
  Cpu, Microchip, Grid3x3, Timer, Terminal, FileCode,
  Network, Wifi, Wrench, CircuitBoard, Car, Radio, Factory,
  Code, Calculator, Globe, Bug, Layout, BookOpen, Home,
};

// 获取图标组件
function getIcon(iconName: string) {
  return iconMap[iconName] || BookOpen;
}

// 渲染分类项（递归支持多级）
function CategoryMenuItem({ 
  category, 
  lang, 
  onNavigate 
}: { 
  category: Category; 
  lang: 'zh' | 'en';
  onNavigate: () => void;
}) {
  const Icon = getIcon(category.icon);
  const hasChildren = category.children && category.children.length > 0;

  // 如果没有子分类，直接渲染为链接
  if (!hasChildren) {
    return (
      <DropdownMenuItem asChild onClick={onNavigate}>
        <Link to={`/category/${category.slug}`} className="flex items-center gap-2">
          <Icon className="w-4 h-4" />
          <span>{category[lang].name}</span>
        </Link>
      </DropdownMenuItem>
    );
  }

  // 有子分类，渲染为子菜单
  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger className="flex items-center gap-2 cursor-pointer">
        <Icon className="w-4 h-4" />
        <span>{category[lang].name}</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent className="w-48">
        {/* 查看全部 */}
        <DropdownMenuItem asChild onClick={onNavigate}>
          <Link to={`/category/${category.slug}`} className="flex items-center gap-2 font-medium">
            <span>查看全部 {category[lang].name}</span>
          </Link>
        </DropdownMenuItem>
        {/* 分割线 */}
        <div className="h-px bg-slate-200 my-1" />
        {/* 子分类 */}
        {category.children?.map((child) => (
          <CategoryMenuItem 
            key={child.id} 
            category={child} 
            lang={lang}
            onNavigate={onNavigate}
          />
        ))}
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  );
}

export function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(newLang);
  };

  const lang = i18n.language as 'zh' | 'en';
  const rootCategories = getRootCategories();

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
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800 hidden sm:block">
              {t('home.title')}
            </span>
          </Link>

          {/* Desktop Navigation - 多级菜单 */}
          <div className="hidden lg:flex items-center gap-1">
            {/* 首页 */}
            <Link to="/">
              <Button
                variant={isActive('/') ? 'default' : 'ghost'}
                className={isActive('/') ? 'bg-indigo-500 hover:bg-indigo-600' : ''}
                size="sm"
              >
                <Home className="w-4 h-4 mr-1" />
                {t('nav.home')}
              </Button>
            </Link>

            {/* 分类下拉菜单 - 树形结构 */}
            {rootCategories.map((category) => (
              <DropdownMenu key={category.id}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant={isActive(`/category/${category.slug}`) ? 'default' : 'ghost'}
                    className={isActive(`/category/${category.slug}`) ? 'bg-indigo-500 hover:bg-indigo-600' : ''}
                    size="sm"
                  >
                    {category[lang].name}
                    <ChevronDown className="w-3 h-3 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48" align="start">
                  {/* 查看该分类全部 */}
                  <DropdownMenuItem asChild>
                    <Link to={`/category/${category.slug}`} className="font-medium">
                      全部 {category[lang].name}
                    </Link>
                  </DropdownMenuItem>
                  <div className="h-px bg-slate-200 my-1" />
                  {/* 子分类 */}
                  {category.children?.map((child) => (
                    <CategoryMenuItem
                      key={child.id}
                      category={child}
                      lang={lang}
                      onNavigate={() => {}}
                    />
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}

            {/* 所有笔记 */}
            <Link to="/notes">
              <Button
                variant={isActive('/notes') ? 'default' : 'ghost'}
                className={isActive('/notes') ? 'bg-indigo-500 hover:bg-indigo-600' : ''}
                size="sm"
              >
                <BookOpen className="w-4 h-4 mr-1" />
                {t('nav.notes')}
              </Button>
            </Link>
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
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-100">
            <div className="flex flex-col gap-2">
              {/* 首页 */}
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  variant={isActive('/') ? 'default' : 'ghost'}
                  className={`w-full justify-start ${isActive('/') ? 'bg-indigo-500 hover:bg-indigo-600' : ''}`}
                >
                  <Home className="w-4 h-4 mr-2" />
                  {t('nav.home')}
                </Button>
              </Link>

              {/* 分类 - 移动端展开式 */}
              {rootCategories.map((category) => (
                <div key={category.id} className="space-y-1">
                  <Link to={`/category/${category.slug}`} onClick={() => setIsMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start font-medium"
                    >
                      {category[lang].name}
                    </Button>
                  </Link>
                  {/* 二级分类 */}
                  {category.children?.map((child) => (
                    <Link 
                      key={child.id} 
                      to={`/category/${child.slug}`} 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Button
                        variant="ghost"
                        className="w-full justify-start pl-8 text-sm text-slate-600"
                      >
                        {child[lang].name}
                      </Button>
                    </Link>
                  ))}
                </div>
              ))}

              {/* 所有笔记 */}
              <Link to="/notes" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  variant={isActive('/notes') ? 'default' : 'ghost'}
                  className={`w-full justify-start ${isActive('/notes') ? 'bg-indigo-500 hover:bg-indigo-600' : ''}`}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  {t('nav.notes')}
                </Button>
              </Link>

              {/* 语言切换 */}
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
