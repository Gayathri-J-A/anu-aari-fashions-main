import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Award, Users, Sparkles } from "lucide-react";
import founderImage from "@/assets/founder-portrait.jpg";

const values = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Passion",
    description: "Every stitch is crafted with love and dedication",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Quality",
    description: "Premium materials and meticulous craftsmanship",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Empowerment",
    description: "Supporting women through skill-based learning",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Innovation",
    description: "Blending tradition with modern aesthetics",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-cream pattern-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-maroon">
              About Anu Aari Fashion
            </h1>
            <div className="w-24 h-0.5 bg-gold mx-auto" />
            <p className="text-muted-foreground text-xl font-elegant italic">
              "Where Tradition Meets Elegance"
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-elegant">
                <img
                  src={founderImage}
                  alt="Anu - Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-gold rounded-lg -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-maroon/10 rounded-lg -z-10" />
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
                  Meet the Founder
                </span>
                <h2 className="font-display text-4xl text-maroon mt-2">Anusha devi.S</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I am a passionate Aari embroidery designer specializing in handcrafted blouse designs.
                With a keen eye for detail, I create elegant and premium embroidery work.
                Each design is thoughtfully crafted to enhance beauty and individuality.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I focus on quality, precision, and fine finishing in every order.
                Customer satisfaction is always my top priority.
                I blend traditional craftsmanship with modern design sensibilities.
                Every piece reflects dedication, creativity, and skilled artistry.
                Custom designs are created to make every outfit truly special.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 rounded-full bg-maroon flex items-center justify-center">
                  <span className="text-gold font-display text-xl">4+</span>
                </div>
                <span className="text-foreground">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-maroon-dark">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-cream/5 border border-cream/10 rounded-lg p-10 space-y-6">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="font-display text-3xl text-cream">Our Vision</h3>
              <p className="text-cream/70 leading-relaxed">
                To become a trusted brand for premium Aari designs and professional 
                Aari training worldwide. We envision a future where this beautiful 
                traditional art form thrives in modern fashion while providing 
                sustainable livelihoods for artisan communities.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-cream/5 border border-cream/10 rounded-lg p-10 space-y-6">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="font-display text-3xl text-cream">Our Mission</h3>
              <ul className="space-y-3 text-cream/70">
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">✦</span>
                  Deliver high-quality handcrafted designs
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">✦</span>
                  Offer affordable and practical Aari courses
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">✦</span>
                  Support women entrepreneurship
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">✦</span>
                  Preserve traditional craftsmanship
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
              What Drives Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-maroon mt-4">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-lg p-8 text-center hover:shadow-elegant transition-all duration-500 card-elegant"
              >
                <div className="w-16 h-16 rounded-full bg-maroon/10 flex items-center justify-center mx-auto mb-6 text-maroon group-hover:bg-maroon group-hover:text-cream transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
