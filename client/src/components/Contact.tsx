import { Mail, MessageSquare, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, location: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.location || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill out all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, you would send this data to a server
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      location: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">
              Ready to <span className="text-secondary">Elevate</span> Your
              Kiteboarding?
            </h2>

            <p className="text-white/80 text-lg mb-8 font-inter leading-relaxed">
              Book your personalized coaching session today. I'm currently
              accepting bookings for both El Gouna and Lefkada locations. Get in
              touch to discuss your goals and schedule your sessions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1">
                  <Mail className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-xl font-montserrat font-semibold mb-2">
                    Email Me
                  </h4>
                  <p className="text-white/80">contact@kiteboardingcoach.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1">
                  <FaWhatsapp className="text-secondary text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-montserrat font-semibold mb-2">
                    WhatsApp
                  </h4>
                  <p className="text-white/80">+44 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1">
                  <Instagram className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-xl font-montserrat font-semibold mb-2">
                    Instagram
                  </h4>
                  <p className="text-white/80">@kiteboardingcoach</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-foreground">
            <h3 className="text-2xl font-montserrat font-bold mb-6 text-foreground">
              Book Your Session
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Your Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Preferred Location</Label>
                <Select onValueChange={handleSelectChange} value={formData.location}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="el-gouna">El Gouna, Egypt</SelectItem>
                    <SelectItem value="lefkada">Lefkada, Greece</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your experience level and goals"
                  className="h-32"
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 transition-transform hover:-translate-y-1 shadow-md">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
