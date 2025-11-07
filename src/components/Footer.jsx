function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <p className="font-semibold text-slate-800 dark:text-slate-100">SMK Negeri Contoh</p>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Mendidik generasi masa depan dengan integritas, kreativitas, dan keterampilan.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800 dark:text-slate-100">Tautan</p>
          <ul className="mt-2 space-y-1 text-slate-600 dark:text-slate-300">
            <li><a href="#profil" className="hover:text-slate-900 dark:hover:text-white">Profil</a></li>
            <li><a href="#program" className="hover:text-slate-900 dark:hover:text-white">Program</a></li>
            <li><a href="#berita" className="hover:text-slate-900 dark:hover:text-white">Berita</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-slate-800 dark:text-slate-100">Kontak</p>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Jl. Pendidikan No.1, Jakarta<br/>Email: info@smkcontoh.sch.id</p>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 py-4">&copy; {new Date().getFullYear()} SMK Negeri Contoh. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
