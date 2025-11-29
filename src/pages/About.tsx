import { NavLink } from "react-router-dom";
import NeuCard from "@/components/NeuCard";
import NeuButton from "@/components/NeuButton";
import SEOHelmet from "@/components/SEOHelmet";
import { Target, Users, Award, ExternalLink, Github, Linkedin, TrendingUp, ArrowRight } from "@/components/icons";

export default function About() {
  return (
    <div className="min-h-screen py-12 px-6">
      <SEOHelmet
        title="About FinCalcBox - Empowering Financial Decisions"
        description="Learn about FinCalcBox's mission to make financial planning accessible to everyone. Discover our suite of tools designed to help you track, analyze, and grow your wealth."
        keywords="about FinCalcBox, financial planning, finance tools, money management"
        canonical="https://www.fincalcbox.com/about"
      />
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About FinCalcBox</h1>
          <p className="text-xl text-muted-foreground">
            Empowering you to make smarter financial decisions
          </p>
        </div>

        {/* Mission Statement */}
        <NeuCard className="mb-12 animate-scale-in">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                At FinCalcBox, we believe that everyone deserves access to powerful financial tools
                that help them understand and grow their wealth. Our mission is to make financial
                planning simple, accessible, and effective for everyone, regardless of their
                financial background or expertise.
              </p>
            </div>
          </div>
        </NeuCard>

        {/* What We Offer */}
        <NeuCard className="mb-12">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">What We Offer</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                FinCalcBox provides a comprehensive suite of financial tools designed to help you:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Track and categorize your daily expenses effortlessly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Estimate investment returns and plan for your financial future</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Calculate loan payments and understand the true cost of borrowing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Access expert financial insights through our curated blog content</span>
                </li>
              </ul>
            </div>
          </div>
        </NeuCard>

        {/* Two-Column Layout - Mission with Image */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <NeuCard>
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white inline-flex mb-4">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold mb-3">Why Choose FinCalcBox?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  FinCalcBox combines powerful financial calculators with an intuitive, neumorphism-inspired design. Our tools are built for accuracy, ease of use, and accessibility - whether you're a financial expert or just getting started.
                </p>
                <NavLink to="/tools">
                  <NeuButton variant="primary" className="flex items-center gap-2">
                    Explore Tools
                    <ArrowRight className="h-5 w-5" />
                  </NeuButton>
                </NavLink>
              </NeuCard>
            </div>
            <div className="order-1 lg:order-2 animate-scale-in">
  <div className="neu-card px-[12px] py-6 sm:p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl">
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      
      <div className="neu-inset p-4 sm:p-6 rounded-xl text-center">
        <div className="text-2xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">5+</div>
        <p className="text-xs sm:text-sm text-muted-foreground">Financial Tools</p>
      </div>

      <div className="neu-inset p-4 sm:p-6 rounded-xl text-center">
        <div className="text-2xl sm:text-4xl font-bold text-accent mb-1 sm:mb-2">100%</div>
        <p className="text-xs sm:text-sm text-muted-foreground">Free to Use</p>
      </div>

      <div className="neu-inset p-4 sm:p-6 rounded-xl text-center">
        <div className="text-2xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">24/7</div>
        <p className="text-xs sm:text-sm text-muted-foreground">Accessible</p>
      </div>

      <div className="neu-inset p-4 sm:p-6 rounded-xl text-center">
        <div className="text-2xl sm:text-4xl font-bold text-accent mb-1 sm:mb-2">∞</div>
        <p className="text-xs sm:text-sm text-muted-foreground">Calculations</p>
      </div>

    </div>
  </div>
</div>

          </div>
        </div>

        {/* Developer Section */}
        <NeuCard className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-white mb-4">
            <Award className="h-8 w-8" />
          </div>
          <h2 className="text-2xl font-bold mb-3">Developed by Ahmed Raza</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            FinCalcBox is crafted with passion and expertise to provide you with the best financial
            planning experience. Built with modern technologies and designed with user experience
            at its core.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub Profile"
            >
              <NeuButton className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                GitHub Profile
                <ExternalLink className="h-4 w-4" />
              </NeuButton>
            </a>
            <a
              href="https://linkedin.com/in/m-ahmed-raza"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn Profile"
            >
              <NeuButton variant="primary" className="flex items-center gap-2">
                <Linkedin className="h-5 w-5" />
                LinkedIn Profile
                <ExternalLink className="h-4 w-4" />
              </NeuButton>
            </a>
          </div>
        </NeuCard>
      </div>
    </div>
  );
}
