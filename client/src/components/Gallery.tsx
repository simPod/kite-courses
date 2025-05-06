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
    src: "https://pixabay.com/get/g46b77e8b3853777ed1a826ad022b49a0ea3919bd04d077762a19f9638a38e9685f54c4e1880417b05af69dc26b8922647d2205d17b5ffbe844d2c356407e4f90_1280.jpg",
    alt: "Kiteboarding action shot",
  },
  {
    id: 2,
    src: "https://pixabay.com/get/g79062f3b382ecccf0320aec30980a6c1ab11511f40ddb794a6e8de647b850837c02106c18aacd59f2e54c20c52c1ae8e9d0ab91e7959a43bec09dcd01923c220_1280.jpg",
    alt: "Kiteboarding in clear waters",
  },
  {
    id: 3,
    src: "https://pixabay.com/get/g5ed4a187d489b36b6aaaeed8b56001e7eee5a8b5e76b803166145a49ce0a7927c6e3ba7c77f3bc0ba308b8fef614a281b9ec882693f2b65831cffb1d58278502_1280.jpg",
    alt: "Aerial view of kiteboarding beach",
  },
  {
    id: 4,
    src: "https://pixabay.com/get/g72bb60b2c17f5d06dcd842e1db0cca0b2c2c5b7671d6ea31fc3b80b8cee922d95aab817e7efd6a6f2f3b2033b91ef48d4057e210af81c44c74aa1b30f479883f_1280.jpg",
    alt: "Close-up of kiteboarding technique",
  },
  {
    id: 5,
    src: "https://pixabay.com/get/g269241b6e0e8c27ccce2055c7f630b0f58e28a14a6e1902119f8c1e4ef6106bd53d3d3acd4f315d55bf8d86b5567f7647d85f79af976a51e2478d8e598b1c749_1280.jpg",
    alt: "Wave riding with kite",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80",
    alt: "One-on-one kiteboarding instruction",
  },
  {
    id: 7,
    src: "https://pixabay.com/get/gbbdfd2515bbc84b90d6ed9e2be7f136b1bb6ccf45af41b3b02e8d7fbfe1bb9255220d1778032e338c4af5f8adb6db058095f74cf965ffa07d203e5284dd362cb_1280.jpg",
    alt: "Sunset kiteboarding silhouettes",
  },
  {
    id: 8,
    src: "https://pixabay.com/get/g5d2f73d9ab247a3fee8d642206c3726aae2bffed02cafba8757ccb980d94659cab9450a174cae04cb8e16a93fffd954229d63351850524f4d72efa95a42f9732_1280.jpg",
    alt: "Kiteboarding equipment setup",
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
