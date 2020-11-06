fixture("First Fixture")
.page("https://devexpress.github.io/testcafe/example/")
.beforeEach(async t =>{
    await t
    .maximizeWindow()
    .setTestSpeed(0.1)
    .setPageLoadTimeout(0);
});

test("First Test", async t => {
    await t 
        .typeText("#developer-name", "TAU")
        .click("#macos")
        .click("#submit-button");

});