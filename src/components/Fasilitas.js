const Fasilitas = () => {
  const fasilitasData = [
    {
      nama: "Laboratorium Komputer",
      deskripsi: "Fasilitas lengkap dengan komputer modern untuk mendukung proses belajar teknologi dan komputer.",
      ikon: "🖥️"
    },
    {
      nama: "Perpustakaan",
      deskripsi: "Koleksi buku lengkap dan nyaman untuk menunjang kegiatan belajar dan penelitian siswa.",
      ikon: "📚"
    },
    {
      nama: "Ruang Kelas AC",
      deskripsi: "Ruang kelas yang nyaman dengan pendingin ruangan untuk mendukung kenyamanan belajar.",
      ikon: "🏫"
    },
    {
      nama: "Lapangan Olahraga",
      deskripsi: "Lapangan luas untuk berbagai kegiatan olahraga seperti sepak bola, basket, dan voli.",
      ikon: "⚽"
    },
    {
      nama: "Workshop Otomotif",
      deskripsi: "Tempat praktikum dengan peralatan lengkap untuk pembelajaran otomotif.",
      ikon: "🔧"
    },
    {
      nama: "Studio Multimedia",
      deskripsi: "Fasilitas untuk belajar desain grafis, animasi, editing video dan produksi konten digital.",
      ikon: "🎥"
    }
  ];

  return (
    <section id="Fasilitas" className="py-20 bg-white px-6 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-12 text-center">Fasilitas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fasilitasData.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow hover:shadow-lg transition cursor-pointer bg-white/70 backdrop-blur-md"
            >
              <div className="text-5xl mb-4">{item.ikon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.nama}</h3>
              <p className="text-gray-600">{item.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fasilitas;
