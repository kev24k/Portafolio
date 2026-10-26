import type { APIRoute } from "astro";

// Páginas públicas del sitio (la 404 queda fuera a propósito)
const PAGES = ["/", "/cv/", "/cv-en/"];

export const GET: APIRoute = ({ site }) => {
	const urls = PAGES.map((path) => `  <url><loc>${new URL(path, site)}</loc></url>`).join("\n");
	return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
		headers: { "Content-Type": "application/xml" },
	});
};
