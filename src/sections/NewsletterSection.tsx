import { useState } from "react";
import NeuCard from "@/components/NeuCard";
import NeuButton from "@/components/NeuButton";
import { Mail } from "@/components/icons";
import { toast } from "@/hooks/use-toast";


export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    }
  };
  return (
  
    <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-primary/5 to-accent/5">
    <div className="mx-auto max-w-3xl">
      <NeuCard className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-white mb-6">
          <Mail className="h-8 w-8" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Updated with Financial Tips
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Get expert insights, tool updates, and exclusive content delivered to your inbox.
        </p>
        <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="neu-inset flex-1 px-4 py-3 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all rounded-xl"
            required
            aria-label="Email address"
          />
          <NeuButton type="submit" variant="primary" size="lg">
            Subscribe
          </NeuButton>
        </form>
      </NeuCard>
    </div>
  </section>
  );
}


