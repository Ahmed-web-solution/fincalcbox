import NeuCard from "@/components/NeuCard";
import SEOHelmet from "@/components/SEOHelmet";
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from "@/components/icons";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-12 px-6">
      <SEOHelmet
        title="Privacy Policy - FinCalcBox"
        description="Learn how FinCalcBox protects your privacy and handles your data. Our comprehensive privacy policy covers data collection, usage, and your rights."
        keywords="privacy policy, data protection, GDPR, user privacy, FinCalcBox privacy"
        canonical="https://www.fincalcbox.com/privacy-policy"
      />
      
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-white mb-6">
            <Shield className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">
            Your privacy is important to us
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Introduction */}
        <NeuCard className="mb-8 animate-scale-in">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
              <Eye className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                At FinCalcBox, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website 
                and services.
              </p>
            </div>
          </div>
        </NeuCard>

        {/* Information We Collect */}
        <NeuCard className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
              <Database className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    We may collect personal information that you voluntarily provide to us, including:
                  </p>
                  <ul className="space-y-1 text-muted-foreground ml-4">
                    <li>• Name and email address (when you contact us)</li>
                    <li>• Financial data you input into our calculators (stored locally only)</li>
                    <li>• Usage data and analytics (anonymized)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Automatically Collected Information</h3>
                  <ul className="space-y-1 text-muted-foreground ml-4">
                    <li>• Device information and browser type</li>
                    <li>• IP address and general location</li>
                    <li>• Pages visited and time spent on our site</li>
                    <li>• Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </NeuCard>

        {/* How We Use Information */}
        <NeuCard className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
              <UserCheck className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>To provide and maintain our financial calculator services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>To improve our website functionality and user experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>To respond to your inquiries and provide customer support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>To analyze usage patterns and optimize our services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>To comply with legal obligations and protect our rights</span>
                </li>
              </ul>
            </div>
          </div>
        </NeuCard>

        {/* Data Security */}
        <NeuCard className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
              <Lock className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                the internet or electronic storage is 100% secure.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Important:</strong> All financial calculations are performed locally in your browser. 
                  We do not store your financial data on our servers.
                </p>
              </div>
            </div>
          </div>
        </NeuCard>

        {/* Your Rights */}
        <NeuCard className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
              <UserCheck className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Right to access your personal information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Right to correct inaccurate information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Right to delete your personal information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Right to restrict processing of your information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Right to data portability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Right to object to processing</span>
                </li>
              </ul>
            </div>
          </div>
        </NeuCard>

        {/* Contact Information */}
        <NeuCard className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> ahmed.dev.solutions@gmail.com</p>
                <p><strong>Website:</strong> <a href="/contact" className="text-primary hover:underline">Contact Form</a></p>
              </div>
            </div>
          </div>
        </NeuCard>

        {/* Changes to Policy */}
        <NeuCard>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-3">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review 
              this Privacy Policy periodically for any changes.
            </p>
          </div>
        </NeuCard>
      </div>
    </div>
  );
}
