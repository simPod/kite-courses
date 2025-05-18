import { Search } from "lucide-react";
import { useState } from "react";
// Simplified gallery without dialog for now
// import { Dialog, DialogContent } from "./ui/dialog";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1604869/pexels-photo-1604869.jpeg",
    alt: "Kiteboarding action shot over blue water",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1782146/pexels-photo-1782146.jpeg",
    alt: "Kitesurfer jumping over crystal clear waters",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1192454/pexels-photo-1192454.jpeg",
    alt: "Aerial view of kiteboarding beach with multiple kites",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1430672/pexels-photo-1430672.jpeg",
    alt: "Close-up of kiteboarding technique in action",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/1170807/pexels-photo-1170807.jpeg",
    alt: "Wave riding with colorful kite",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/1887629/pexels-photo-1887629.jpeg",
    alt: "One-on-one kiteboarding instruction session",
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/1718337/pexels-photo-1718337.jpeg",
    alt: "Sunset kiteboarding silhouettes against orange sky",
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/2526198/pexels-photo-2526198.jpeg",
    alt: "Kiteboarding equipment setup on beach",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-4 text-foreground">
            Kiteboarding <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto font-inter">
            A glimpse of the exhilarating moments that await you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Search className="text-white h-8 w-8" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simplified image viewer */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-[90vh] p-4">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <button 
              className="absolute top-2 right-2 bg-white rounded-full p-1"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
