import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Instagram, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    value: "+91 6385490317",
    link: "tel:+916385490317",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: "aariworkanu@gmail.com",
    link: "mailto:aariworkanu@gmail.com",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    value: "Cuddalore, Tamil Nadu, India",
    link: null,
  },
];

const socialLinks = [
  {
    icon: <Instagram className="w-5 h-5" />,
    name: "Instagram",
    handle: "@anu_aari_fashion",
    link: "https://instagram.com/anu_aari_fashion",
    color: "hover:bg-pink-500",
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    name: "WhatsApp",
    handle: "+91 6385490317",
    link: "https://wa.me/916385490317",
    color: "hover:bg-green-500",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill all fields",
        description: "Name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }

    // Create message with form data
    const message = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/916385490317?text=${message}`, "_blank");

    toast({
      title: "Message Sent!",
      description: "WhatsApp opened with your message. Send it to complete.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-cream pattern-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
              Get in Touch
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-maroon">
              Contact Us
            </h1>
            <div className="w-24 h-0.5 bg-gold mx-auto" />
            <p className="text-muted-foreground text-lg font-elegant">
              We'd love to hear from you. Reach out for any queries or collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="font-display text-3xl text-maroon mb-8">
                  Let's Connect
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-full bg-maroon/10 flex items-center justify-center text-maroon flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-gold transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-display text-xl text-maroon mb-6">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 bg-card border border-border rounded-lg px-5 py-3 transition-all duration-300 ${social.color} hover:text-white hover:border-transparent`}
                    >
                      {social.icon}
                      <div className="text-left">
                        <p className="font-medium text-sm">{social.name}</p>
                        <p className="text-xs text-muted-foreground group-hover:text-white/80">
                          {social.handle}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/916385490317?text=Hi!%20I'm%20interested%20in%20Anu%20Aari%20Fashion%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="font-medium">Chat on WhatsApp</span>
              </a>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-xl shadow-elegant p-8 md:p-12">
              <h2 className="font-display text-2xl text-maroon mb-8">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Enter your name"
                      className="py-5"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      className="py-5"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="How can we help?"
                    className="py-5"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Write your message..."
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-maroon text-cream hover:bg-maroon-dark py-6 uppercase tracking-wider text-sm"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
