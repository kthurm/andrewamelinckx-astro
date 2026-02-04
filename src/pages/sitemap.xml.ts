import type { APIRoute } from "astro";

const SITE = "https://www.andrewamelinckx.com";

export const GET: APIRoute = async () => {
  const pages = ["", "books", "bio", "events", "press"];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${SITE}/${page}</loc>
  </url>
`,
  )
  .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
