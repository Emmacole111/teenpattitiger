import Breadcrumb from "@/components/ui/Breadcrumb";
import { siteConfig } from "@/lib/siteConfig";
import { generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "Privacy Policy – Teen Patti Tiger APK",
  description:
    "Read the privacy policy of Teen Patti Tiger APK website. Learn how we collect, use, and protect your data.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />

        <div className="mt-8">
          <h1 className="text-4xl font-black text-white mb-2">Privacy Policy</h1>
          <p className="text-white/50 text-sm mb-8">Last updated: April 20, 2026</p>

          <div className="prose-custom space-y-8">
            {[
              {
                title: "1. Information We Collect",
                content: "We collect information you provide directly to us, such as when you contact us via our contact form. This includes your name, email address, and message content. We also automatically collect certain technical information when you visit our website, including IP address, browser type, pages visited, and time spent on pages.",
              },
              {
                title: "2. How We Use Your Information",
                content: "We use the information we collect to respond to your inquiries and provide customer support, improve our website and user experience, analyze website traffic and usage patterns, send you important updates (if you opt in), and comply with legal obligations.",
              },
              {
                title: "3. Cookies & Tracking",
                content: "Our website uses cookies and similar tracking technologies to enhance your experience. We use Google Analytics to understand how visitors use our site. You can disable cookies in your browser settings, though this may affect some website functionality.",
              },
              {
                title: "4. Information Sharing",
                content: "We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist in operating our website, subject to confidentiality agreements. We may disclose information when required by law or to protect our rights.",
              },
              {
                title: "5. Data Security",
                content: "We implement appropriate security measures to protect your personal information. However, no internet transmission is 100% secure. We encourage you to use caution when submitting personal information online.",
              },
              {
                title: "6. Third-Party Links",
                content: "Our website may contain links to third-party websites, including APK download links and emulator software. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.",
              },
              {
                title: "7. Children's Privacy",
                content: "Our website is not directed to children under 18 years of age. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately.",
              },
              {
                title: "8. Your Rights",
                content: "You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us at " + siteConfig.contact.email,
              },
              {
                title: "9. Changes to This Policy",
                content: "We may update this Privacy Policy periodically. We will notify you of significant changes by posting a notice on our website. Your continued use of our website after changes constitutes acceptance of the updated policy.",
              },
              {
                title: "10. Contact Us",
                content: `If you have questions about this Privacy Policy, please contact us at: ${siteConfig.contact.email}`,
              },
            ].map((section) => (
              <div key={section.title} className="glass-card rounded-2xl border border-white/10 p-6">
                <h2 className="text-lg font-bold text-yellow-400 mb-3">{section.title}</h2>
                <p className="text-sm text-white/70 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
