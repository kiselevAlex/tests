/* global page */

describe('signin page', () => {
    beforeAll(async () => {
        await page.goto('https://www.google.com/');
    });

    it('first render', async () => {
        await page.waitForSelector('[name="q"]');
        await page.focus('[name="q"]');
        await page.keyboard.type('search');
        await page.waitForXPath('//*[@id="tsf"]/div[2]/div[1]/div[1]/div/div[3]/div[1]/span[1]');
        await page.click('[name="q"]', { clickCount: 3 });
        await page.keyboard.type('');
    });
});
