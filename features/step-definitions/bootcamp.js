const {Given, When, Then} = require('@wdio/cucumber-framework');

const browserDelay = 2000;
const bannerAppearanceTimeout = 5000;

Given('I am at the home page', async () => {
    await browser.url(`https://www.newegg.com`);
});

Given("I've closed the promo banner if it appeared", async () => {
    try {
        const modalElement = await $('#modal-Website');

        await modalElement.waitForExist({timeout: bannerAppearanceTimeout});

        const bannerCloseButton = modalElement.$('.modal-dialog.modal-dialog-centered > div > button');

        await browser.pause(browserDelay);

        await bannerCloseButton.click();

    } catch (error) {
        console.log('No modal element @ Promo Banner When');
    }
});

When('I enter the word {string} in the search bar and click the search', async (searchKey) => {
    const searchSiteInput = $('input[type="search"]');
    await searchSiteInput.click();

    await browser.keys(searchKey);
    await browser.pause(browserDelay);

    const searchButton = $('.ico-search');
    await searchButton.click();
});

Then('Check that at least {int} item appears', async (searchResultsCount) => {
    const searchResults = $$('.item-cell');

    await browser.pause(browserDelay);

    await expect(searchResults).toBeElementsArrayOfSize({gte: searchResultsCount});
});

When('I open {string} tab', async (tabName) => {
    const bestDealsTabLink = $(`a[title="${tabName}"] > span`);

    await bestDealsTabLink.click();
});

Then('I click on the Internet shop logo', async () => {
    const shopLogo = $('a.header2021-logo-img > img');

    await shopLogo.click();
});

Then('I should see the main page', async () => {
    expect(browser).toHaveUrl('https://www.newegg.com/');
});
