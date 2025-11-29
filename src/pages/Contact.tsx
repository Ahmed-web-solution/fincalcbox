import { useState } from "react";
import NeuCard from "@/components/NeuCard";
import NeuInput from "@/components/NeuInput";
import NeuButton from "@/components/NeuButton";
import SEOHelmet from "@/components/SEOHelmet";
import { Mail, MessageSquare, User, Phone, MapPin } from "@/components/icons";
import { toast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // ✅ Direct EmailJS API Endpoint
  const EMAILJS_URL = "https://api.emailjs.com/api/v1.0/email/send";
  // ✅ Use environment variables (no hardcoded secrets)
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";
  const [hp, setHp] = useState(""); // honeypot

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);

      // ✅ Basic anti-spam: honeypot + early exit
      if (hp) {
        setLoading(false);
        return;
      }

      // ✅ Use env-configured EmailJS credentials
      const payload = {
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        template_params: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toISOString(),
        },
      };

      const res = await fetch(EMAILJS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to send email");

      toast({
        title: "Message Sent ✅",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast({
        title: "Failed to send message ❌",
        description:
          "Please try again later or check your internet connection.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <SEOHelmet
        title="Contact Us - Get in Touch | FinCalcBox"
        description="Have questions about FinCalcBox? Get in touch with us. We're here to help you with our financial tools and services."
        keywords="contact FinCalcBox, support, help, financial tools support, customer service"
        canonical="https://www.fincalcbox.com/contact"
      />

      {/* ✅ Ad Banner Placeholder */}
      <div className="mb-8 flex justify-center">
        {/* <div className="neu-inset w-full max-w-3xl h-24 flex items-center justify-center text-muted-foreground text-sm">
          <span>🔹 Advertisement Space — 728x90</span>
        </div> */}
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ✅ Contact Form */}
          <NeuCard className="animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off" noValidate>
              {/* Honeypot field (hidden from users) */}
              <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input id="company" type="text" value={hp} onChange={(e) => setHp(e.target.value)} tabIndex={-1} />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <User className="h-5 w-5 text-primary" />
                  <label htmlFor="name" className="font-medium">
                    Your Name
                  </label>
                </div>
                <NeuInput
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <label htmlFor="email" className="font-medium">
                    Email Address
                  </label>
                </div>
                <NeuInput
                  id="email"
                  type="email"
                  placeholder="@ Enter your email "
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <label htmlFor="message" className="font-medium">
                    Message
                  </label>
                </div>
                <textarea
                  id="message"
                  className="neu-inset w-full px-4 py-3 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all min-h-[150px] resize-y rounded-xl"
                  placeholder="Tell us what's on your mind..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>

              <NeuButton
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </NeuButton>
            </form>
          </NeuCard>

          {/* ✅ Contact Info Section */}
          <div className="space-y-6">
            <NeuCard>
              <h3 className="font-semibold mb-6 text-xl">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="neu-button p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a
                      href="mailto:ahmed.dev.solutions@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      ahmed.dev.solutions@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="neu-button p-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <p className="text-muted-foreground">+92 3243345927</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="neu-button p-3">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Location</p>
                    <p className="text-muted-foreground">Pakistan </p>
                  </div>
                </div>
              </div>
            </NeuCard>
          </div>
        </div>
      </div>
    </div>
  );
}
