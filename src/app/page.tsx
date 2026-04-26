import HeroSection from "@/components/home/HeroSection";
import TickerBanner from "@/components/home/TickerBanner";
import HomeContent from "@/components/home/HomeContent";
import BlogPreview from "@/components/home/BlogPreview";
import CtaBanner from "@/components/home/CtaBanner";
import { softwareAppSchema, faqSchema } from "@/lib/schemas";
import { generateMeta } from "@/lib/metadata";

const homeFaqsSchema = [
  { question: "Is Teen Patti Tiger safe to download?", answer: "Yes, the APK from the official teenpattitiger.com.pk site is safe. Avoid third-party download sites — they sometimes bundle modified APKs that can compromise your account." },
  { question: "Can I play Teen Patti Tiger on iPhone?", answer: "Not yet. Android only for now. An iOS version has been mentioned but no confirmed release date." },
  { question: "What's the minimum amount I can deposit?", answer: "Deposits typically start from 300 PKR, though this varies with current promotions." },
  { question: "How long do withdrawals take?", answer: "2 to 5 minutes for most requests under 10,000 PKR. Larger amounts or late-night requests can take longer." },
  { question: "Do I have to deposit to play?", answer: "No. Your welcome bonus, daily login rewards, and referral earnings give you enough to start playing without a deposit." },
  { question: "Is there a bonus if I refer my friends?", answer: "Yes — 1,000 PKR per successful referral, plus lifetime commission on their active play." },
];

export const metadata = generateMeta({
  absoluteTitle: true,
  title: "Teen Patti Tiger APK – Free Download for Pakistan",
  description:
    "Download Teen Patti Tiger APK free. Play Teen Patti, Dragon vs Tiger & Aviator. JazzCash & EasyPaisa withdrawals in minutes.",
  path: "",
  keywords: [
    "teen patti tiger",
    "teen patti tiger apk",
    "teen patti tiger download",
    "teen patti tiger pakistan",
    "3 patti tiger",
    "3patti tiger",
    "teen patti tiger apk download",
    "3 patti tiger pakistan",
    "teen patti tiger latest version",
    "teen patti tiger jazzcash",
    "teen patti tiger easypaisa",
    "teen patti tiger real money",
    "teen patti tiger referral",
    "teen patti tiger v1.4",
    "teen patti tiger earning app pakistan",
    "3 patti tiger apk download",
  ],
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeFaqsSchema)) }}
      />

      <HeroSection />
      <TickerBanner />
      <HomeContent />
      <BlogPreview />
      <CtaBanner />
    </>
  );
}
