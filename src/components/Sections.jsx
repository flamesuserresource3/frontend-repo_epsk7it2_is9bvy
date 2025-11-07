import { Building2, Trophy, Library, Users } from 'lucide-react';

function Section({ id, title, children }) {
  return (
    <section id={id} className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6">{title}</h2>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
}

export function ProfilSekolah() {
  return (
    <Section id="profil" title="Profil Sekolah">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">Sejarah</h3>
          <p className="mt-2 text-slate-700 dark:text-slate-300">Didirikan pada tahun 1998, sekolah kami berkomitmen pada pendidikan berkualitas dengan budaya disiplin dan inovasi.</p>
          <h3 className="mt-6 text-xl font-semibold text-slate-800 dark:text-slate-100">Visi & Misi</h3>
          <ul className="mt-2 list-disc pl-5 text-slate-700 dark:text-slate-300">
            <li>Mencetak lulusan berkarakter, berdaya saing, dan siap kerja.</li>
            <li>Mewujudkan lingkungan belajar yang aman, inklusif, dan kolaboratif.</li>
          </ul>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <Building2 className="w-6 h-6 text-sky-600" />
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Struktur organisasi efektif dan transparan.</p>
            </div>
            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <Trophy className="w-6 h-6 text-amber-500" />
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Akreditasi A dengan prestasi akademik dan non-akademik.</p>
            </div>
            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <Library className="w-6 h-6 text-emerald-600" />
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Kurikulum adaptif mendukung kebutuhan industri.</p>
            </div>
            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <Users className="w-6 h-6 text-violet-600" />
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Komunitas kolaboratif antara sekolah, orang tua, dan industri.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function ProgramFasilitas() {
  const programs = [
    { title: 'Rekayasa Perangkat Lunak', desc: 'Fokus pada pengembangan aplikasi modern.' },
    { title: 'Teknik Jaringan Komputer', desc: 'Jaringan, cloud, dan keamanan siber.' },
    { title: 'Desain Komunikasi Visual', desc: 'Desain grafis, animasi, dan multimedia.' },
  ];

  const fasilitas = [
    'Laboratorium komputer modern',
    'Perpustakaan digital',
    'Ruang kelas multimedia',
    'Area olahraga dan auditorium',
  ];

  return (
    <Section id="program" title="Program & Fasilitas">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">Daftar Jurusan</h3>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            {programs.map((p) => (
              <div key={p.title} className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <p className="font-medium text-slate-800 dark:text-slate-100">{p.title}</p>
                <p className="text-sm mt-1 text-slate-600 dark:text-slate-300">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">Fasilitas</h3>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3">
            {fasilitas.map((f) => (
              <li key={f} className="p-3 rounded-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function BeritaPengumuman() {
  const news = [
    {
      title: 'Penerimaan Peserta Didik Baru 2025',
      date: '10 Jan 2025',
      excerpt: 'Informasi jadwal pendaftaran, syarat, dan alur PPDB online.',
      link: '#',
    },
    {
      title: 'Juara 1 Lomba Inovasi Teknologi',
      date: '22 Des 2024',
      excerpt: 'Tim RPL berhasil meraih juara tingkat provinsi.',
      link: '#',
    },
    {
      title: 'Workshop Karier Industri Kreatif',
      date: '5 Des 2024',
      excerpt: 'Kolaborasi dengan praktisi profesional untuk siswa kelas XII.',
      link: '#',
    },
  ];

  return (
    <Section id="berita" title="Berita & Pengumuman">
      <div className="grid md:grid-cols-3 gap-6">
        {news.map((n) => (
          <article key={n.title} className="rounded-lg border border-slate-200 dark:border-slate-700 p-5 flex flex-col">
            <header className="mb-2">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{n.title}</h3>
              <p className="text-xs text-slate-500">{n.date}</p>
            </header>
            <p className="text-sm text-slate-700 dark:text-slate-300 flex-1">{n.excerpt}</p>
            <a href={n.link} className="mt-4 inline-flex text-sky-600 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded px-1 w-max">Baca selengkapnya</a>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function GaleriKontak() {
  return (
    <Section id="galeri" title="Galeri & Kontak">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <div className="grid grid-cols-2 gap-3">
            {[1,2,3,4,5,6].map((i) => (
              <img key={i} src={`https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=600&q=60&sig=${i}`} alt={`Kegiatan ${i}`} className="rounded-lg object-cover aspect-[4/3]" />
            ))}
          </div>
          <div className="mt-4 aspect-video rounded-lg overflow-hidden">
            <iframe
              title="Video Profil"
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div id="kontak">
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">Kontak</h3>
          <form className="mt-4 grid gap-4" onSubmit={(e)=>{e.preventDefault(); alert('Terima kasih! Pesan Anda telah dikirim.');}}>
            <label className="grid gap-1">
              <span className="text-sm text-slate-700 dark:text-slate-300">Nama</span>
              <input type="text" required className="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-400" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-slate-700 dark:text-slate-300">Email</span>
              <input type="email" required className="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-400" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-slate-700 dark:text-slate-300">Pesan</span>
              <textarea required rows={4} className="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-400" />
            </label>
            <button type="submit" className="inline-flex justify-center items-center rounded-md bg-sky-600 px-5 py-2.5 text-white font-medium hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400 w-max">Kirim Pesan</button>
          </form>

          <div className="mt-8">
            <h4 className="font-medium text-slate-800 dark:text-slate-100">Lokasi</h4>
            <div className="mt-2 aspect-video rounded-lg overflow-hidden">
              <iframe
                title="Lokasi Sekolah"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.630518909486!2d106.82496431531005!3d-6.175392495528821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f42f1f5b2c55%3A0x301576d14febd40!2sMonas!5e0!3m2!1sen!2sid!4v1616990999999!5m2!1sen!2sid"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <ul className="mt-4 text-slate-700 dark:text-slate-300">
              <li><strong>Alamat:</strong> Jl. Pendidikan No. 1, Jakarta</li>
              <li><strong>Telepon:</strong> (021) 123456</li>
              <li><strong>Email:</strong> info@smkcontoh.sch.id</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Section;
