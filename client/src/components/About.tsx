import { Award, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 overflow-hidden rounded-xl shadow-xl">
            <img
              src="https://pixabay.com/get/ga108b7dcff48033cb23a5808926f034c8938c29efec0e04487a1510748a0b89963c0d451a6f95d07cce04831cdee9ca0c1cb14adb48392d83b673993c10b6d62_1280.jpg"
              alt="Kiteboarding coach teaching a student"
              className="w-full h-auto object-cover transform hover:scale-105 transition-all duration-500"
            />
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 text-foreground">
              Experience <span className="text-primary">Personalized</span>{" "}
              Coaching
            </h2>

            <p className="text-lg text-foreground/80 mb-6 font-inter leading-relaxed">
              Since 2013, I've been passionate about kiteboarding and helping
              others achieve their goals on the water. My coaching philosophy is
              simple: personalized attention leads to faster progress and more
              enjoyment.
            </p>

            <p className="text-lg text-foreground/80 mb-8 font-inter leading-relaxed">
              Unlike crowded group lessons, my one-on-one coaching sessions are
              tailored to your specific skill level and goals. Whether you're
              looking to improve your basic technique or master advanced tricks,
              I'll help you get there with focused guidance.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Award className="text-primary" />
                </div>
                <span className="font-montserrat font-medium">
                  10+ Years Experience
                </span>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Users className="text-primary" />
                </div>
                <span className="font-montserrat font-medium">
                  Individual Attention
                </span>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <MapPin className="text-primary" />
                </div>
                <span className="font-montserrat font-medium">
                  Premium Locations
                </span>
              </div>
            </div>

            <Button
              asChild
              className="bg-primary text-white hover:bg-primary/90 transition-transform hover:-translate-y-1 shadow-md"
            >
              <a href="#courses">Discover My Approach</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
