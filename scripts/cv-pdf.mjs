// Genera los PDF descargables del CV a partir de las páginas ya compiladas en dist/.
// Uso: pnpm run cv:pdf  (vuelve a ejecutarlo cada vez que cambies cv.json o cv.en.json)
import { preview } from "astro";
import { chromium } from "playwright-core";

const PDFS = [
	{ path: "/cv/", file: "public/kevin-jimenez-cv.pdf" },
	{ path: "/cv-en/", file: "public/kevin-jimenez-resume.pdf" },
];

const server = await preview({ server: { port: 4390 }, logLevel: "error" });
// CHROME permite usar un Chrome concreto; si no, Playwright usa el que tenga descargado
const browser = await chromium.launch({ executablePath: process.env.CHROME || undefined });

try {
	for (const { path, file } of PDFS) {
		const page = await browser.newPage();
		await page.goto(`http://localhost:4390${path}`, { waitUntil: "networkidle" });
		await page.evaluate(() => document.fonts.ready);
		await page.pdf({ path: file, format: "A4", printBackground: true, preferCSSPageSize: true });
		console.log(`✓ ${file}`);
	}
} finally {
	await browser.close();
	await server.stop();
}
