const Footer = () => {
    return (
      <div className="py-5 bg-slate-200 text-center dark:text-gray-500 rounded-t-lg mx-2 md:mx-48">
      <a href="#hero" className="block text-xl md:text-2xl font-poppins font-semibold text-red-500">
          Games-To-Scrape
      </a>
      <a
          href=""
          className="text-sm md:text-md font-poppins hover:text-indigo-500"
      >
      </a>
      <p className="text-xs mt-2 text-red-500">
          © A scraping site {new Date().getFullYear()}. All rights reserved
      </p>
  </div>
    )
  }
  
  export default Footer