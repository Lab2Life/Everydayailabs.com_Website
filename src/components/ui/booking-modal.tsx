import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Heart,
  Sparkles,
} from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const services = [
    "AI Digital Audit",
    "AI Awareness Training",
    "Career Readiness Program",
    "CAIO Certification",
    "Custom AI Solution",
    "General Consultation",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Create the payload in the format required by your endpoint
      const payload = {
        Name: formData.name,
        Email: formData.email,
        Phone: formData.phone,
        Service: formData.service,
        MoreDetails: formData.message,
      };

      // Log the payload for debugging
      console.log("Sending payload:", payload);

      // Use the proxy endpoint to avoid CORS issues
      const response = await fetch("/EAI_FORM", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("Booking submitted successfully");
        // Optionally show success message to user
        alert(
          "Thank you! Your booking has been submitted successfully. We'll contact you soon."
        );
      } else {
        console.error("Failed to submit booking. Status:", response.status);
        alert(
          "Sorry, we couldn't submit your booking at the moment. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert(
        "Sorry, we couldn't submit your booking at the moment. Please try again later."
      );
    }

    // Close the modal after submission
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-primary/20">
        <DialogHeader className="text-center pb-4">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <DialogTitle className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Start Your AI Journey
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            Let's discuss how AI can transform your life and work
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Personal Information */}
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-primary/10">
            <h3 className="text-md font-semibold flex items-center mb-3 text-primary">
              <User className="w-4 h-4 mr-2" />
              Tell us about yourself
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium mb-1 text-foreground">
                  Full Name *
                </label>
                <Input
                  placeholder="Tell us your name to start your AI journey"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="border-primary/20 focus:border-primary h-9 text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium mb-1 text-foreground">
                    Email *
                  </label>
                  <Input
                    type="email"
                    placeholder="Your inbox awaits AI magic ! enter email."
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="border-primary/20 focus:border-primary h-9 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1 text-foreground">
                    Phone *
                  </label>
                  <Input
                    placeholder="Let us reach you"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    className="border-primary/20 focus:border-primary h-9 text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Service Selection */}
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-primary/10">
            <h3 className="text-md font-semibold flex items-center mb-3 text-primary">
              <MessageSquare className="w-4 h-4 mr-2" />
              What interests you?
            </h3>
            <div>
              <label className="block text-xs font-medium mb-1 text-foreground">
                Service *
              </label>
              <select
                className="w-full p-2 h-9 border border-primary/20 rounded-md focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white text-sm"
                value={formData.service}
                onChange={(e) => handleInputChange("service", e.target.value)}
                required
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-primary/10">
            <h3 className="text-md font-semibold mb-3 text-primary">
              Share your thoughts
            </h3>
            <div>
              <label className="block text-xs font-medium mb-1 text-foreground">
                Tell us about your needs or questions
              </label>
              <Textarea
                placeholder="Describe your current challenges, goals, or specific questions about AI..."
                rows={3}
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="border-primary/20 focus:border-primary resize-none text-sm"
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col gap-2 pt-2">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              <Heart className="w-4 h-4 mr-2" />
              Start Your AI Journey
            </Button>
          </div>
        </form>

        <div className="mt-4 p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
          <p className="text-xs text-center text-foreground/80">
            <strong className="text-primary">What's next:</strong> Our expert
            will reach out within 24 hours to understand your AI needs and
            suggest the best solution for you.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
