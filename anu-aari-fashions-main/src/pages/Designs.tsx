import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import galleryBridal from "@/assets/gallery-bridal-1.jpg";
import gallerySaree from "@/assets/gallery-saree-1.jpg";
import galleryLehenga from "@/assets/gallery-lehenga-1.jpg";
import galleryCustom from "@/assets/gallery-custom-1.jpg";

const filters = ["All", "Bridal", "Simple", "Heavy Work", "Modern"];

const designs = [
  {
    id: "AAF001",
    image: galleryBridal,
    name: "Royal Peacock Blouse",
    suitable: "Bridal",
    priceRange: "₹8,000 - ₹12,000",
    filter: "Bridal",
  },
  {
    id: "AAF002",
    image: gallerySaree,
    name: "Emerald Temple Border",
    suitable: "Party",
    priceRange: "₹15,000 - ₹20,000",
    filter: "Heavy Work",
  },
  {
    id: "AAF003",
    image: galleryLehenga,
    name: "Floral Dream Lehenga",
    suitable: "Bridal",
    priceRange: "₹25,000 - ₹35,000",
    filter: "Bridal",
  },
  {
    id: "AAF004",
    image: galleryCustom,
    name: "Cream Minimal Blouse",
    suitable: "Casual",
    priceRange: "₹3,000 - ₹5,000",
    filter: "Simple",
  },
  {
    id: "AAF005",
    image: galleryBridal,
    name: "Maroon Heritage Set",
    suitable: "Bridal",
    priceRange: "₹18,000 - ₹25,000",
    filter: "Heavy Work",
  },
  {
    id: "AAF006",
    image: gallerySaree,
    name: "Contemporary Fusion",
    suitable: "Party",
    priceRange: "₹10,000 - ₹15,000",
    filter: "Modern",
  },
  {
    id: "AAF007",
    image: galleryCustom,
    name: "Elegant Day Wear",
    suitable: "Casual",
    priceRange: "₹2,500 - ₹4,000",
    filter: "Simple",
  },
  {
    id: "AAF008",
    image: galleryLehenga,
    name: "Modern Chic Design",
    suitable: "Party",
    priceRange: "₹8,000 - ₹12,000",
    filter: "Modern",
  },
];

const Designs = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredDesigns =
    activeFilter === "All"
      ? designs
      : designs.filter((design) => design.filter === activeFilter);

  const handleOrderClick = (designId: string) => {
    const message = encodeURIComponent(
      `Hi! I'm interested in design ${designId} from Anu Aari Fashion. Please share more details.`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-cream pattern-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
              Shop Collection
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-maroon">
              Our Designs
            </h1>
            <div className="w-24 h-0.5 bg-gold mx-auto" />
            <p className="text-muted-foreground text-lg font-elegant">
              Browse our exclusive collection and order your favorite designs
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background border-b border-border sticky top-[72px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-maroon text-cream"
                    : "bg-muted text-muted-foreground hover:bg-maroon/10 hover:text-maroon"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Designs Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDesigns.map((design) => (
              <div
                key={design.id}
                className="group bg-card rounded-lg overflow-hidden shadow-card card-elegant"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={design.image}
                    alt={design.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-maroon/90 text-cream text-xs px-3 py-1 rounded-full">
                    {design.id}
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-display text-lg text-foreground">
                      {design.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Suitable for:{" "}
                      <span className="text-gold">{design.suitable}</span>
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-maroon">
                      {design.priceRange}
                    </span>
                  </div>
                  <Button
                    onClick={() => handleOrderClick(design.id)}
                    className="w-full bg-maroon text-cream hover:bg-maroon-dark uppercase tracking-wider text-xs py-5"
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Order Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Designs;
