import { useEffect, useState } from "react";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // These are direct links to Pexels kitesurfing images
  const galleryImages = [
    "https://images.pexels.com/photos/1604869/pexels-photo-1604869.jpeg",
    "https://images.pexels.com/photos/1782146/pexels-photo-1782146.jpeg",
    "https://images.pexels.com/photos/1192454/pexels-photo-1192454.jpeg",
    "https://images.pexels.com/photos/1430672/pexels-photo-1430672.jpeg",
    "https://images.pexels.com/photos/1170807/pexels-photo-1170807.jpeg",
    "https://images.pexels.com/photos/1887629/pexels-photo-1887629.jpeg",
    "https://images.pexels.com/photos/1718337/pexels-photo-1718337.jpeg",
    "https://images.pexels.com/photos/2526198/pexels-photo-2526198.jpeg"
  ];

  // Simplified locations
  const locations = [
    {
      name: "El Gouna",
      country: "Egypt",
      image: "https://images.pexels.com/photos/1430672/pexels-photo-1430672.jpeg",
      season: "Year-round",
      description: "Known for its consistent winds and flat, shallow lagoons, El Gouna offers perfect conditions for all skill levels."
    },
    {
      name: "Lefkada",
      country: "Greece",
      image: "https://images.pexels.com/photos/3180999/pexels-photo-3180999.jpeg",
      season: "May - October",
      description: "The emerald waters and thermal winds of Lefkada create a Mediterranean kiteboarding paradise."
    }
  ];

  return (
    <>
      {/* Simple Navbar */}
      <header className={`fixed w-full z-50 transition-all ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className={`text-2xl font-montserrat font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>KiteCoach</h1>
          <nav className="hidden md:flex space-x-6">
            {["Home", "About", "Courses", "Locations", "Gallery", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-cyan-600' : 'text-white hover:text-cyan-100'}`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="h-screen flex items-center justify-center relative overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1604869/pexels-photo-1604869.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gray-900/50"></div>
          <div className="container mx-auto px-4 z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-montserrat font-bold text-white mb-6 leading-tight">
              Premium <span className="text-cyan-400">Kiteboarding</span> <br />
              Coaching
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto font-light">
              One-on-one coaching in the world's most beautiful kiteboarding
              destinations
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#courses" 
                className="bg-cyan-500 text-white hover:bg-cyan-600 px-6 py-3 rounded-md text-lg font-medium"
              >
                Explore Courses
              </a>
              <a 
                href="#contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-md text-lg font-medium"
              >
                Book a Session
              </a>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section id="locations" className="py-20 bg-gradient-to-b from-white to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-4">
                Premium <span className="text-cyan-600">Destinations</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience world-class coaching in these kiteboarding paradises
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {locations.map((location, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-all transform hover:-translate-y-2"
                >
                  <div className="h-72 overflow-hidden">
                    <img
                      src={location.image}
                      alt={`${location.name}, ${location.country} - Kiteboarding Destination`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-montserrat font-bold">
                        {location.name}, {location.country}
                      </h3>
                      <span className="px-3 py-1 bg-cyan-100 text-cyan-800 font-medium rounded-full text-sm">
                        {location.season}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-6">
                      {location.description}
                    </p>

                    <a 
                      href="#contact"
                      className="block w-full py-2 px-4 text-center rounded-md font-medium bg-cyan-600 text-white hover:bg-cyan-700"
                    >
                      Book {location.name} Sessions
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-4">
                Kiteboarding <span className="text-cyan-600">Gallery</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A glimpse of the exhilarating moments that await you
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg group cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`Kiteboarding action shot ${index + 1}`}
                    className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white h-8 w-8">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold font-montserrat mb-4">KiteCoach</h2>
              <p className="max-w-xs text-gray-400">
                Premium one-on-one kiteboarding coaching in the world's most beautiful destinations.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {["Home", "About", "Courses", "Locations", "Gallery", "Contact"].map((item) => (
                    <li key={item}>
                      <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-cyan-400 transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Locations</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#locations" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      El Gouna, Egypt
                    </a>
                  </li>
                  <li>
                    <a href="#locations" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      Lefkada, Greece
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} KiteCoach. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
