import NeuCard from "@/components/NeuCard";
import NeuButton from "@/components/NeuButton";
import { NavLink } from "react-router-dom";
import { Globe } from "@/components/icons";

export default function CtaSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.1)_0%,transparent_70%)] blur-3xl opacity-60" />

      <div className="relative mx-auto max-w-5xl">
        <NeuCard className="relative text-center py-16 px-8 md:px-16 overflow-hidden">
          {/* Top Gradient Overlay */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-hsl(var(--neu-shadow-light))/40 to-transparent pointer-events-none" />

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Ready to Take Control of Your Finances?
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            Join thousands of users already making smarter financial decisions with{" "}
            <span className="font-semibold text-primary">FinCalcBox</span>.
          </p>

          {/* ✅ Social Proof */}
          <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-10">
            <Globe className="w-4 h-4 text-primary" />
            <span>
              Trusted by <span className="font-semibold text-primary">12,000+</span> active users worldwide
            </span>
          </p>

          {/* CTA Button */}
          <NavLink to="/tools">
            <div className="flex justify-center">
            <NeuButton
  variant="primary"
  size="lg"
  className="flex items-center justify-center gap-2 group px-8 py-4 text-base md:text-lg font-semibold"
>
  <span>Start Your Journey</span>
</NeuButton>

            </div>
          </NavLink>

          {/* Background Decorative Blobs */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[hsl(var(--accent)/0.15)] blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-[hsl(var(--primary)/0.15)] blur-3xl" />
        </NeuCard>
      </div>
    </section>
  );
}
