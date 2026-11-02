import { chromium } from "playwright-core";
import fs from "fs";

const exe = "C:\\Users\\renep\\AppData\\Local\\ms-playwright\\chromium-1169\\chrome-win\\chrome.exe";
const url = "https://luojingbin419.github.io/portfolio/";

const browser = await chromium.launch({ executablePath: exe, args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("console", (m) => {
  if (m.type() === "error") errors.push(m.text());
});
page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
const failed = [];
page.on("requestfailed", (r) => failed.push(r.url() + " :: " + (r.failure()?.errorText ?? "")));

const resp = await page.goto(url, { waitUntil: "load", timeout: 60000 });
console.log("HTTP:", resp.status());

await page.waitForTimeout(3000);
const title = await page.title();
console.log("TITLE:", title);

const checks = ["罗景彬", "SELECTED WORK", "精选项目", "个人经历", "个人优势"];
for (const t of checks) {
  const n = await page.locator(`text=${t}`).count();
  console.log((n > 0 ? "OK   " : "MISS ") + t);
}

const imgs = await page.evaluate(() =>
  Array.from(document.images).map((i) => ({
    src: i.currentSrc || i.src,
    w: i.naturalWidth,
    h: i.naturalHeight
  }))
);
console.log("IMAGES:");
imgs.forEach((i) => console.log(`  ${i.w}x${i.h}  ${i.src.split("/").pop()}`));

const links = await page.evaluate(() =>
  Array.from(document.querySelectorAll("#work a[href]")).map((a) => a.getAttribute("href"))
);
console.log("WORK LINKS:", JSON.stringify(links));

fs.mkdirSync("shots", { recursive: true });
await page.screenshot({ path: "shots/live-home.png" });
await page.evaluate(() => document.querySelector("#work")?.scrollIntoView());
await page.waitForTimeout(1500);
await page.screenshot({ path: "shots/live-work.png" });

console.log("FAILED REQUESTS:", failed.length ? failed.join(" | ") : "none");
console.log("CONSOLE ERRORS:", errors.length ? errors.slice(0, 3).join(" | ") : "none");
await browser.close();
console.log("DONE");
