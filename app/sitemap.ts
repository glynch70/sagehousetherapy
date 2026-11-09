import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sagehousetherapy.uk";
  return ["", "/about", "/therapies", "/fees", "/faqs", "/contact", "/book"].map(
    (path) => ({ url: base + path }),
  );
}
