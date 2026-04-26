import { AlertCircle } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { siteConfig } from "@/lib/siteConfig";
import { generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "Disclaimer – Teen Patti Tiger APK",
  description:
    "Read the disclaimer for Teen Patti Tiger APK website. Information about responsible gaming and APK safety.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Disclaimer", href: "/disclaimer" }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-8 h-8 text-orange-400" />
            <h1 className="text-4xl font-black text-white">Disclaimer</h1>
          </div>
          <p className="text-white/50 text-sm mb-8">Last updated: April 20, 2026</p>

          <div className="glass-card rounded-2xl border border-orange-400/20 bg-orange-400/5 p-6 mb-8">
            <h2 className="font-bold text-orange-400 mb-2">Important Notice</h2>
            <p className="text-sm text-white/70">
              This website is an independent platform for information and APK download assistance. We
              are not officially affiliated with the Teen Patti Tiger game developers or publishers.
            </p>
          </div>

          <div className="prose-custom space-y-6">
            {[
              {
                title: "Entertainment Purpose Only",
                content: "Teen Patti Tiger is a card game application intended for entertainment purposes only. Any in-app transactions or chip purchases are for entertainment value within the game. This website does not promote gambling as a means of generating income.",
              },
              {
                title: "APK Safety Disclaimer",
                content: "While we scan all APK files we link to for malware and viruses, we cannot guarantee 100% security of all third-party files. Always download from trusted sources. We are not responsible for any damage caused by files downloaded through our recommendations.",
              },
              {
                title: "Responsible Gaming",
                content: "If you choose to engage with any gaming apps, please do so responsibly. Set time and spending limits. Never play with money you cannot afford to lose. If you feel you have a gaming problem, seek professional help from recognized organizations.",
              },
              {
                title: "Age Restriction",
                content: "Teen Patti Tiger and similar gaming applications are intended for users aged 18 years and above. We do not promote or encourage use by minors. Parents and guardians are advised to monitor their children's device usage.",
              },
              {
                title: "Legal Compliance",
                content: "Online gaming laws vary by country and region. Users are solely responsible for ensuring that their use of gaming applications complies with local laws and regulations. We are not responsible for any legal issues arising from the use of gaming apps in your jurisdiction.",
              },
              {
                title: "Affiliate Disclosure",
                content: "This website may contain affiliate links. If you click on a link and make a transaction, we may receive a commission. This does not affect our editorial content or the quality of information we provide.",
              },
              {
                title: "No Financial Advice",
                content: "Nothing on this website constitutes financial advice. Any discussion of earnings or winnings is for informational purposes only. Past results do not guarantee future outcomes. Gaming involves risk.",
              },
              {
                title: "Accuracy of Information",
                content: "We strive to provide accurate and up-to-date information. However, we cannot guarantee the accuracy of all content. APK features, bonuses, and game rules may change without notice. Always refer to the official app for the most current information.",
              },
            ].map((section) => (
              <div key={section.title} className="glass-card rounded-2xl border border-white/10 p-6">
                <h2 className="text-base font-bold text-white mb-2">{section.title}</h2>
                <p className="text-sm text-white/70 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 glass-card rounded-2xl border border-white/10 p-6 text-center">
            <p className="text-sm text-white/60">
              By using this website, you acknowledge that you have read and understood this disclaimer.
              For questions, contact us at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-yellow-400 hover:underline">
                {siteConfig.contact.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
