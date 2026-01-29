import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const courses = [
  { value: "basic", label: "Basic Aari Course - ₹3,000" },
  { value: "advanced", label: "Advanced Aari Course - ₹6,000" },
  { value: "bridal", label: "Bridal Aari Masterclass - ₹10,000" },
];

const Register = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    course: "",
    address: "",
    mode: "online",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.fullName || !formData.phone || !formData.email || !formData.course) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Registration Successful!",
      description: "We will contact you shortly.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="pt-32 pb-24 min-h-[80vh] flex items-center bg-cream pattern-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto text-center space-y-8">
              <div className="w-24 h-24 rounded-full bg-forest flex items-center justify-center mx-auto">
                <CheckCircle className="w-12 h-12 text-cream" />
              </div>
              <h1 className="font-display text-4xl text-maroon">
                Thank You for Registering!
              </h1>
              <p className="text-muted-foreground text-lg">
                We have received your registration for the{" "}
                <strong>{courses.find((c) => c.value === formData.course)?.label}</strong>.
                Our team will contact you shortly to confirm your enrollment.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="bg-maroon text-cream hover:bg-maroon-dark px-8 py-5 uppercase tracking-wider text-sm"
              >
                Register for Another Course
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-cream pattern-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
              Join Us
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-maroon">
              Course Registration
            </h1>
            <div className="w-24 h-0.5 bg-gold mx-auto" />
            <p className="text-muted-foreground text-lg font-elegant">
              Fill in your details to enroll in our Aari courses
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-xl shadow-elegant p-8 md:p-12 space-y-8"
            >
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-foreground">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  placeholder="Enter your full name"
                  className="py-6"
                />
              </div>

              {/* Phone & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    Phone Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+91 98765 43210"
                    className="py-6"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    className="py-6"
                  />
                </div>
              </div>

              {/* Course Selection */}
              <div className="space-y-2">
                <Label className="text-foreground">
                  Select Course <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.course}
                  onValueChange={(value) => handleInputChange("course", value)}
                >
                  <SelectTrigger className="py-6">
                    <SelectValue placeholder="Choose a course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course.value} value={course.value}>
                        {course.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Address */}
              <div className="space-y-2">
                <Label htmlFor="address" className="text-foreground">
                  Address
                </Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="Enter your address"
                  rows={3}
                />
              </div>

              {/* Mode of Learning */}
              <div className="space-y-4">
                <Label className="text-foreground">Mode of Learning</Label>
                <RadioGroup
                  value={formData.mode}
                  onValueChange={(value) => handleInputChange("mode", value)}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="online" id="online" />
                    <Label htmlFor="online" className="cursor-pointer">
                      Online
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="offline" id="offline" />
                    <Label htmlFor="offline" className="cursor-pointer">
                      Offline
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Button
                type="submit"
                className="w-full bg-maroon text-cream hover:bg-maroon-dark py-6 uppercase tracking-wider text-sm"
              >
                Submit Registration
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
