import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Sparkles, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-embroidery.jpg";
import galleryBridal from "@/assets/gallery-bridal-1.jpg";
import galleryLehenga from "@/assets/gallery-lehenga-1.jpg";
import galleryCustom from "@/assets/gallery-custom-1.jpg";

const services = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Bridal Aari Work",
    description: "Exquisite handcrafted embroidery for your special day",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Custom Blouse Designs",
    description: "Personalized designs tailored to your style",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Online Aari Courses",
    description: "Learn the art from expert craftswomen",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Design Consultation",
    description: "Expert guidance for your dream outfit",
  },
];

const featuredWorks = [
  { image: galleryBridal, title: "Bridal Collection", category: "Bridal Blouse" },
  { image: galleryLehenga, title: "Royal Lehenga", category: "Lehenga" },
  { image: galleryCustom, title: "Custom Design", category: "Modern" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Aari embroidery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <span className="inline-block text-gold uppercase tracking-[0.3em] text-sm font-medium animate-fade-in">
              Traditional • Elegant • Customized
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream leading-tight animate-fade-in-delay-1">
              Premium Handcrafted
              <span className="block text-gold">Aari Work Designs</span>
            </h1>
            <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto font-elegant animate-fade-in-delay-2">
              Where tradition meets elegance. Experience the timeless beauty of handcrafted Aari embroidery, 
              passed down through generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-delay-2">
              <Link to="/designs">
                <Button className="bg-gold text-maroon-dark hover:bg-gold-light px-8 py-6 text-sm uppercase tracking-wider font-medium">
                  View Designs
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/courses">
                <Button
                  variant="outline"
                  // className="border-cream text-cream hover:bg-cream/10 px-8 py-6 text-sm uppercase tracking-wider font-medium"
                  className="bg-transparent border-cream text-cream hover:bg-cream/10 px-8 py-6 text-sm uppercase tracking-wider font-medium"
                >
                  Course Details
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator removed per request */}
      </section>

      {/* About Preview */}
      <section className="py-24 bg-cream pattern-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-maroon">
              Stitching Stories in Thread
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto" />
            <p className="text-muted-foreground text-lg font-elegant leading-relaxed">
              <strong className="text-foreground">Anu Aari Fashion</strong> is a passionate startup dedicated to 
              preserving and modernizing traditional Aari embroidery. We specialize in bridal wear, 
              blouse designs, custom embroidery, and professional Aari training. Each piece is 
              handcrafted with love, carrying forward the legacy of this timeless art form.
            </p>
            <Link to="/about">
              <Button
                variant="outline"
                className="border-maroon text-maroon hover:bg-maroon hover:text-cream px-8 py-5 uppercase tracking-wider text-sm mt-4"
              >
                Know More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-maroon-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
              What We Offer
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-cream mt-4">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-cream/5 border border-cream/10 rounded-lg p-8 text-center hover:bg-cream/10 transition-all duration-500 card-elegant"
              >
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6 text-gold group-hover:bg-gold group-hover:text-maroon-dark transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl text-cream mb-3">
                  {service.title}
                </h3>
                <p className="text-cream/60 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
              Our Creations
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-maroon mt-4">
              Featured Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredWorks.map((work, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-square card-elegant"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/90 via-maroon-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="text-gold text-xs uppercase tracking-wider">
                    {work.category}
                  </span>
                  <h3 className="font-display text-xl text-cream mt-1">
                    {work.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery">
              <Button className="bg-maroon text-cream hover:bg-maroon-dark px-8 py-5 uppercase tracking-wider text-sm">
                View All Works
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-maroon relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-display text-4xl md:text-5xl text-cream">
              Ready to Learn the Art of Aari?
            </h2>
            <p className="text-cream/80 text-lg font-elegant">
              Join our professional courses and master the traditional craft of Aari embroidery. 
              Online and offline batches available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button className="bg-gold text-maroon-dark hover:bg-gold-light px-8 py-6 text-sm uppercase tracking-wider font-medium">
                  Explore Courses
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  variant="outline"
                  className="border-cream text-cream hover:bg-cream/10 px-8 py-6 text-sm uppercase tracking-wider font-medium"
                >
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
