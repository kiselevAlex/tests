/* global page */
import { Builder, By } from 'selenium-webdriver';

describe('signin page', () => {
    let driver = null;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://www.google.com/');
    });

    it('first render', async () => {
        const input = await driver.findElement(By.name('q'));
        await input.sendKeys('search');

        const value = await input.getAttribute('value');
        expect(value).toBe('search');

        await driver.findElement(By.xpath('//*[@id="tsf"]/div[2]/div[1]/div[1]/div/div[3]/div[1]/span[1]')).click();

        const value2 = await input.getAttribute('value');
        expect(value2).toBe('');
    });

    afterAll(async () => {
        driver.close()
    })
});
