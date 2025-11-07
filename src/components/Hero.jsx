import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="beranda" className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/3j0Q0s4H2nQwFzXf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90 dark:from-slate-900/80 dark:via-slate-900/60 dark:to-slate-900/90 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Profil Sekolah Profesional dan Modern
          </h1>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
            Menyajikan informasi sekolah secara jelas, mudah diakses, dan ramah perangkat.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#profil" className="inline-flex items-center justify-center rounded-md bg-sky-600 px-5 py-2.5 text-white font-medium shadow hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400">
              Kenali Kami
            </a>
            <a href="#berita" className="inline-flex items-center justify-center rounded-md border border-slate-300 dark:border-slate-700 px-5 py-2.5 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400">
              Lihat Berita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
