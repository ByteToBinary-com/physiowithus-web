import { MetadataRoute } from "next";

export const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  const envBaseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL;

  if (!envBaseUrl) {
    throw new Error(
      "Base site URL is not set. Please define NEXT_PUBLIC_SITE_URL or SITE_URL in the environment."
    );
  }

  const baseUrl = envBaseUrl.replace(/\/+$/, "");

  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified,
    },
  ];
}
