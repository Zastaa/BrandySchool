import Image from 'next/image';

const galleryItems = [
    {
        id: 1,
        src: '/images/upacara.jpg',
        alt: 'Upacara Bendera Senin Pagi',
        title: 'Upacara Bendera',
        description: 'Meningkatkan rasa nasionalisme dan kedisiplinan setiap hari Senin.'
    },
    {
        id: 2,
        src: '/images/olahraga.jpg',
        alt: 'Kegiatan Olahraga Bersama',
        title: 'Olahraga Bersama',
        description: 'Menjaga kebugaran dan semangat kebersamaan melalui olahraga.'
    },
    {
        id: 3,
        src: '/images/perpisahan.jpg',
        alt: 'Acara Perpisahan Siswa',
        title: 'Acara Perpisahan',
        description: 'Momen haru melepas siswa-siswi terbaik kami menuju jenjang selanjutnya.'
    },
    {
        id: 4,
        src: '/images/pramuka.jpeg',
        alt: 'Kegiatan Ekstrakurikuler Pramuka',
        title: 'Ekstrakurikuler Pramuka',
        description: 'Membangun karakter dan kemandirian siswa.'
    },
    {
        id: 5,
        src: '/images/pensi.jpg',
        alt: 'Pentas Seni Sekolah',
        title: 'Pentas Seni',
        description: 'Menampilkan bakat-bakat seni siswa yang luar biasa.'
    },
    {
        id: 6,
        src: '/images/kunjungan.jpg',
        alt: 'Kunjungan Edukasi Museum',
        title: 'Kunjungan Edukasi',
        description: 'Belajar langsung di luar kelas untuk pengalaman baru.'
    },
];

const Gallery = () => {
    return (
        <section id="Gallery" className="py-20 bg-gray-50 text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-4 md:text-5xl">
                    Galeri Kegiatan Sekolah
                </h2>
                <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
                    Lihatlah momen-momen berharga dan kegiatan seru di sekolah kami!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <div className="w-full h-72 relative">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                    quality={75}
                                    className="rounded-lg"
                                />
                            </div>
                            <div
                                className="absolute inset-x-0 bottom-0 bg-black/50 bg-opacity-60 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity duration-300
                                group-hover:opacity-100"
                            >
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <a
                        href="/gallery"
                        className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                    >
                        Lihat Semua Foto
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;