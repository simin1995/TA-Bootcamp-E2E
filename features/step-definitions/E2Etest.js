const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on Newegg page", async () => {
    await browser.url(`https://www.newegg.com/`);
});

 // search bar 

When("I type Windows in the search bar and click search button", async () => {
    const searchBar = await $('input[title*="Search Site"]'); 
    const searchButton = await $('button.ico.ico-search');
    await searchBar.setValue('Windows');
    await searchButton.click();

    await expect(searchBar).toHaveValue('Windows');
});

Then("Items are displayed", async () => {
    const searchResult = await $('.item-cells-wrap.border-cells.items-grid-view.four-cells.expulsion-one-cell');
    await expect(searchResult).toHaveChildren( { gte: 5 } );
});

// Today's Best Deals

When("I click on Today's Best Deals tab", async () => {
    const dealsTab = await $('#trendingBanner_720202'); 
    await dealsTab.click();
});

Then("I am navigated to Today's Best Deals page", async () => {
    await expect(browser).toHaveUrl(`https://www.newegg.com/todays-deals?cm_sp=Head_Navigation-_-Under_Search_Bar-_-Today%27s+Best+Deals&icid=720202`);
});

When("I click on shopping cart logo", async () => {
    const shopLogo = await $('.ico.ico-shopping-cart.header2021-nav-icon'); 
    await shopLogo.click();
});

Then("I am navigate to shopping cart page", async () => {
    await expect(browser).toHaveUrl(`https://secure.newegg.com/shop/cart`);
});


