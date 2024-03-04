// Node modules
import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto("https://www.linkedin.com/in/eduardo-alvarez-nowak/");
  await page.waitForSelector(".contextual-sign-in-modal__screen");

  const name = await page.$eval("h1", (item) => item.textContent.trim());

  console.log(name);

  await browser.close();
})();
