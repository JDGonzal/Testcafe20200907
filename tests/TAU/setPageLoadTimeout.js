fixture('Set page timeout Fixture')
.page('https://devexpress.github.io/testcafe/example/')

test('Set page timeout Test', async t => {
    await t
    .setPageLoadTimeout(0)
    .navigateTo("http://www.google.com");
})