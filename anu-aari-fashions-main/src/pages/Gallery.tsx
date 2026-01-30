import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import galleryBridal from "@/assets/gallery-bridal-1.jpg";
import galleryCustom from "@/assets/gallery-custom-1.jpg";
import galleryLehenga from "@/assets/gallery-lehenga-1.jpg";
import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";
import img4 from "@/assets/img4.jpg";
import img5 from "@/assets/img5.jpg";
import img6 from "@/assets/img6.jpg";
import img8 from "@/assets/img8.jpg";
import img9 from "@/assets/img9.jpg";
import img10 from "@/assets/img10.jpg";
import img11 from "@/assets/img11.jpg";

const categories = ["All", "Bridal", "Simple Design", "Minimal Design", "Custom"];

const galleryItems = [
  {
    id: 1,
    image: galleryBridal,
    title: "Royal Bridal Blouse",
    category: "Bridal",
    year: "2024",
    type: "Peacock Motif",
    price: 700,
  },
  {
    id: 2,
    image: img1,
    title: "Emerald Bridal Design",
    category: "Bridal",
    year: "2024",
    type: "Traditional Border",
    price: 1000,
  },
  {
    id: 3,
    image: img4,
    title: "Bridal Elegance",
    category: "Bridal",
    year: "2024",
    type: "Modern Minimal",
    price: 1300,
  },
  {
    id: 4,
    image: img6,
    title: "Bridal Temple Design",
    category: "Bridal",
    year: "2023",
    type: "Temple Design",
    price: 1600,
  },
  {
    id: 5,
    image: img9,
    title: "Bridal Blouse",
    category: "Bridal",
    year: "2023",
    type: "Fusion Style",
    price: 1900,
  },
  {
    id: 6,
    image: img10,
    title: "Bridal Classic",
    category: "Bridal",
    year: "2023",
    type: "Elegant Design",
    price: 2200,
  },
  {
    id: 7,
    image: galleryCustom,
    title: "Cream Custom Design",
    category: "Simple Design",
    year: "2024",
    type: "Custom Work",
    price: 2500,
  },
  {
    id: 8,
    image: galleryLehenga,
    title: "Royal Lehenga Design",
    category: "Simple Design",
    year: "2024",
    type: "Lehenga Pattern",
    price: 2800,
  },
  {
    id: 9,
    image: img2,
    title: "Simple Saree Design",
    category: "Simple Design",
    year: "2022",
    type: "Saree Border",
    price: 900,
  },
  {
    id: 10,
    image: img5,
    title: "Simple Blouse Design",
    category: "Simple Design",
    year: "2023",
    type: "Basic Pattern",
    price: 1100,
  },
  {
    id: 11,
    image: img3,
    title: "Royal Blue Lehenga",
    category: "Minimal Design",
    year: "2024",
    type: "Floral Pattern",
    price: 1300,
  },
  {
    id: 12,
    image: img8,
    title: "Designer Lehenga",
    category: "Minimal Design",
    year: "2023",
    type: "Paisley Work",
    price: 2500,
  },
  {
    id: 13,
    image: galleryLehenga,
    title: "Minimal Lehenga Design",
    category: "Minimal Design",
    year: "2023",
    type: "Minimal Border",
    price: 1500,
  },
  {
    id: 14,
    image: img11,
    title: "Contemporary Design",
    category: "Custom",
    year: "2022",
    type: "Modern Fusion",
    price: 3400,
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
                  <div className="mt-3 pt-3 border-t border-cream/20">
                    <span className="text-gold font-elegant text-sm">starts from 700 rupees</span>
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
