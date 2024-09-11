import Sitemap from "./sitemap";

export default function Robots() {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: "/dashboad",
      },
    ],
    sitemap: Sitemap(),
  };
}
