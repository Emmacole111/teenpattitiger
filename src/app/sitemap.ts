import { MetadataRoute } from "next";
import { siteConfig, blogPosts, oldVersions } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/teen-patti-tiger-apk-download`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/games`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/games/teen-patti`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/games/dragon-vs-tiger`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/games/slots`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/bonuses`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/bonuses/welcome-bonus`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/bonuses/daily-rewards`, lastModified: now, changeFrequency: "daily", priority: 0.7 },
    { url: `${baseUrl}/old-versions`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/teen-patti-tiger-for-pc`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const versionPages: MetadataRoute.Sitemap = oldVersions.map((v) => ({
    url: `${baseUrl}/old-versions/${v.slug}`,
    lastModified: new Date(v.releaseDate),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticPages, ...blogPages, ...versionPages];
}
