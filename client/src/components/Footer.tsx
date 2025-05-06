import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-montserrat font-bold mb-2">
              KITE<span className="text-secondary">COACH</span>
            </h3>
            <p className="text-white/60">Premium One-on-One Kiteboarding Coaching</p>
          </div>

          <div className="flex space-x-6 mb-8 md:mb-0">
            <a href="#" className="text-white hover:text-secondary transition-colors">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="text-white hover:text-secondary transition-colors">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="text-white hover:text-secondary transition-colors">
              <FaYoutube className="text-2xl" />
            </a>
            <a href="#" className="text-white hover:text-secondary transition-colors">
              <FaWhatsapp className="text-2xl" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white/60 text-sm">
              &copy; {currentYear} KiteCoach. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
