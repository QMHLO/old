import fs from "fs";
import path from "path";
import { test } from "@playwright/test";

async function navigatePages(links: string[], page: any) {
  test.setTimeout(200000000);
  let okUrlCount: number = 0;
  let errorUrlCount: number = 0;
  const errorPages: any = [];
  const okPages: any = [];

  for (const link of links) {
    try {
      const response: any = await page.goto(link);

      if (response !== null) {
        if (response.status() === 400 || response.status() === 401 || response.status() === 403 || response.status() === 404 || response.status() === 408 || response.status() === 429 || response.status() === 500 || response.status() === 502 || response.status() === 503 || response.status() === 504) {
          errorPages.push(link);
          errorUrlCount++;
          console.error(` Page not found at URL: ${link}`);
        } else {
          const currentUrl = await page.url();
          const hasH1Tag = await page.$("h1");
          if (hasH1Tag !== null) {
            console.log("h1 includes");
            okPages.push(currentUrl);
            okUrlCount++;
          } else {
            console.log("h1 not includes");
            errorPages.push(currentUrl);
            errorUrlCount++;
          }
          console.info(`OK URL: ${currentUrl}`);
        }
      }
    } catch (error) {
      console.error("An error occurred. Please connect using a VPN.");
      break;
    }
  }

  return {
    okUrlCount,
    errorUrlCount,
    errorPages,
    okPages,
  };
}

function getDate() {
  const now: Date = new Date();
  const formattedDate: string = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  const formattedTime: string = `${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;
  return {
    formattedDate,
    formattedTime,
  };
}

function writeReport(reportPath: any, okUrlCount: number, errorUrlCount: number, okPages: any, errorPages: any) {
  const totalPagesCount: number = okUrlCount + errorUrlCount;
  const { formattedDate, formattedTime } = getDate();
  const timeFormat = formattedTime.replace(/-/g, ":");
  const reportContent: string = `
# Website Analysis Report
### **Report Generated On:** ${formattedDate}  ${timeFormat}
---
### Summary:
- Total Pages: [ ${totalPagesCount} ]
- Error Pages: [ ${errorUrlCount} ]
- OK Pages: [ ${okUrlCount} ]
---
### Error Pages:
${errorPages.map((url: any) => `- ${url}`).join("\n")}
---
### OK Pages:
${okPages.map((url: any) => `- ${url}`).join("\n")}
  `;
  fs.writeFileSync(reportPath, reportContent);

  console.log(`Report written to: ${reportPath}`);
}

function readFileData() {
  const filePath = "data/staging.txt";
  const data = fs.readFileSync(filePath, "utf8");
  const links: string[] = data.split("\n");
  const fileContentArray: string[] = links.map((link) => link.trim());
  return fileContentArray;
}

async function checkUrlsExistence(page: any): Promise<void> {
  const data: any = readFileData();

  const { okUrlCount, errorUrlCount, errorPages, okPages } = await navigatePages(data, page);

  const reportFolder: string = "report";
  const { formattedDate, formattedTime } = getDate();
  const reportFileName: string = `report-${formattedDate}-${formattedTime}.md`;

  if (!fs.existsSync(reportFolder)) {
    fs.mkdirSync(reportFolder);
  }
  const reportPath: any = path.join(reportFolder, reportFileName);
  writeReport(reportPath, okUrlCount, errorUrlCount, okPages, errorPages);
}

test("check existence of URLs", async ({ page }) => {
  await checkUrlsExistence(page);
});
