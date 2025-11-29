import NeuCard from "@/components/NeuCard";
import SEOHelmet from "@/components/SEOHelmet";
import { AlertTriangle, Shield, Calculator, FileText, Scale } from "@/components/icons";

export default function Disclaimer() {
  return (
    <div className="min-h-screen py-12 px-6">
      <SEOHelmet
        title="Disclaimer - FinCalcBox"
        description="Important disclaimer regarding the use of FinCalcBox financial calculators. Please read our terms and limitations before using our tools."
        keywords="disclaimer, financial calculator disclaimer, terms of use, limitations, FinCalcBox"
        canonical="https://www.fincalcbox.com/disclaimer"
      />
      
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-white mb-6">
            <AlertTriangle className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Disclaimer</h1>
          <p className="text-xl text-muted-foreground">
            Important information about our financial tools
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* General Disclaimer */}
        <NeuCard className="mb-8 animate-scale-in">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">General Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information provided by FinCalcBox ("we," "us," or "our") on our website and through our 
                financial calculators is for general informational purposes only. All information on the site 
                is provided in good faith, however, we make no representation or warranty of any kind, express 
                or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness 
                of any information on the site.
              </p>
            </div>
          </div>
        </NeuCard>

        {/* Financial Advice Disclaimer */}
        <NeuCard className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
              <Calculator className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Not Financial Advice</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our financial calculators and tools are designed to provide estimates and general information only. 
                They should not be considered as professional financial advice, investment advice, or recommendations 
                for any specific financial product or strategy.
              </p>
              <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg">
                <p className="text-destructive font-semibold mb-2">Important Notice:</p>
                <p className="text-sm text-destructive">
                  Always consult with qualified financial professionals before making any financial decisions. 
                  Your individual financial situation may vary significantly from the assumptions used in our calculators.
                </p>
              </div>
            </div>
          </div>
        </NeuCard>

        {/* Accuracy and Limitations */}
        <NeuCard className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Accuracy and Limitations</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                While we strive to provide accurate calculations, our tools have certain limitations:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Calculations are based on standard formulas and may not reflect all applicable fees, taxes, or special conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Interest rates, tax rates, and other financial parameters change frequently and may not be current</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Results are estimates and should be used for planning purposes only</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>We do not guarantee the accuracy of any calculation or result</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Your actual financial outcomes may differ significantly from our estimates</span>
                </li>
              </ul>
            </div>
          </div>
        </NeuCard>

        {/* Third-Party Information */}
        <NeuCard className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
              <Scale className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Third-Party Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our website may contain links to third-party websites or services that are not owned or controlled by FinCalcBox. 
                We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any 
                third-party websites or services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We strongly advise you to read the terms and conditions and privacy policies of any third-party websites 
                or services that you visit.
              </p>
            </div>
          </div>
        </NeuCard>

        {/* Limitation of Liability */}
        <NeuCard className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In no event shall FinCalcBox, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                be liable for any indirect, incidental, special, consequential, or punitive damages, including without 
                limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use 
                of our website or services.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Maximum Liability:</strong> Our total liability to you for any claim arising out of or 
                  relating to these terms or our services shall not exceed the amount you paid us, if any, for the 
                  services in the twelve (12) months preceding the claim.
                </p>
              </div>
            </div>
          </div>
        </NeuCard>

        {/* Updates and Changes */}
        <NeuCard className="mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-3">Updates to This Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to update or change this disclaimer at any time. Any changes will be posted on this page 
              with an updated revision date. Your continued use of our website after any such changes constitutes your 
              acceptance of the new disclaimer.
            </p>
          </div>
        </NeuCard>

        {/* Contact Information */}
        <NeuCard>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-3">Questions About This Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about this disclaimer, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Email:</strong> ahmed.dev.solutions@gmail.com</p>
              <p><strong>Website:</strong> <a href="/contact" className="text-primary hover:underline">Contact Form</a></p>
            </div>
          </div>
        </NeuCard>
      </div>
    </div>
  );
}
