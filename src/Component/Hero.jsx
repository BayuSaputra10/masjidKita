import Navbar from './Navbar';
import { FaWhatsapp } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url("/src/assets/gambar.jpg")' }}>
      {/* Navbar */}
      <Navbar />

      {/* Overlay */}
      <div className="absolute inset-0 opacity-100 bg-greenCustom mix-blend-multiply " ></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 mx-40">
        <h1 className="text-5xl font-bold mb-4 font-Hanken">Temukan kedamaian melalui dekat dengan Tuhan</h1>
        <p className="text-base mb-6 mx-24">Masjid bukan hanya sebagai tempat ibadah yang nyaman, tapi juga jadi tempat berbagai kegiatan, memupuk persaudaraan hingga membangkitkan perekonomian, atau tempat apapun yang berkaitan dengan keumatan.</p>
        <div className='flex gap-4'>
            <button className='border rounded-lg border-white  py-2 px-3 hover:bg-white hover:text-black transition duration-300 ease-in-out'>Baca Selengkapnya</button>
            <button className='flex items-center border bg-white text-black rounded-lg border-black  py-2 px-3 hover:bg-transparent hover:text-white hover:border-white transition duration-300 ease-in-out'>
    <FaWhatsapp className='mr-2 h-6 w-6'/>Hubungi Kami
    </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
