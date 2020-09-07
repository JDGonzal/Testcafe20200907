fixture `firsttest`
//    .page `https://demoqa.com/text-box`;

test
    .page `http://devexpress.github.io/testcafe/blog/`
    ('My test', async t => {
        console.log("Test cafe Site");
    });
test
    .page `https://demoqa.com/text-box`
    ('My test', async t => {
        console.log("Demo QA Site");
    });