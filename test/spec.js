const BASE_URL = 'https://www.onliner.by/';

describe('Onliner.by', () => {

    beforeAll(() => {
        browser.get(BASE_URL);
        element(by.css('div.push-notification__close')).click();
    });

    beforeEach(() => {
        browser.get(BASE_URL);
    });

    it('must open catalog', () => {
        element(by.css('a.header-style__underlay')).click();
        element(by.linkText("Каталог")).click();
        expect(browser.getTitle()).toEqual('Каталог Onliner.by');
    });

    it('must open tech news', () => {
        element(by.css('a.header-style__underlay')).click();
        element(by.linkText("Новости")).click();
        element(by.linkText("Технологии")).click();
        expect(browser.getTitle()).toEqual('Технологии onliner.by');
    });

});