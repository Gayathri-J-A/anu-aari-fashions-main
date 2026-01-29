import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import galleryBridal from "@/assets/gallery-bridal-1.jpg";
import galleryLehenga from "@/assets/gallery-lehenga-1.jpg";
import galleryCustom from "@/assets/gallery-custom-1.jpg";
import gallerySaree from "@/assets/gallery-saree-1.jpg";
import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img 3.jpg";
import img4 from "@/assets/img4.jpg";
import img5 from "@/assets/img5.jpg";
import img6 from "@/assets/img6.jpg";
import img8 from "@/assets/img8.jpg";
import img9 from "@/assets/img9.jpg";
import img10 from "@/assets/img10.jpg";
import img11 from "@/assets/img11.jpg";

const filters = ["All", "Bridal", "Simple", "Heavy Work", "Modern"];

const designs = [
  // Bridal
  { id: "AAF001", image: galleryBridal, name: "gallery-bridal-1", suitable: "Bridal", priceRange: "", filter: "Bridal" },
  { id: "AAF002", image: img6, name: "img6", suitable: "Bridal", priceRange: "", filter: "Bridal" },
  { id: "AAF003", image: img9, name: "img9", suitable: "Bridal", priceRange: "", filter: "Bridal" },
  { id: "AAF004", image: img10, name: "img10", suitable: "Bridal", priceRange: "", filter: "Bridal" },
  
  // Simple
  { id: "AAF005", image: galleryCustom, name: "gallery-custom-1", suitable: "Simple", priceRange: "", filter: "Simple" },
  { id: "AAF006", image: galleryLehenga, name: "gallery-lehenga-1", suitable: "Simple", priceRange: "", filter: "Simple" },

  
  // Heavy Work (same as Bridal)
  { id: "AAF008", image: galleryBridal, name: "gallery-bridal-1", suitable: "Heavy Work", priceRange: "", filter: "Heavy Work" },
  { id: "AAF009", image: img6, name: "img6", suitable: "Heavy Work", priceRange: "", filter: "Heavy Work" },
  { id: "AAF010", image: img9, name: "img9", suitable: "Heavy Work", priceRange: "", filter: "Heavy Work" },
  { id: "AAF011", image: img10, name: "img10", suitable: "Heavy Work", priceRange: "", filter: "Heavy Work" },
  
  // Modern
  { id: "AAF012", image: img3, name: "img 3", suitable: "Modern", priceRange: "", filter: "Modern" },
  { id: "AAF013", image: img1, name: "img1", suitable: "Modern", priceRange: "", filter: "Modern" },
  { id: "AAF014", image: img2, name: "img2", suitable: "Modern", priceRange: "", filter: "Modern" },
  { id: "AAF015", image: img4, name: "img4", suitable: "Modern", priceRange: "", filter: "Modern" },
  { id: "AAF016", image: img8, name: "img8", suitable: "Modern", priceRange: "", filter: "Modern" },
  { id: "AAF017", image: img11, name: "img11", suitable: "Modern", priceRange: "", filter: "Modern" },
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
    window.open(`https://wa.me/916385490317?text=${message}`, "_blank");
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
                    <p className="text-muted-foreground text-sm">
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
