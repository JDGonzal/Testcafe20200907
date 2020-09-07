import {Selector} from 'testcafe';

//Param function syntax
const elementWithId = Selector(id => {
    return document.getElementById(id);
});

//options.dependency syntax
const persitentId = 'item-3';

const webElement = Selector(() =>{
    return document.getElementById(persitentId);
}, {
    dependencies: {persitentId}
});

fixture `SELECTOR_SESSION`
.page `https://demoqa.com/text-box`

test
.skip
('Single Selector Example', async t =>{
    console.log('---------------------------------');
    console.log('Single Selector Example');

    //Slector to get first child element
    const webTable1 = Selector('#item-3');

    await t
    .click(webTable1)
    .wait(5000)

    const headerSelector = Selector('.main-header');
    const headerString = await headerSelector.innerText;

    console.log('Header String: "' + headerString)+ '"';
})

test
.skip
('Function parameter selector example', async t => {
    console.log('---------------------------------');
    console.log('Function parameter selector Example');

    await t
    .click(elementWithId('item-3'))
    .wait(5000)

    const headerSelector = Selector('.main-header');
    const headerString = await headerSelector.innerText;

    console.log('Header String: "' + headerString)+ '"';    
});

test

('Option.Dependency selector example', async t => {
    console.log('---------------------------------');
    console.log('Option.Dependency selector example');

    await t
    .click(webElement)
    .wait(5000)

    const headerSelector = Selector('.main-header');
    const headerString = await headerSelector.innerText;

    console.log('Header String: "' + headerString)+ '"';    
});

test
.skip
('Child selector example', async t => {
    console.log('---------------------------------');
    console.log('Child selector example');

    await t
    .click(webElement)
    .wait(5000)

    const headerSelector = Selector('.main-header');
    const headerString = await headerSelector.innerText;

    console.log('Header String: "' + headerString)+ '"';    
});
