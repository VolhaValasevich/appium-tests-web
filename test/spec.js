const BASE_URL = 'https://www.onliner.by/';
const DISABLE_NOTIFICATIONS = 'div.push-notification__close';
const ITEM_UNDERLAY = 'a.header-style__underlay';
const MENU_HEADER = 'div.header-style__title';

describe('Onliner.by', () => {

    beforeAll(() => {
        browser.get(BASE_URL);
        element(by.css(DISABLE_NOTIFICATIONS)).click();
    });

    it('must have correct title', () => {
        expect(browser.getTitle()).toEqual('Onliner.by');
    });

    it('must have an item underlay', async () => {
        const items = await element.all(by.css(ITEM_UNDERLAY));
        expect(items.length).toEqual(1);
    });

    it('must have a correct menu header', async () => {
        await element(by.css(ITEM_UNDERLAY)).click();
        const text = await element(by.css(MENU_HEADER)).getText();
        expect(text).toEqual('Onliner');
    });
});