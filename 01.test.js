/* global page */

describe('signin page', () => {
    beforeAll(async () => {
        await page.goto('https://www.google.com/');
    });

    it('first render', async () => {
        await page.waitForSelector('[name="q"]');
        const input = await page.$('[name="q"]')
        await input.focus();
        await page.keyboard.type('search');

        const value = await page.evaluate(el => el.value, input);
        expect(value).toBe('search');

        await page.waitForXPath('//*[@id="tsf"]/div[2]/div[1]/div[1]/div/div[3]/div[1]/span[1]');
        const [clear] = await page.$x('//*[@id="tsf"]/div[2]/div[1]/div[1]/div/div[3]/div[1]/span[1]');
        await clear.click();

        const value2 = await page.evaluate(el => el.value, input);
        expect(value2).toBe('');
    });
});
