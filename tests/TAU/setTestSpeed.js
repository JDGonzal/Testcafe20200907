fixture("Speed Test Fixture")
.page("https://devexpress.github.io/testcafe/example/");

test("Set test Speed Test", async t => {
    await t 
        .setTestSpeed(0.1)
        .typeText("#developer-name", "TAU")
        .click("#macos")
        .click("#submit-button");
});