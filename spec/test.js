const puppeteer = require('puppeteer');

const pageUrl = 'http://localhost:3004/';

let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

afterAll(() => {
  browser.close();
});

describe('bedroom counter', () => {

  beforeEach(async () => {
    await page.goto(pageUrl, {waitUntil: 'networkidle2'});
  });

  test('Button to open bedrooms counter intially says "Bedrooms"', async () => {
     const buttonText = await page.$eval('#bedrooms-btn', e => e.textContent);
     expect(buttonText).toEqual('Bedrooms');
  });
});