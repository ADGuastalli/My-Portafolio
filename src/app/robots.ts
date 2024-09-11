import Sitemap from "./sitemap";

export default function Robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://porfolio-guastalli-alexis.vercel.app/sitemap.ts",
  };
}
