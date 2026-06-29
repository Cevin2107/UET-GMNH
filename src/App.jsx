import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import FilterPills from './components/FilterPills';
import MajorGrid from './components/MajorGrid';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { majors, categories } from './data/majors';

export default function App() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    const saved = localStorage.getItem('uet-dark');
    if (saved !== null) return saved === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    localStorage.setItem('uet-dark', String(dark));
  }, [dark]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return majors.filter((m) => {
      const matchCat = activeCategory === 'all' || m.categoryId === activeCategory;
      if (!matchCat) return false;
      if (!q) return true;
      return (
        m.code.toLowerCase().includes(q) ||
        m.name.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q)
      );
    });
  }, [query, activeCategory]);

  const groups = useMemo(() => {
    const map = new Map();
    for (const m of filtered) {
      if (!map.has(m.category)) {
        map.set(m.category, { category: m.category, categoryId: m.categoryId, items: [] });
      }
      map.get(m.category).items.push(m);
    }
    return Array.from(map.values());
  }, [filtered]);

  return (
    <>
      <Navbar dark={dark} onToggleDark={() => setDark((d) => !d)} />
      <Hero />

      <main id="majors" className="container">
        <div className="controls">
          <SearchBar value={query} onChange={setQuery} />
          <FilterPills categories={categories} active={activeCategory} onChange={setActiveCategory} />
        </div>

        {filtered.length === 0 ? (
          <div className="empty">
            <div className="empty__emoji">🔍</div>
            <p>Không tìm thấy ngành học phù hợp.</p>
          </div>
        ) : (
          <MajorGrid groups={groups} />
        )}
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
