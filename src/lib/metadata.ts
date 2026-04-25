import type { Metadata } from "next";
import { siteConfig } from "./siteConfig";

interface MetaOptions {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  path?: string;
  noIndex?: boolean;
}

export function generateMeta({
  title,
  description,
  keywords = [],
  image = "/images/og-default.jpg",
  path = "",
  noIndex = false,
}: MetaOptions = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} - Download Latest APK for Pakistan`;
  const metaDesc = description || siteConfig.description;
  const url = `${siteConfig.url}${path}`;
  const allKeywords = [...siteConfig.keywords, ...keywords].join(", ");

  return {
    title: fullTitle,
    description: metaDesc,
    keywords: allKeywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description: metaDesc,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: "en_PK",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDesc,
      images: [image],
      creator: "@teenpattitiger",
    },
  };
}

export function generateArticleMeta(post: {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  image?: string;
  author: string;
  category: string;
}): Metadata {
  return {
    ...generateMeta({
      title: post.title,
      description: post.excerpt,
      path: `/blog/${post.slug}`,
      image: post.image,
      keywords: [post.category, "Teen Patti Tiger blog", "Teen Patti guide Pakistan"],
    }),
    openGraph: {
      type: "article",
      title: `${post.title} | ${siteConfig.name}`,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [
        {
          url: post.image || "/images/og-default.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      locale: "en_PK",
    },
  };
}
