const {Given, When, Then} = require('@wdio/cucumber-framework');

Given('I am in the {string} home page', async (page) => {
    await browser.url(`https://www.newegg.com/${page}`);
    await browser.pause(5000);
});


When('I need entry the word "Windows" in the search bar', async (page) => {

});

Then('I close the promo banner if it appears', async () => {
    const modalElement = await $('#modal-Website');

    await modalElement.waitForExist({timeout: 5000});

    const bannerCloseButton = modalElement.$('.modal-dialog.modal-dialog-centered > div > button');

    await browser.pause(5000);

    await bannerCloseButton.click();

    await expect(modalElement).not.toBeExisting();

    // const conditions = $('#\33 51e4cb6-009a-40e9-8970-61cd97b43d59 > div.osano-cm-dialog__buttons.osano-cm-buttons > button.osano-cm-accept-all.osano-cm-buttons__button.osano-cm-button.osano-cm-button--type_accept');
    // await conditions.click();
    //
    // await browser.pause(5000);
});