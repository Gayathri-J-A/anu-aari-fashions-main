import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, Clock, Video, Award, Users, BookOpen } from "lucide-react";

const courses = [
  {
    id: "basic",
    title: "Basic Aari Course",
    duration: "30 Days",
    mode: "Online",
    price: "₹3,000",
    features: [
      "Introduction to Aari needle",
      "Basic stitches & patterns",
      "Materials guide included",
      "Practice worksheets",
      "WhatsApp support",
      "Certificate of completion",
    ],
    popular: false,
    color: "forest",
  },
  {
    id: "advanced",
    title: "Advanced Aari Course",
    duration: "2 Months",
    mode: "Online",
    price: "₹6,000",
    features: [
      "Advanced stitch techniques",
      "Complex pattern creation",
      "Live video sessions",
      "Design templates",
      "One-on-one guidance",
      "Premium certificate",
      "Portfolio building",
    ],
    popular: true,
    color: "maroon",
  },
  {
    id: "bridal",
    title: "Bridal Aari Masterclass",
    duration: "3 Months",
    mode: "Online + Offline",
    price: "₹10,000",
    features: [
      "Bridal design specialization",
      "Real-time projects",
      "Industry-standard techniques",
      "Business guidance",
      "Job placement support",
      "Lifetime access to materials",
      "Master certificate",
      "Networking opportunities",
    ],
    popular: false,
    color: "gold",
  },
];

const benefits = [
  {
    icon: <Video className="w-6 h-6" />,
    title: "Live Sessions",
    description: "Interactive live classes with expert instructors",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Rich Materials",
    description: "Comprehensive guides, videos & practice sheets",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community",
    description: "Join our community of 500+ Aari artists",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Certification",
    description: "Industry-recognized certificates upon completion",
  },
];

const Courses = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-cream pattern-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
              Learn From Experts
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-maroon">
              Our Courses
            </h1>
            <div className="w-24 h-0.5 bg-gold mx-auto" />
            <p className="text-muted-foreground text-lg font-elegant">
              Master the art of Aari embroidery with our professional courses
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-maroon-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg text-cream">
                    {benefit.title}
                  </h3>
                  <p className="text-cream/60 text-sm mt-1">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className={`relative bg-card rounded-xl overflow-hidden shadow-card border border-border transition-all duration-500 hover:shadow-elegant ${
                  course.popular ? "lg:scale-105 lg:-my-4" : ""
                }`}
              >
                {course.popular && (
                  <div className="absolute top-0 right-0 bg-gold text-maroon-dark text-xs font-medium px-4 py-1 rounded-bl-lg uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                {/* Header */}
                <div
                  className={`p-8 text-center ${
                    course.color === "maroon"
                      ? "bg-maroon text-cream"
                      : course.color === "gold"
                      ? "bg-gold text-maroon-dark"
                      : "bg-forest text-cream"
                  }`}
                >
                  <h3 className="font-display text-2xl">{course.title}</h3>
                  <div className="flex items-center justify-center gap-4 mt-4 text-sm opacity-80">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                    <span>{course.mode}</span>
                  </div>
                  <div className="mt-6">
                    <span className="text-4xl font-display">{course.price}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="p-8">
                  <ul className="space-y-4">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/register" className="block mt-8">
                    <Button
                      className={`w-full py-6 uppercase tracking-wider text-sm ${
                        course.popular
                          ? "bg-maroon text-cream hover:bg-maroon-dark"
                          : "bg-muted text-foreground hover:bg-maroon hover:text-cream"
                      }`}
                    >
                      Enroll Now
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream pattern-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl text-maroon mb-4">
            Have Questions?
          </h2>
          <p className="text-muted-foreground mb-8">
            Contact us for more information about our courses
          </p>
          <Link to="/contact">
            <Button
              variant="outline"
              className="border-maroon text-maroon hover:bg-maroon hover:text-cream px-8 py-5 uppercase tracking-wider text-sm"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
