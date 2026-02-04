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
import img3 from "@/assets/img3.jpg";
import img4 from "@/assets/img4.jpg";
import img5 from "@/assets/img5.jpg";
import img6 from "@/assets/img6.jpg";
import img8 from "@/assets/img8.jpg";
import img9 from "@/assets/img9.jpg";
import img10 from "@/assets/img10.jpg";
import img11 from "@/assets/img11.jpg";
// New bridal images
import bridal1 from "@/assets/bridal1.jpg";
import bridal2 from "@/assets/bridal2.jpg";
import bridal3 from "@/assets/bridal3.jpg";
import bridal4 from "@/assets/bridal4.jpg";
import bridal5 from "@/assets/bridal5.jpg";
import bridal7 from "@/assets/bridal7.jpg";
import bridal8 from "@/assets/bridal8.jpg";
import bridal9 from "@/assets/bridal9.jpg";
import bridal10 from "@/assets/bridal10.jpg";
import bridal11 from "@/assets/bridal11.jpg";
import bridal12 from "@/assets/bridal12.jpg";
// New Simple designs
import simple1 from "@/assets/simple1.jpg";
import simple2 from "@/assets/simple2.jpg";
import simple3 from "@/assets/simple3.jpg";
import simple4 from "@/assets/simple4.jpg";
import simple5 from "@/assets/simple5.jpg";
import simple6 from "@/assets/simple6.jpg";
import simple7 from "@/assets/simple7.jpg";
import simple8 from "@/assets/simple8.jpg";
import simple9 from "@/assets/simple9.jpg";
// New Modern designs
import modern1 from "@/assets/modern1.jpg";
import modern2 from "@/assets/modern2.jpg";
import modern3 from "@/assets/modern3.jpg";
import modern4 from "@/assets/modern4.jpg";
import modern5 from "@/assets/modern5.jpg";
import modern6 from "@/assets/modern6.jpg";
import modern7 from "@/assets/modern7.jpg";
import modern8 from "@/assets/modern8.jpg";
import modern9 from "@/assets/modern9.jpg";
import modern10 from "@/assets/modern10.jpg";
import modern11 from "@/assets/modern11.jpg";
import modern12 from "@/assets/modern12.jpg";
import modern13 from "@/assets/modern13.jpg";
import modern14 from "@/assets/modern14.jpg";



const filters = ["All", "Bridal", "Simple", "Heavy Work", "Modern"];

