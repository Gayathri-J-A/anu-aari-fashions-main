import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import galleryBridal from "@/assets/gallery-bridal-1.jpg";
import gallerySaree from "@/assets/gallery-saree-1.jpg";
import galleryLehenga from "@/assets/gallery-lehenga-1.jpg";
import galleryCustom from "@/assets/gallery-custom-1.jpg";

const categories = ["All", "Bridal", "Saree", "Lehenga", "Custom"];

const galleryItems = [
  {
    id: 1,
    image: galleryBridal,
    title: "Royal Bridal Blouse",
    category: "Bridal",
    year: "2024",
    type: "Peacock Motif",
  },
  {
    id: 2,
    image: gallerySaree,
    title: "Emerald Silk Saree",
    category: "Saree",
    year: "2024",
    type: "Traditional Border",
  },
  {
    id: 3,
    image: galleryLehenga,
    title: "Royal Blue Lehenga",
    category: "Lehenga",
    year: "2024",
    type: "Floral Pattern",
  },
  {
    id: 4,
    image: galleryCustom,
    title: "Cream Elegance",
    category: "Custom",
    year: "2024",
    type: "Modern Minimal",
  },
  {
    id: 5,
    image: galleryBridal,
    title: "Maroon Bridal Set",
    category: "Bridal",
    year: "2023",
    type: "Heavy Work",
  },
  {
    id: 6,
    image: gallerySaree,
    title: "Temple Saree Border",
    category: "Saree",
    year: "2023",
    type: "Temple Design",
  },
  {
    id: 7,
    image: galleryLehenga,
    title: "Designer Lehenga",
    category: "Lehenga",
    year: "2023",
    type: "Paisley Work",
  },
  {
    id: 8,
    image: galleryCustom,
    title: "Contemporary Blouse",
    category: "Custom",
    year: "2023",
    type: "Fusion Style",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-cream pattern-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
              Our Portfolio
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-maroon">
              Gallery
            </h1>
            <div className="w-24 h-0.5 bg-gold mx-auto" />
            <p className="text-muted-foreground text-lg font-elegant">
              Explore our collection of handcrafted Aari embroidery masterpieces
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background border-b border-border sticky top-[72px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-maroon text-cream"
                    : "bg-muted text-muted-foreground hover:bg-maroon/10 hover:text-maroon"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg bg-card shadow-card card-elegant"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/90 via-maroon-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="text-gold text-xs uppercase tracking-wider">
                    {item.type}
                  </span>
                  <h3 className="font-display text-xl text-cream mt-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-cream/60 text-xs">{item.category}</span>
                    <span className="text-cream/40">•</span>
                    <span className="text-cream/60 text-xs">{item.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
