import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section
      className="parallax py-28 relative"
      style={{
        backgroundImage:
          "url('https://pixabay.com/get/ge095ff3914d4d24138ff320142fff5f2f7caa1c66c65ab5590604c9df7fa365d369bf1f8d2c3553b9b1ac18aeb69e6aa372ddd5e7e20d6adbdd5c48949c3b111_1280.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-foreground/60"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Quote className="mx-auto h-12 w-12 text-secondary opacity-50 mb-6" />
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-light italic mb-8 leading-relaxed text-shadow">
            "The personalized coaching transformed my kiteboarding experience. In
            just three sessions, I progressed more than in my previous year of
            practice. The attention to detail and custom approach made all the
            difference."
          </h3>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl font-montserrat font-medium text-shadow">
            Michael S.
          </p>
          <p className="text-secondary">Advanced Tricks Program</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
