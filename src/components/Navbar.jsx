import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon, GraduationCap } from 'lucide-react';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved ? saved === 'dark' : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', next);
  };

  const navItems = [
    { href: '#beranda', label: 'Beranda' },
    { href: '#profil', label: 'Profil Sekolah' },
    { href: '#program', label: 'Program & Fasilitas' },
    { href: '#berita', label: 'Berita' },
    { href: '#galeri', label: 'Galeri' },
    { href: '#kontak', label: 'Kontak' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navigasi utama">
        <div className="flex h-16 items-center justify-between">
          <a href="#beranda" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded px-1">
            <GraduationCap className="w-6 h-6 text-sky-600" aria-hidden="true" />
            <span className="font-semibold text-slate-800 dark:text-slate-100">SMK Negeri Contoh</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400 rounded px-1"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              aria-label={dark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
              className="p-2 rounded-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={dark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
              className="p-2 rounded-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Buka menu"
              className="p-2 rounded-md text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div id="mobile-menu" className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2 px-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
