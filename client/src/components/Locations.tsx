import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wind, Waves, Thermometer, Umbrella, Mountain, Utensils } from "lucide-react";

// Declare the global Google Maps callback function
declare global {
  interface Window {
    initMaps: () => void;
  }
}

interface LocationFeature {
  icon: React.ReactNode;
  text: string;
}

interface Location {
  id: string;
  name: string;
  country: string;
  season: string;
  seasonClass: string;
  description: string;
  image: string;
  mapId: string;
  coordinates: { lat: number; lng: number };
  features: LocationFeature[];
  buttonColor: string;
}

const locations: Location[] = [
  {
    id: "el-gouna",
    name: "El Gouna",
    country: "Egypt",
    season: "Year-round",
    seasonClass: "bg-secondary/20 text-secondary",
    description:
      "Known for its consistent winds and flat, shallow lagoons, El Gouna offers perfect conditions for all skill levels. The warm weather and stunning Red Sea views make it an ideal training ground.",
    image:
      "https://images.pexels.com/photos/1430672/pexels-photo-1430672.jpeg",
    mapId: "el-gouna-map",
    coordinates: { lat: 27.4042, lng: 33.6731 },
    features: [
      { icon: <Wind className="text-primary mr-3" />, text: "Consistent 15-25 knots" },
      { icon: <Waves className="text-primary mr-3" />, text: "Flat shallow waters" },
      { icon: <Thermometer className="text-primary mr-3" />, text: "Warm year-round" },
      { icon: <Umbrella className="text-primary mr-3" />, text: "World-class facilities" },
    ],
    buttonColor: "bg-primary text-white hover:bg-primary/90",
  },
  {
    id: "lefkada",
    name: "Lefkada",
    country: "Greece",
    season: "May - October",
    seasonClass: "bg-accent/20 text-accent",
    description:
      "The emerald waters and thermal winds of Lefkada create a Mediterranean kiteboarding paradise. With breathtaking scenery and ideal conditions, it's perfect for combining skill advancement with an unforgettable vacation.",
    image:
      "https://images.pexels.com/photos/3180999/pexels-photo-3180999.jpeg",
    mapId: "lefkada-map",
    coordinates: { lat: 38.8318, lng: 20.7075 },
    features: [
      { icon: <Wind className="text-accent mr-3" />, text: "Thermal winds 18-30 knots" },
      { icon: <Waves className="text-accent mr-3" />, text: "Crystal clear waters" },
      { icon: <Mountain className="text-accent mr-3" />, text: "Stunning scenery" },
      { icon: <Utensils className="text-accent mr-3" />, text: "Vibrant local culture" },
    ],
    buttonColor: "bg-accent text-white hover:bg-accent/90",
  },
];

const Locations = () => {
  const mapsInitialized = useRef(false);

  useEffect(() => {
    // Define the global initMaps function that Google Maps will call
    window.initMaps = () => {
      if (mapsInitialized.current) return;
      
      try {
        locations.forEach((location) => {
          const mapElement = document.getElementById(location.mapId);
          if (!mapElement) return;

          // Create a static map image instead of interactive Google Maps
          const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.coordinates.lat},${location.coordinates.lng}&zoom=12&size=600x400&markers=color:red%7C${location.coordinates.lat},${location.coordinates.lng}&key=`;
          
          // Create a container with location information
          mapElement.innerHTML = `
            <div class="relative h-full rounded-lg overflow-hidden bg-gray-100">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center p-4 bg-white/80 rounded-lg shadow-md">
                  <h4 class="font-bold text-lg">${location.name}, ${location.country}</h4>
                  <p class="text-sm text-gray-700">Lat: ${location.coordinates.lat.toFixed(4)}, Lng: ${location.coordinates.lng.toFixed(4)}</p>
                  <p class="mt-2 text-xs font-medium">${location.id === "el-gouna" ? "Red Sea Coast" : "Ionian Sea"}</p>
                </div>
              </div>
              <img 
                src="${location.id === "el-gouna" 
                  ? "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg" 
                  : "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg"}" 
                alt="${location.name} location" 
                class="w-full h-full object-cover opacity-60"
              />
            </div>
          `;
        });

        mapsInitialized.current = true;
      } catch (error) {
        console.error("Error initializing location maps:", error);
      }
    };

    // Initialize maps immediately
    window.initMaps();
  }, []);

  return (
    <section
      id="locations"
      className="py-20 bg-gradient-to-b from-white to-accent/5"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-4 text-foreground">
            Premium <span className="text-primary">Destinations</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto font-inter">
            Experience world-class coaching in these kiteboarding paradises
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {locations.map((location) => (
            <Card 
              key={location.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all transform hover:-translate-y-2"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={location.image}
                  alt={`${location.name}, ${location.country} - Kiteboarding Destination`}
                  className="w-full h-full object-cover"
                />
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-montserrat font-bold text-foreground">
                    {location.name}, {location.country}
                  </h3>
                  <span className={`px-3 py-1 ${location.seasonClass} font-medium rounded-full text-sm`}>
                    {location.season}
                  </span>
                </div>

                <p className="text-foreground/70 mb-6 font-inter">
                  {location.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {location.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      {feature.icon}
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Interactive Map */}
                <div
                  id={location.mapId}
                  className="h-64 rounded-lg overflow-hidden mb-6 bg-gray-200"
                ></div>

                <Button
                  asChild
                  className={`w-full ${location.buttonColor}`}
                >
                  <a href="#contact">
                    Book {location.name} Sessions
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
