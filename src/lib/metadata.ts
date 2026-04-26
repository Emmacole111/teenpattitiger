import type { Metadata } from "next";
import { siteConfig } from "./siteConfig";

interface MetaOptions {
  title?: string;
  /** When true, `title` is used as the full document title (no `| ${siteConfig.name}` suffix). Use for the homepage. */
  absoluteTitle?: boolean;
  description?: string;
  keywords?: string[];
  image?: string;
  path?: string;
  noIndex?: boolean;
}

const ogImage = (image: string) => ({
  url: image,
  width: 1200,
  height: 630,
  alt: siteConfig.name,
});

export function generateMeta({
  title,
  absoluteTitle = false,
  description,
  keywords = [],
  image = siteConfig.defaultOgImage,
  path = "",
  noIndex = false,
}: MetaOptions = {}): Metadata {
  const fullTitle = title
    ? absoluteTitle
      ? title
      : `${title} | ${siteConfig.name}`
    : `${siteConfig.name} - Download Latest APK for Pakistan`;
  const metaDesc = description || siteConfig.description;
  const url = `${siteConfig.url}${path}`;
  const allKeywords = [...siteConfig.keywords, ...keywords].join(", ");

  return {
    /* Absolute title prevents double-appending when parent layout has no title.template */
    title: { absolute: fullTitle },
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
      images: [ogImage(image)],
      locale: "en_PK",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDesc,
      images: [image],
    },
  };
}

export function generateArticleMeta(
  post: {
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    image?: string;
    author: string;
    category: string;
  },
  opts?: { metaTitle?: string; metaDescription?: string; keywords?: string[] }
): Metadata {
  const pageTitle = opts?.metaTitle ?? post.title;
  const pageDesc = opts?.metaDescription ?? post.excerpt;
  const image = post.image ?? siteConfig.defaultOgImage;
  const base = generateMeta({
    title: pageTitle,
    description: pageDesc,
    path: `/blog/${post.slug}`,
    image,
    keywords: [
      ...(opts?.keywords ?? []),
      post.category,
      "Teen Patti Tiger blog",
      "Teen Patti guide Pakistan",
    ],
  });

  const fullTitle = `${pageTitle} | ${siteConfig.name}`;

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      title: fullTitle,
      description: pageDesc,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [ogImage(image)],
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      locale: "en_PK",
    },
  };
}