const designs = [
  // Bridal
  { id: "AAF001", image: galleryBridal, name: "gallery-bridal-1", suitable: "Bridal", priceRange: "", filter: "Bridal" },
  { id: "AAF002", image: img6, name: "img6", suitable: "Bridal", priceRange: "", filter: "Bridal" },
  { id: "AAF003", image: img9, name: "img9", suitable: "Bridal", priceRange: "", filter: "Bridal" },
  { id: "AAF004", image: img10, name: "img10", suitable: "Bridal", priceRange: "", filter: "Bridal" },
  { id: "AAF018", image: bridal1, name: "Bridal 1", suitable: "Bridal", priceRange: "", filter: "Bridal" },
{ id: "AAF019", image: bridal2, name: "Bridal 2", suitable: "Bridal", priceRange: "", filter: "Bridal" },
{ id: "AAF020", image: bridal3, name: "Bridal 3", suitable: "Bridal", priceRange: "", filter: "Bridal" },
{ id: "AAF021", image: bridal4, name: "Bridal 4", suitable: "Bridal", priceRange: "", filter: "Bridal" },
{ id: "AAF022", image: bridal5, name: "Bridal 5", suitable: "Bridal", priceRange: "", filter: "Bridal" },
{ id: "AAF023", image: bridal7, name: "Bridal 7", suitable: "Bridal", priceRange: "", filter: "Bridal" },
{ id: "AAF024", image: bridal8, name: "Bridal 8", suitable: "Bridal", priceRange: "", filter: "Bridal" },
{ id: "AAF025", image: bridal9, name: "Bridal 9", suitable: "Bridal", priceRange: "", filter: "Bridal" },
{ id: "AAF026", image: bridal10, name: "Bridal 10", suitable: "Bridal", priceRange: "", filter: "Bridal" },
{ id: "AAF027", image: bridal11, name: "Bridal 11", suitable: "Bridal", priceRange: "", filter: "Bridal" },
{ id: "AAF028", image: bridal12, name: "Bridal 12", suitable: "Bridal", priceRange: "", filter: "Bridal" },
  // Simple
  { id: "AAF005", image: galleryCustom, name: "gallery-custom-1", suitable: "Simple", priceRange: "", filter: "Simple" },
  { id: "AAF006", image: galleryLehenga, name: "gallery-lehenga-1", suitable: "Simple", priceRange: "", filter: "Simple" },
{ id: "AAF029", image: simple1, name: "Simple 1", suitable: "Simple", priceRange: "", filter: "Simple" },
{ id: "AAF030", image: simple2, name: "Simple 2", suitable: "Simple", priceRange: "", filter: "Simple" },
{ id: "AAF031", image: simple3, name: "Simple 3", suitable: "Simple", priceRange: "", filter: "Simple" },
{ id: "AAF032", image: simple4, name: "Simple 4", suitable: "Simple", priceRange: "", filter: "Simple" },
{ id: "AAF033", image: simple5, name: "Simple 5", suitable: "Simple", priceRange: "", filter: "Simple" },
{ id: "AAF034", image: simple6, name: "Simple 6", suitable: "Simple", priceRange: "", filter: "Simple" },
{ id: "AAF035", image: simple7, name: "Simple 7", suitable: "Simple", priceRange: "", filter: "Simple" },
{ id: "AAF036", image: simple8, name: "Simple 8", suitable: "Simple", priceRange: "", filter: "Simple" },
{ id: "AAF037", image: simple9, name: "Simple 9", suitable: "Simple", priceRange: "", filter: "Simple" },

  
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
  { id: "AAF038", image: modern1, name: "Modern 1", suitable: "Modern", priceRange: "", filter: "Modern" },
{ id: "AAF039", image: modern2, name: "Modern 2", suitable: "Modern", priceRange: "", filter: "Modern" },
{ id: "AAF040", image: modern3, name: "Modern 3", suitable: "Modern", priceRange: "", filter: "Modern" },
{ id: "AAF041", image: modern4, name: "Modern 4", suitable: "Modern", priceRange: "", filter: "Modern" },
{ id: "AAF042", image: modern5, name: "Modern 5", suitable: "Modern", priceRange: "", filter: "Modern" },
{ id: "AAF043", image: modern6, name: "Modern 6", suitable: "Modern", priceRange: "", filter: "Modern" },
{ id: "AAF044", image: modern7, name: "Modern 7", suitable: "Modern", priceRange: "", filter: "Modern" },
{ id: "AAF045", image: modern8, name: "Modern 8", suitable: "Modern", priceRange: "", filter: "Modern" },
{ id: "AAF046", image: modern9, name: "Modern 9", suitable: "Modern", priceRange: "", filter: "Modern" },
{ id: "AAF047", image: modern10, name: "Modern 10", suitable: "Modern", priceRange: "", filter: "Modern" },
{ id: "AAF048", image: modern11, name: "Modern 11", suitable: "Modern", priceRange: "", filter: "Modern" },
{ id: "AAF049", image: modern12, name: "Modern 12", suitable: "Modern", priceRange: "", filter: "Modern" },
{ id: "AAF050", image: modern13, name: "Modern 13", suitable: "Modern", priceRange: "", filter: "Modern" },
{ id: "AAF051", image: modern14, name: "Modern 14", suitable: "Modern", priceRange: "", filter: "Modern" },

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
