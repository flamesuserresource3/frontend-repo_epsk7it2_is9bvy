import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section, { ProfilSekolah, ProgramFasilitas, BeritaPengumuman, GaleriKontak } from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 text-slate-800 dark:text-slate-100">
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 bg-sky-600 text-white px-4 py-2 rounded"
      >
        Lewati ke konten utama
      </a>
      <Navbar />
      <main id="konten">
        <Hero />
        <ProfilSekolah />
        <ProgramFasilitas />
        <BeritaPengumuman />
        <GaleriKontak />
      </main>
      <Footer />
    </div>
  );
}

export default App;
