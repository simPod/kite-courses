import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1597434903211-78810997e75a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-foreground/40"></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-montserrat font-bold text-white mb-6 leading-tight text-shadow">
          Premium <span className="text-secondary">Kiteboarding</span> <br />
          Coaching
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto text-shadow font-light">
          One-on-one coaching in the world's most beautiful kiteboarding
          destinations
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-secondary text-foreground hover:bg-secondary/90 text-lg shadow-lg transition-transform hover:-translate-y-1"
          >
            <a href="#courses">Explore Courses</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg transition-transform hover:-translate-y-1"
          >
            <a href="#contact">Book a Session</a>
          </Button>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <a href="#about" className="text-white text-4xl">
            <ChevronDown size={36} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
