const puppeteer = require('puppeteer');

const pageUrl = 'http://localhost:3004/';

let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

afterAll(() => {
  browser.close();
});

describe('Bedroom Count Component', () => {
  beforeEach(async () => {
    await page.goto(pageUrl, { waitUntil: 'networkidle2' });
  });

  test('Button to open bedrooms counter intially says "Bedrooms"', async () => {
    const buttonText = await page.$eval('#bedrooms-btn', e => e.textContent);
    expect(buttonText).toEqual('Bedrooms');
  });

  test('Clicking Bedrooms button opens bedroom count modal and initial count is 1+', async () => {
    await page.click('#bedrooms-btn');
    await page.waitForSelector('#bed-count');
    const bedroomCount = await page.$eval('#bed-count', e => e.textContent);
    expect(bedroomCount).toEqual('1+');
  });

  test('Clicking Bedrooms button opens bedroom count modal and sets the button class to ', async () => {
    await page.click('#bedrooms-btn');
    await page.waitForSelector('#bed-count');
    const bedroomCount = await page.$eval('#bed-count', e => e.textContent);
    expect(bedroomCount).toEqual('1+');
  });

  test('Clicking the Plus and Minus buttons change the bed count correctly', async () => {
    await page.click('#bedrooms-btn');
    await page.waitForSelector('#bed-count');
    await page.click('#increase-btn');
    await page.click('#increase-btn');
    await page.click('#decrease-btn');
    const bedroomCount = await page.$eval('#bed-count', e => e.textContent);
    expect(bedroomCount).toEqual('2+');
  });

  test('Clicking Minus button does not set count lower than 1', async () => {
    await page.click('#bedrooms-btn');
    await page.waitForSelector('#bed-count');
    await page.click('#increase-btn');
    await page.click('#decrease-btn');
    await page.click('#decrease-btn');
    await page.click('#increase-btn');
    const bedroomCount = await page.$eval('#bed-count', e => e.textContent);
    expect(bedroomCount).toEqual('2+');
  });
});

describe('Price Slider Component', () => {
  beforeEach(async () => {
    await page.goto(pageUrl, { waitUntil: 'networkidle2' });
  });

  test('Button to open price slider intially says "Price"', async () => {
    const buttonText = await page.$eval('#price-btn', e => e.textContent);
    expect(buttonText).toEqual('Price');
  });
});

describe('Home Type Component', () => {
  beforeEach(async () => {
    await page.goto(pageUrl, { waitUntil: 'networkidle2' });
  });

  test('Button to open home type selector intially says "Home Type"', async () => {
    const buttonText = await page.$eval('#home-type-btn', e => e.textContent);
    expect(buttonText).toEqual('Home Type');
  });
});

describe('Instant Book Component', () => {
  beforeEach(async () => {
    await page.goto(pageUrl, { waitUntil: 'networkidle2' });
  });

  test('Button to open instant book selector intially says "Instant Book"', async () => {
    const buttonText = await page.$eval('#instant-book-btn', e => e.textContent);
    expect(buttonText).toEqual('Instant Book');
  });
});
