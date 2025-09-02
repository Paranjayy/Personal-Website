import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: SITE_INFO.name,
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    icons: [
      {
        src: "https://placehold.co/32x32/svg",
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any",
      },
      {
        src: "https://placehold.co/192x192/png",
        type: "image/png",
        sizes: "192x192",
        purpose: "any",
      },
      {
        src: "https://placehold.co/512x512/png",
        type: "image/png",
        sizes: "512x512",
        purpose: "any",
      },
      {
        src: "https://placehold.co/512x512/png",
        type: "image/png",
        sizes: "512x512",
        purpose: "maskable",
      },
    ],
    id: "/?utm_source=pwa",
    start_url: "/?utm_source=pwa",
    display: "standalone",
    scope: "/",
    screenshots: [
      {
        src: "https://placehold.co/440x956/png?text=Mobile+Dark",
        type: "image/webp",
        sizes: "440x956",
        form_factor: "narrow",
      },
      {
        src: "https://placehold.co/440x956/png?text=Mobile+Light",
        type: "image/webp",
        sizes: "440x956",
        form_factor: "narrow",
      },
      {
        src: "https://placehold.co/1920x1080/png?text=Desktop+Dark",
        type: "image/webp",
        sizes: "1920x1080",
        form_factor: "wide",
      },
      {
        src: "https://placehold.co/1920x1080/png?text=Desktop+Light",
        type: "image/webp",
        sizes: "1920x1080",
        form_factor: "wide",
      },
    ],
  };
}
