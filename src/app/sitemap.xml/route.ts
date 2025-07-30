import { allPosts } from "contentlayer/generated";
import { MetadataRoute } from "next";

export async function GET(): Promise<MetadataRoute.Sitemap> {
  // Map posts to sitemap items
  const urls = allPosts.map((post: { url: string; date: string }) => ({
    url: `https://yoursikkimblog.com${post.url}`,
    lastModified: post.date,
  }));

  // Add homepage with a lastModified date
  urls.push({
    url: "https://yoursikkimblog.com",
    lastModified: new Date().toISOString(), // or use your site build time
  });

  return urls;
}
