import Head from 'next/head';
import Image from 'next/image'; 

const GuruStaffCard = ({ name, title, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={name}
          sizes='100'
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-gray-600 text-sm">{title}</p>
      </div>
    </div>
  );
};

const guruData = [
  {
    id: 1,
    name: 'Budi Santoso, S.Pd.',
    title: 'Kepala Sekolah',
    imageUrl: '/images/teacher.jpg',
    alt: 'Foto Budi Santoso Kepala Sekolah',
  },
  {
    id: 2,
    name: 'Dewi Anggraini, M.Pd.',
    title: 'Wakil Kepala Sekolah Kurikulum',
    imageUrl: '/images/teacher.jpg',
    alt: 'Foto Dewi Anggraini Wakil Kepala Sekolah Kurikulum',
  },
  {
    id: 3,
    name: 'Rudi Wijaya, S.Kom.',
    title: 'Guru Matematika',
    imageUrl: '/images/teacher.jpg',
    alt: 'Foto Rudi Wijaya Guru Matematika',
  },
  {
    id: 4,
    name: 'Siti Aminah, S.Pd.',
    title: 'Guru Bahasa Inggris',
    imageUrl: '/images/teacher.jpg',
    alt: 'Foto Siti Aminah',
  },
];


const GuruDanStaff = () => {
  return (
    <div id='GuruStaff' className="bg-gray-100 min-h-screen">
      <Head>
        <title>Guru & Staff - Nama Sekolah Anda</title>
        <meta name="description" content="Daftar guru dan staf di sekolah kami" />
      </Head>

      <main className="container mx-auto px-16 py-20">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Guru & Staff Kami
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Kenali para pendidik dan staf profesional yang berdedikasi tinggi di sekolah kami, yang siap membimbing dan mendukung perkembangan siswa.
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {guruData.map((person) => (
              <GuruStaffCard
                key={person.id}
                name={person.name}
                title={person.title}
                imageUrl={person.imageUrl}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default GuruDanStaff;