import NeuCard from "@/components/NeuCard";
import SEOHelmet from "@/components/SEOHelmet";
import { FileText, Shield, User, AlertCircle, Gavel, Mail } from "@/components/icons";

export default function TermsOfService() {
  return (
    <div className="min-h-screen py-12 px-6">
      <SEOHelmet
        title="Terms of Service - FinCalcBox"
        description="Read our terms of service for using FinCalcBox financial calculators. Understand your rights and responsibilities when using our platform."
        keywords="terms of service, user agreement, terms and conditions, FinCalcBox terms"
        canonical="https://www.fincalcbox.com/terms-of-service"
      />
      
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-white mb-6">
            <FileText className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-muted-foreground">
            Please read these terms carefully
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Agreement to Terms */}
        <NeuCard className="mb-8 animate-scale-in">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
              <Gavel className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using FinCalcBox ("the Service"), you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>
          </div>
        </NeuCard>

        {/* Use License */}
        <NeuCard className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily use FinCalcBox for personal, non-commercial transitory viewing only. 
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Modify or copy the materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Use the materials for any commercial purpose or for any public display</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Attempt to reverse engineer any software contained on the website</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Remove any copyright or other proprietary notations from the materials</span>
                </li>
              </ul>
            </div>
          </div>
        </NeuCard>

        {/* User Responsibilities */}
        <NeuCard className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
              <User className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a user of our service, you agree to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Use the service only for lawful purposes and in accordance with these terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Not use the service in any way that could damage, disable, overburden, or impair our servers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Not attempt to gain unauthorized access to any part of the service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Not use any automated means to access the service for any purpose</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Provide accurate information when contacting us</span>
                </li>
              </ul>
            </div>
          </div>
        </NeuCard>

        {/* Prohibited Uses */}
        <NeuCard className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
              <AlertCircle className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Prohibited Uses</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may not use our service:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>For any unlawful purpose or to solicit others to perform unlawful acts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>To submit false or misleading information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>To upload or transmit viruses or any other type of malicious code</span>
                </li>
              </ul>
            </div>
          </div>
        </NeuCard>

        {/* Service Availability */}
        <NeuCard className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Service Availability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We strive to provide continuous service availability, but we do not guarantee that our service will be 
                available at all times. We may experience hardware, software, or other problems or need to perform 
                maintenance related to our service, resulting in interruptions, delays, or errors.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>No Warranty:</strong> We provide our service "as is" and "as available" without any warranties 
                  of any kind, either express or implied.
                </p>
              </div>
            </div>
          </div>
        </NeuCard>

        {/* Intellectual Property */}
        <NeuCard className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Intellectual Property Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The service and its original content, features, and functionality are and will remain the exclusive 
                property of FinCalcBox and its licensors. The service is protected by copyright, trademark, and other 
                laws. Our trademarks and trade dress may not be used in connection with any product or service without 
                our prior written consent.
              </p>
            </div>
          </div>
        </NeuCard>

        {/* Termination */}
        <NeuCard className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
              <AlertCircle className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason 
                whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use 
                the service will cease immediately.
              </p>
            </div>
          </div>
        </NeuCard>

        {/* Governing Law */}
        <NeuCard className="mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-3">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be interpreted and governed by the laws of the United States, without regard to its 
              conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be 
              considered a waiver of those rights.
            </p>
          </div>
        </NeuCard>

        {/* Contact Information */}
        <NeuCard>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
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
