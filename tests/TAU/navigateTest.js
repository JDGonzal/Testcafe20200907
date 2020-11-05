fixture('Navigate Example')
.page('https://devexpress.github.io/testcafe/example/')

test('Navigate test', async t => {
    await t
    .navigateTo("http://www.google.com");
})