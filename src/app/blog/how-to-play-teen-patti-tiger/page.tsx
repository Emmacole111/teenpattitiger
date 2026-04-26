import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";
import AuthorBox from "@/components/ui/AuthorBox";
import TableOfContents from "@/components/ui/TableOfContents";
import { blogPosts, siteConfig } from "@/lib/siteConfig";
import { articleSchema } from "@/lib/schemas";
import { generateArticleMeta } from "@/lib/metadata";
import { Download } from "lucide-react";

const post = blogPosts[0];

export const metadata = generateArticleMeta(post, {
  metaTitle: "How to Play Teen Patti Tiger – Complete Beginner Guide 2026",
  metaDescription:
    "Learn how to play Teen Patti Tiger step by step. Full rules, hand rankings, blind vs seen strategy, registration guide, and winning tips for Pakistani players in 2026.",
  keywords: [
    "how to play teen patti tiger",
    "teen patti tiger rules pakistan",
    "teen patti tiger beginner guide 2026",
    "3 patti tiger how to play",
    "teen patti tiger hand rankings",
  ],
});

const tocItems = [
  { id: "what-is", title: "What is Teen Patti Tiger?" },
  { id: "how-to-download", title: "How to Download the APK" },
  { id: "register", title: "Registration & Welcome Bonus" },
  { id: "game-rules", title: "Game Rules & Table Setup" },
  { id: "hand-rankings", title: "Hand Rankings & Probabilities" },
  { id: "how-to-bet", title: "Blind vs Seen – How Betting Works" },
  { id: "other-games", title: "Dragon vs Tiger & Other Games" },
  { id: "winning-tips", title: "10 Winning Tips for Beginners" },
  { id: "withdrawals", title: "How Withdrawals Work" },
  { id: "faq", title: "FAQs" },
];

const blogFaqs = [
  {
    question: "Is Teen Patti Tiger available in Urdu?",
    answer:
      "Yes. Teen Patti Tiger supports both English and Urdu throughout the entire app — including game instructions, bonus descriptions, and customer support. This makes it one of the most accessible card game apps for Pakistani players.",
  },
  {
    question: "Can I play Teen Patti Tiger for free without depositing?",
    answer:
      "Yes. Your welcome bonus, daily login chips, and referral earnings give you enough balance to play without depositing your own money. The welcome bonus alone covers dozens of table sessions at minimum stakes.",
  },
  {
    question: "How do I get more chips in Teen Patti Tiger?",
    answer:
      "Chips come from daily login rewards (500–15,000 chips per day depending on streak), the welcome bonus (up to ₨5,000 match), referral bonuses (₨1,000 per invite), tournament prizes, weekly spin wheels, and in-app deposits via JazzCash or EasyPaisa.",
  },
  {
    question: "What is a sideshow (compromise) in Teen Patti?",
    answer:
      "A sideshow lets a seen player secretly compare hands with the seen player immediately before them. If your hand is worse, you must fold. If it's better, they fold. It's a key strategy move — use it to eliminate strong opponents before the pot grows too large.",
  },
  {
    question: "Is Teen Patti Tiger safe to play in Pakistan?",
    answer:
      "Millions of Pakistani players use the app and withdraw through JazzCash and EasyPaisa successfully. The app is not a scam — real money moves. However, it is a gambling product, and gambling carries financial risk. Play within your budget.",
  },
  {
    question: "How long does a Teen Patti round take?",
    answer:
      "A typical Teen Patti round on Teen Patti Tiger takes 2–5 minutes depending on player count and betting pace. You can play 10–15 rounds per hour comfortably. Dragon vs Tiger rounds finish in under 30 seconds if you prefer faster gameplay.",
  },
];

