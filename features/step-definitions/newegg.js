const {Given, When, Then} = require('@wdio/cucumber-framework');

Given('I am at the home page', async () => {
    await browser.url(`https://www.newegg.com`);
    await browser.pause(2000);
});

When('I close the promo banner', async () => {
    try {
        const modalElement = await $('#modal-Website');

        await modalElement.waitForExist({timeout: 5000});

        const bannerCloseButton = modalElement.$('.modal-dialog.modal-dialog-centered > div > button');

        await browser.pause(5000);

        await bannerCloseButton.click();
    } catch (error) {
        console.log('No modal element @ Promo Banner When');
    }
});

Then('the promo banner should disappear', async () => {
    const modalElement = await $('#modal-Website');

    await expect(modalElement).not.toBeExisting();

});
When('I entry the word "Windows" in the search bar and click the search', async () => {
    const searchSite = $("input[type=\"search\"]");
    await searchSite.click();
    await browser.keys(['W', 'i', 'n', 'd', 'o', 'w', 's']);
    await browser.pause(5000);
    const searchButton =$("#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-search.auto-flex > form > div > div.header2021-search-button > button");
    await searchButton.click();

});

Then('Check that at least one item appears', async () => {
    const searchResult = $$("#item_cell_32-351-748_1_0 > div");

    await expect(searchResult).toBeElementsArrayOfSize(0);

});

/*Given('I am at the home page', async () => {
    await browser.url(`https://www.newegg.com`);
    await browser.pause(2000);
});

When('I close the promo banner', async () => {
    try {
        const modalElement = await $('#modal-Website');

        await modalElement.waitForExist({timeout: 5000});

        const bannerCloseButton = modalElement.$('.modal-dialog.modal-dialog-centered > div > button');

        await browser.pause(5000);

        await bannerCloseButton.click();
    } catch (error) {
        console.log('No modal element @ Promo Banner When');
    }
});

Then('the promo banner should disappear', async () => {
    const modalElement = await $('#modal-Website');

    await expect(modalElement).not.toBeExisting();

});

When('Open Best deal tab', async () => {
    const BestDealTab = $("#trendingBanner_720202 > span");
    await BestDealTab.click();

});

Then("Click on the Internet shop logo and check the main page opened", async () => {
    const ShopLogo = $("#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-logo > a > img");
    await expect ShopLogo.click();

});

