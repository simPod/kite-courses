import { Search } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="sm:max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
