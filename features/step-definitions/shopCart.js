
const { Given, When, Then } = require('@wdio/cucumber-framework');

//searchItems

Given("An user is on Newegg page", async () => {
    await browser.url(`https://www.newegg.com/`);
});

When("An user types Swtich in the search bar and clicks search button", async () => {
    const searchBar = await $('input[title*="Search Site"]'); 
    const searchButton = await $('button.ico.ico-search');
    await searchBar.setValue('Switch');
    await searchButton.click();

    await expect(searchBar).toHaveValue('Switch');
});

Then("Switch items are displayed", async () => {
    const searchResult2 = await $('.item-cells-wrap.border-cells.items-grid-view.four-cells.expulsion-one-cell');
    await expect(searchResult2).toHaveChildren( { gte: 5 } );
});

Then("the names of the first five items contain Switch", async () => {
    const searchResult2 = await $('.item-cells-wrap.border-cells.items-grid-view.four-cells.expulsion-one-cell');
    await expect(searchResult2).toHaveTextContaining('Switch');
});

//closeCookiesBanner

When("the cookies banner showes up", async () => {
    const cookiesBanner = await $('//*[@id="95b9a7f3-8396-4cf7-9a2f-630344a8c85e"]');
    await cookiesBanner.isExisting();
});

Then("Click on Accept All", async () => {
    const acceptAll = await $('.osano-cm-accept-all.osano-cm-buttons__button.osano-cm-button.osano-cm-button--type_accept');
    await acceptAll.click();
});


//itemPage

When("An user clicks on View Details button of the first item", async () => {
    const firstItem = await $('.item-cells-wrap.border-cells.items-grid-view.four-cells.expulsion-one-cell .item-cell:nth-child(2)').$('.item-container').$('button*=View');
    await firstItem.click();
});

Then("An user is navigated to the item page", async () => {
    await expect(browser).toHaveTitle('Nintendo Switch Console with Neon Blue and Neon Red Joy-Con - Newegg.com');
});
