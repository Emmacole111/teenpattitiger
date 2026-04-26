import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { breadcrumbSchema } from "@/lib/schemas";
import { siteConfig } from "@/lib/siteConfig";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const schemaItems = [
    { name: "Home", url: siteConfig.url },
    ...items.map((item) => ({
      name: item.label,
      url: item.href ? `${siteConfig.url}${item.href}` : siteConfig.url,
    })),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(schemaItems)),
        }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-white/50 flex-wrap">
        <Link
          href="/"
          className="flex items-center gap-1 hover:text-yellow-400 transition-colors"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        {items.map((item, idx) => (
          <span key={idx} className="flex items-center gap-1.5">
            <ChevronRight className="w-3 h-3" />
            {item.href && idx < items.length - 1 ? (
              <Link
                href={item.href}
                className="hover:text-yellow-400 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-white/80">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