export default function HowToPlayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(post)) }}
      />
      <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: "How to Play Teen Patti Tiger", href: "/blog/how-to-play-teen-patti-tiger" },
            ]}
          />

          <div className="mt-8 grid lg:grid-cols-[1fr_300px] gap-8">
            {/* Main Content */}
            <article>
              <div className="mb-8">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-yellow-400/15 text-yellow-400 border border-yellow-400/20">
                  {post.category}
                </span>
                <h1 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-4 leading-tight">
                  How to Play Teen Patti Tiger: Complete Beginner&apos;s Guide (2026)
                </h1>
                <AuthorBox
                  author={post.author}
                  role={post.authorRole}
                  date={post.date}
                  readTime={post.readTime}
                />
              </div>

              {/* Featured Image */}
              <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden mb-8 border border-white/10">
                <Image
                  src="/images/how-to-play-teen-patti-tiger.webp"
                  alt="How to Play Teen Patti Tiger – Complete Beginner Guide for Pakistan"
                  width={700}
                  height={380}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div className="lg:hidden mb-8">
                <TableOfContents items={tocItems} />
              </div>

              <div className="prose-custom">
                <div className="highlight-box mb-8">
                  <p className="text-sm text-white/80">
                    <strong className="text-yellow-400">Quick Summary:</strong> Teen Patti Tiger is
                    Pakistan&apos;s most downloaded card game app. Download the free APK, register in
                    under 2 minutes, claim your ₨5,000 welcome bonus, and start playing Teen Patti,
                    Dragon vs Tiger, or Slots. This guide covers everything from the basics through to
                    advanced betting strategies.
                  </p>
                </div>

                {/* Section 1 */}
                <h2 id="what-is">What is Teen Patti Tiger?</h2>
                <p>
                  Teen Patti Tiger — also known as <strong>3 Patti Tiger</strong> — is Pakistan&apos;s most
                  popular real-money card game application for Android. It&apos;s built around Teen Patti
                  Classic, the three-card betting game that&apos;s been played at family gatherings across
                  South Asia for generations.
                </p>
                <p>
                  The app packages the familiar card game alongside 100+ additional game modes —
                  Dragon vs Tiger, Aviator, Andar Bahar, Rummy, and Slots — all accessible from one
                  platform. Payments work through JazzCash and EasyPaisa, and withdrawals process in
                  2–5 minutes. It supports both Urdu and English.
                </p>
                <p>
                  As of 2026, the app has been installed over 2 million times and maintains an active
                  player count of 1.2 million+ daily users across Pakistan. Peak hours run from 7 PM
                  to 1 AM when tables fill in under 10 seconds.
                </p>

                <div className="glass-card rounded-2xl border border-white/10 overflow-hidden not-prose my-6">
                  <div className="px-4 py-3 bg-yellow-400/10 border-b border-yellow-400/15">
                    <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">App Quick Facts</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3">
                    {[
                      { label: "Current Version", value: `v${siteConfig.apkVersion}` },
                      { label: "APK Size", value: siteConfig.apkSize },
                      { label: "Android Required", value: "5.0+" },
                      { label: "Languages", value: "Urdu + English" },
                      { label: "Payments", value: "JazzCash, EasyPaisa" },
                      { label: "Withdrawal Time", value: "2–5 minutes" },
                    ].map((item) => (
                      <div key={item.label} className="px-4 py-3 border-b border-r border-white/5 last:border-r-0">
                        <div className="text-xs text-white/40">{item.label}</div>
                        <div className="text-sm font-bold text-white mt-0.5">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 2 */}
                <h2 id="how-to-download">How to Download Teen Patti Tiger APK</h2>
                <p>
                  Teen Patti Tiger is not on Google Play Store — Play Store policies prohibit
                  real-money gambling apps for Pakistan. This is standard for every 3 Patti app in
                  the country and is not a red flag. You download the APK directly.
                </p>
                <div className="not-prose my-5 space-y-3">
                  {[
                    { step: "1", title: "Open your mobile browser (Chrome recommended)", desc: "Navigate to our official Teen Patti Tiger download page. Avoid downloading from YouTube links, WhatsApp forwards, or unknown websites." },
                    { step: "2", title: "Tap the Download APK button", desc: "The APK file is 44 MB. It downloads in under a minute on 4G or WiFi. You'll see the download progress in your notification bar." },
                    { step: "3", title: "Enable Unknown Sources", desc: "Android asks for permission to install APKs outside the Play Store. Go to Settings → Security (or Apps) → Allow from this source. You can disable this after installation." },
                    { step: "4", title: "Open the downloaded APK", desc: "Tap the download notification or find the file in your Downloads folder. Tap Install and wait 30 seconds." },
                    { step: "5", title: "Launch and register", desc: "The app opens immediately after installation. Registration takes under 2 minutes." },
                  ].map(({ step, title, desc }) => (
                    <div key={step} className="flex items-start gap-4 glass-card rounded-xl border border-white/10 p-4">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center font-black text-black text-sm flex-shrink-0">
                        {step}
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">{title}</p>
                        <p className="text-xs text-white/55 mt-1 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p>
                  For a detailed walkthrough with troubleshooting, read our{" "}
                  <Link href="/blog/apk-install-guide" className="text-yellow-400 hover:underline">
                    complete APK install guide
                  </Link>
                  .
                </p>

                {/* Section 3 */}
                <h2 id="register">Registration & Claiming Your Welcome Bonus</h2>
                <p>
                  After installing, the first screen asks you to register or log in. Registration
                  takes under 2 minutes:
                </p>
                <ul>
                  <li>Enter your mobile phone number (Pakistani number, starting with +92)</li>
                  <li>Verify via OTP sent to your phone</li>
                  <li>Create a username and set a password</li>
                  <li>Optionally link an email address for account recovery</li>
                  <li>Bind your JazzCash or EasyPaisa account for withdrawals</li>
                </ul>
                <p>
                  <strong className="text-white">Important:</strong> Bind your phone number before
                  you start playing seriously. Guest accounts are lost if the app is uninstalled.
                  Your payment account binding also unlocks the full withdrawal system.
                </p>
                <p>
                  After registration, navigate to the Bonus section to claim your{" "}
                  <Link href="/bonuses/welcome-bonus" className="text-yellow-400 hover:underline">
                    welcome bonus
                  </Link>
                  . Make your first deposit (minimum ₨500) and receive a 100% match up to ₨5,000.
                  The bonus credits to your account instantly.
                </p>

                {/* Section 4 */}
                <h2 id="game-rules">Teen Patti Game Rules & Table Setup</h2>
                <p>
                  Teen Patti is played with a standard 52-card deck, no Jokers. Between 2 and 10
                  players sit at a table. Before cards are dealt, every player places a mandatory
                  minimum bet called the <strong className="text-white">boot</strong> into the
                  central pot. This boot amount varies by table — low-stakes tables start at ₨10.
                </p>
                <p>
                  Once boots are collected, each player receives exactly 3 cards, dealt face-down
                  clockwise. Players must not show their cards to others. The goal: have the best
                  3-card hand at the end of the round, or be the last player standing after others
                  have folded.
                </p>
                <p>
                  Betting continues clockwise from the player left of the dealer. On each turn, a
                  player has three choices:
                </p>
                <ul>
                  <li><strong className="text-white">Pack (Fold):</strong> Give up your cards and exit the round. You forfeit everything in the pot.</li>
                  <li><strong className="text-white">Chaal (Call/Raise):</strong> Match or raise the current bet and stay in the round.</li>
                  <li><strong className="text-white">Show:</strong> Once only two players remain, either can request a showdown. Both hands are revealed and the best hand wins.</li>
                </ul>
                <p>
                  The round ends when all players but one have folded, or when a Show is called. The
                  pot goes to the winner.
                </p>

                {/* Section 5 */}
                <h2 id="hand-rankings">Hand Rankings & Probabilities</h2>
                <p>
                  Knowing which hand beats which is fundamental. Here are all 6 hand ranks in Teen
                  Patti, from highest to lowest, with their mathematical probability:
                </p>
                <div className="glass-card rounded-2xl border border-white/10 overflow-hidden not-prose my-6">
                  <table className="table-custom w-full">
                    <thead>
                      <tr>
                        <th className="text-left">Rank</th>
                        <th className="text-left">Hand Name</th>
                        <th className="text-left">Example</th>
                        <th className="text-left">Probability</th>
                        <th className="text-left">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { rank: "1st", name: "Trail (Three of a Kind)", ex: "A♠ A♥ A♦", prob: "0.24%", note: "Three Aces is the absolute best" },
                        { rank: "2nd", name: "Pure Sequence (Straight Flush)", ex: "A♠ K♠ Q♠", prob: "0.22%", note: "3 consecutive cards, same suit" },
                        { rank: "3rd", name: "Sequence (Straight)", ex: "A♠ K♥ Q♦", prob: "3.26%", note: "3 consecutive cards, any suit" },
                        { rank: "4th", name: "Color (Flush)", ex: "A♠ 9♠ 5♠", prob: "4.96%", note: "Any 3 cards of same suit" },
                        { rank: "5th", name: "Pair", ex: "K♠ K♥ 2♦", prob: "16.94%", note: "Two cards of equal rank" },
                        { rank: "6th", name: "High Card", ex: "A♠ K♥ J♦", prob: "74.39%", note: "Most common — no matching pattern" },
                      ].map((h) => (
                        <tr key={h.rank}>
                          <td className="font-bold text-yellow-400 text-sm">{h.rank}</td>
                          <td className="text-white text-sm">{h.name}</td>
                          <td className="font-mono text-xs text-white/70">{h.ex}</td>
                          <td className="text-xs text-green-400 font-semibold">{h.prob}</td>
                          <td className="text-xs text-white/50">{h.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>
                  The most important insight from this table: High Card hands account for 74% of all
                  dealt hands. This means most of the time, neither you nor your opponents have
                  anything special. The player who manages bet sizing and psychological pressure
                  wins — not necessarily the player with the best cards.
                </p>

                {/* Section 6 */}
                <h2 id="how-to-bet">Blind vs Seen – How Betting Works</h2>
                <p>
                  This is the most misunderstood mechanic in Teen Patti. Every player starts a round
                  as a <strong className="text-white">blind player</strong> — they haven&apos;t looked at
                  their cards. At any point, a player can look at their cards and become a{" "}
                  <strong className="text-white">seen player</strong>.
                </p>
                <p>
                  The key rule: <strong className="text-white">seen players pay double the bet amount</strong>{" "}
                  compared to blind players. If the current minimum bet is ₨10 for a blind player, a
                  seen player must bet ₨20 minimum to stay in.
                </p>
                <div className="not-prose my-5 grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Blind Player Advantages",
                      items: [
                        "Bets half of what seen players must bet",
                        "Creates uncertainty — opponents don't know if you have good cards",
                        "Cannot be asked for a sideshow by seen players",
                        "Psychological pressure on seen players who have weak hands",
                      ],
                      color: "border-blue-400/20 bg-blue-400/5",
                      tag: "text-blue-400",
                    },
                    {
                      title: "Seen Player Advantages",
                      items: [
                        "You know whether to invest in the pot based on your cards",
                        "Can request a sideshow (compare hands privately with another seen player)",
                        "Can make more calculated raises when holding strong hands",
                        "Better decision-making on when to fold to avoid losing more chips",
                      ],
                      color: "border-yellow-400/20 bg-yellow-400/5",
                      tag: "text-yellow-400",
                    },
                  ].map((box) => (
                    <div key={box.title} className={`rounded-2xl border p-4 ${box.color}`}>
                      <h3 className={`font-bold text-sm mb-3 ${box.tag}`}>{box.title}</h3>
                      <ul className="space-y-1.5">
                        {box.items.map((item, i) => (
                          <li key={i} className="text-xs text-white/65 flex items-start gap-2">
                            <span className={`${box.tag} mt-0.5`}>✓</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p>
                  A common beginner mistake is looking at cards too early. Staying blind in the first
                  1–2 betting rounds puts pressure on opponents who&apos;ve already seen their mediocre
                  hands and are debating whether to fold.
                </p>

                {/* Section 7 */}
                <h2 id="other-games">Dragon vs Tiger, Slots & Other Games</h2>
                <p>
                  Teen Patti Tiger isn&apos;t just Teen Patti. The platform includes 100+ additional game
                  modes. Here&apos;s what&apos;s worth knowing for beginners:
                </p>
                <ul>
                  <li>
                    <strong className="text-white">Dragon vs Tiger:</strong> One card dealt to Dragon,
                    one to Tiger. Bet which is higher. Aces = 1 (lowest), Kings = 13 (highest). Rounds
                    complete in 30 seconds. Ideal for using bonus chips quickly.
                  </li>
                  <li>
                    <strong className="text-white">Aviator:</strong> A multiplier climbs from 1x
                    upward. Cash out before the plane flies away. The longer you wait, the more you
                    win — but wait too long and you lose everything. High tension, fast rounds.
                  </li>
                  <li>
                    <strong className="text-white">Andar Bahar:</strong> A card is revealed. Bet
                    whether the next matching card falls on the Andar (inside) or Bahar (outside) pile.
                    Near 50/50 odds with a small house edge.
                  </li>
                  <li>
                    <strong className="text-white">Slots:</strong> Spin the reels for 3-reel classics
                    or 5-reel video slots. Progressive jackpots available. Free spins granted through
                    daily login rewards and Scatter symbols.
                  </li>
                </ul>
                <p>
                  For a complete games overview, visit the{" "}
                  <Link href="/games" className="text-yellow-400 hover:underline">
                    Games section
                  </Link>
                  .
                </p>

                {/* Section 8 */}
                <h2 id="winning-tips">10 Winning Tips for Teen Patti Tiger Beginners</h2>

                <div className="not-prose my-5 space-y-3">
                  {[
                    { num: "01", tip: "Start at the lowest-stakes tables", detail: "Minimum boot tables (₨10) let you play dozens of rounds while learning the platform, payment flow, and opponent patterns without significant financial risk." },
                    { num: "02", tip: "Stay blind in early rounds", detail: "Resist the urge to look at your cards immediately. Playing blind in rounds 1–2 costs half as much and puts pressure on players who've already seen weak hands." },
                    { num: "03", tip: "Fold 60% of the time", detail: "Teen Patti is a game of patience. 74% of hands dealt are High Card — useless unless everyone else also has nothing. Tight folding preserves chips for strong hands." },
                    { num: "04", tip: "Never bet more than 5% of your chip stack per round", detail: "This basic bankroll rule keeps you in the game through inevitable bad runs. Beginners who ignore this go bust within a few sessions." },
                    { num: "05", tip: "Use bonus chips for practice", detail: "Your welcome bonus and daily login chips are perfect for learning without financial risk. Treat bonus sessions as training, not income." },
                    { num: "06", tip: "Understand the sideshow rule", detail: "Request a sideshow only when you want to eliminate a specific opponent before the pot grows. Don't use it when you hold a strong hand — just keep betting to build the pot." },
                    { num: "07", tip: "Set a daily loss limit before you start", detail: "Decide before opening the app: if I lose X amount, I close the app. Without a hard stop-loss, bad sessions spiral. Set it and actually enforce it." },
                    { num: "08", tip: "Play Dragon vs Tiger to meet wagering requirements fast", detail: "If you need to wager your bonus before withdrawal, Dragon vs Tiger's 30-second rounds clear the requirement much faster than Teen Patti's longer sessions." },
                    { num: "09", tip: "Play during peak hours (8 PM–midnight) for better tables", detail: "More players online means more table variety, faster matchmaking, and opponents who are playing casually rather than as dedicated grinders." },
                    { num: "10", tip: "Never chase losses", detail: "The biggest destroyer of bankrolls is chasing. If you're down, the math doesn't care about your recent bad luck. Stop, walk away, and return with a clear head." },
                  ].map(({ num, tip, detail }) => (
                    <div key={num} className="glass-card rounded-xl border border-white/10 p-4 flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400/20 to-orange-400/10 border border-yellow-400/25 flex items-center justify-center text-yellow-400 font-black text-sm flex-shrink-0">
                        {num}
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">{tip}</p>
                        <p className="text-xs text-white/55 mt-1 leading-relaxed">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Section 9 */}
                <h2 id="withdrawals">How Withdrawals Work in Pakistan</h2>
                <p>
                  Once your real balance (not bonus chips) reaches ₨500 or more, you can request a
                  withdrawal. Go to the Wallet section of the app and select Withdraw.
                </p>
                <div className="glass-card rounded-2xl border border-white/10 overflow-hidden not-prose my-5">
                  <table className="table-custom w-full">
                    <thead>
                      <tr>
                        <th>Method</th>
                        <th>Min Amount</th>
                        <th>Processing Time</th>
                        <th>Available</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { method: "JazzCash", min: "₨500", time: "2–5 minutes", avail: "✓ Pakistan" },
                        { method: "EasyPaisa", min: "₨500", time: "2–5 minutes", avail: "✓ Pakistan" },
                        { method: "Bank Transfer", min: "₨2,000", time: "1–24 hours", avail: "✓ Pakistan" },
                      ].map((r) => (
                        <tr key={r.method}>
                          <td className="font-semibold text-white">{r.method}</td>
                          <td>{r.min}</td>
                          <td className="text-green-400 font-semibold">{r.time}</td>
                          <td className="text-green-400">{r.avail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>
                  Withdrawals under ₨10,000 process in 2–5 minutes. Larger amounts or late-night
                  requests (after 12 AM) may take up to an hour. Very large payouts may require a
                  KYC photo ID verification — this is a compliance step, not a scam.
                </p>

                <div className="highlight-box my-8">
                  <p className="text-sm text-white/80">
                    Ready to go deeper?{" "}
                    <Link href="/blog/earning-guide" className="text-yellow-400 hover:underline">
                      Read our full earning guide
                    </Link>{" "}
                    for referral strategies, tournament tips, and how to maximize daily bonuses.
                  </p>
                </div>
              </div>

              <div id="faq" className="mt-10">
                <h2 className="text-2xl font-black text-white mb-6">Frequently Asked Questions</h2>
                <FaqSection faqs={blogFaqs} />
              </div>

              <div className="mt-10 glass-card rounded-2xl border border-yellow-400/20 p-6 bg-yellow-400/5 text-center">
                <h3 className="font-black text-white text-xl mb-2">Ready to Play Teen Patti Tiger?</h3>
                <p className="text-white/60 text-sm mb-4">Download free, claim ₨5,000 welcome bonus, and start today.</p>
                <a
                  href="https://pk3pattitiger.com/?from_gameid=8177465&channelCode=7989368" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold glow-btn"
                >
                  <Download className="w-4 h-4" />
                  Download APK Free
                </a>
              </div>

              <div className="mt-10">
                <h3 className="font-black text-white text-xl mb-4">Related Articles & Pages</h3>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { href: "/blog/tips-and-tricks", title: "Top 10 Tips & Tricks", emoji: "📊" },
                    { href: "/blog/earning-guide", title: "Earning Guide 2026", emoji: "💰" },
                    { href: "/blog/apk-install-guide", title: "APK Install Guide", emoji: "📱" },
                    { href: "/games/teen-patti", title: "Teen Patti Game Rules", emoji: "🃏" },
                    { href: "/bonuses/welcome-bonus", title: "Claim ₨5,000 Bonus", emoji: "🎁" },
                    { href: "/games/dragon-vs-tiger", title: "Dragon vs Tiger Guide", emoji: "🐉" },
                    { href: "/old-versions", title: "Download Old Versions", emoji: "📦" },
                    { href: "/teen-patti-tiger-for-pc", title: "Play on PC", emoji: "💻" },
                    { href: "/games", title: "All Games", emoji: "🎮" },
                  ].map((l) => (
                    <Link key={l.href} href={l.href} className="glass-card rounded-xl border border-white/10 p-3.5 hover:border-yellow-400/30 transition-all group flex items-center gap-2.5">
                      <span className="text-xl flex-shrink-0">{l.emoji}</span>
                      <span className="text-sm font-semibold text-white/80 group-hover:text-yellow-400 transition-colors">{l.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                <TableOfContents items={tocItems} />
                <div className="glass-card rounded-2xl border border-yellow-400/20 p-5 bg-yellow-400/5 text-center">
                  <span className="text-4xl block mb-3">📲</span>
                  <h3 className="font-black text-white mb-1 text-sm">Download Free APK</h3>
                  <p className="text-xs text-white/50 mb-3">v{siteConfig.apkVersion} · {siteConfig.apkSize} · Android 5.0+</p>
                  <a href="https://pk3pattitiger.com/?from_gameid=8177465&channelCode=7989368" target="_blank" rel="noopener noreferrer" className="block w-full py-2.5 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-sm text-center glow-btn">
                    Download APK
                  </a>
                </div>
                <div className="glass-card rounded-2xl border border-white/10 p-4">
                  <h3 className="font-semibold text-white text-sm mb-3">Quick Links</h3>
                  <div className="space-y-2">
                    {[
                      { href: "/games/teen-patti", label: "Teen Patti Game Rules" },
                      { href: "/bonuses/welcome-bonus", label: "Welcome Bonus ₨5,000" },
                      { href: "/bonuses/daily-rewards", label: "Daily Login Chips" },
                      { href: "/games/dragon-vs-tiger", label: "Dragon vs Tiger Guide" },
                      { href: "/blog/tips-and-tricks", label: "Advanced Tips & Tricks" },
                    ].map((l) => (
                      <Link key={l.href} href={l.href} className="block text-sm text-white/60 hover:text-yellow-400 transition-colors py-1 border-b border-white/5 last:border-0">
                        → {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
