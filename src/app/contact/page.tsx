import { Mail, MessageSquare, Clock } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { siteConfig } from "@/lib/siteConfig";
import { generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "Contact Us – Teen Patti Tiger APK",
  description:
    "Contact Teen Patti Tiger APK support team. Get help with downloads, installation, bonuses, and more. We respond within 24 hours.",
  path: "/contact",
  keywords: [
    "Teen Patti Tiger contact",
    "Teen Patti Tiger support",
    "APK download help Pakistan",
  ],
});

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Contact", href: "/contact" }]} />

        <div className="mt-8">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="text-white/60 mb-12">
            Have a question or issue? Reach out to our support team. We&apos;re here to help.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Mail, title: "Email Us", desc: siteConfig.contact.email, color: "text-yellow-400" },
              { icon: Clock, title: "Response Time", desc: "Within 24 hours", color: "text-green-400" },
              { icon: MessageSquare, title: "Language Support", desc: "English & Urdu", color: "text-blue-400" },
            ].map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="glass-card rounded-2xl border border-white/10 p-6 text-center">
                <Icon className={`w-8 h-8 ${color} mx-auto mb-3`} />
                <h3 className="font-bold text-white mb-1 text-sm">{title}</h3>
                <p className="text-xs text-white/60">{desc}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-3xl border border-white/10 p-8">
            <h2 className="text-2xl font-black text-white mb-6">Send Us a Message</h2>
            <form className="space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-white/80 mb-2">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Ahmad Raza"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-yellow-400/50 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-white/80 mb-2">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-yellow-400/50 transition-colors text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-white/80 mb-2">
                  Subject
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0a1a] border border-white/10 text-white focus:border-yellow-400/50 transition-colors text-sm"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a topic...
                  </option>
                  <option value="download">Download Issue</option>
                  <option value="installation">Installation Problem</option>
                  <option value="bonus">Bonus/Rewards Query</option>
                  <option value="account">Account Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-white/80 mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Describe your issue or question in detail..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-yellow-400/50 transition-colors text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-sm hover:scale-[1.02] transition-all glow-btn"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
