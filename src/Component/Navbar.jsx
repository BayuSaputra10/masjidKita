const Navbar = () => {
    return (
      <>
        <nav className="absolute top-0 left-0 w-full text-white z-20">
          <div className="container   mx-auto flex justify-between items-center px-48 py-12 bg-transparent">
            <div className="logo-item flex items-center">
              <img src="/src/assets/Vector.png" alt="Logo Masjid" className="h-8" />
              <div className="ml-2">
              <img src="/src/assets/المسجد الكندري.png" alt="Lambang Masjid" />
              <h1 className="text-xl font-bold">Masjid Al-Kandari</h1>
              </div>
            </div>
            <div className="menu-item">
            <ul className="flex gap-4">
  <li>
    <a href="#" className="px-3 py-2 hover:bg-white hover:text-black rounded-lg transition duration-300 ease-in-out">Beranda</a>
  </li>
  <li>
    <a href="#" className="px-3 py-2 hover:bg-white hover:text-black rounded-lg transition duration-300 ease-in-out">Blog</a>
  </li>
  <li>
    <a href="#" className="px-3 py-2 hover:bg-white hover:text-black rounded-lg transition duration-300 ease-in-out">Kegiatan</a>
  </li>
  <li>
    <a href="#" className="px-3 py-2 hover:bg-white hover:text-black rounded-lg transition duration-300 ease-in-out">Tentang</a>
  </li>
  <li>
    <a href="#" className="px-3 py-2 hover:bg-white hover:text-black rounded-lg transition duration-300 ease-in-out">Kontak</a>
  </li>
</ul>

            </div>
          </div>
        </nav>
      </>
    );
  };
  
  export default Navbar;
  