import {Selector} from 'testcafe';

//Param function syntax
const elementWithId = Selector(id => {
    return document.getElementById(id);
});

//options.dependency syntax
const persistentId = 'item-3';

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

    console.log('Header String: "' + headerString+ '"');
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

    console.log('Header String: "' + headerString+ '"');    
});

test
.skip
('Option.Dependency selector example', async t => {
    console.log('---------------------------------');
    console.log('Option.Dependency selector example');

    await t
    .click(webElement)
    .wait(5000)

    const headerSelector = Selector('.main-header');
    const headerString = await headerSelector.innerText;

    console.log('Header String: "' + headerString+ '"');    
});

test
.skip
('Child selector example', async t => {
    console.log('---------------------------------');
    console.log('Child selector example');

    //Selector to get the first child element
    const webTableLi = Selector('ul').child(3);

    await t
    //to click on Checkbox
    .click(webTableLi)
    .wait(5000)

    const headerSelector = Selector('.main-header');
    const headerString = await headerSelector.innerText;

    console.log('Header String: "' + headerString+ '"');    
});

test
.skip
('Count & Click selector example', async t => {
    console.log('---------------------------------');
    console.log('Count & Click selector example');


    await t
    //to click on Checkbox
    .click(elementWithId('item-1'))
    //to expand the option
    .click('#tree-node > ol > li > span > button')
    .wait(5000)

    const checkboxSelector = Selector('ol li .rct-node-collapsed span label .rct-checkbox');
    const counter = await checkboxSelector.count;

    console.log('Checkbox found: ' + counter);

    for(let i=0; i< counter; i++){
        await t
        .click(checkboxSelector.nth(i));
    }

    await t
    .wait(5000)

    const textDisplayedSelector = Selector('#result');
    const result = await textDisplayedSelector.innerText;

    console.log(result);    
});

test
.skip
('With Attribute selector example', async t => {
    console.log('---------------------------------');
    console.log('With Attribute selector example');

    //Selector to get the first child element
    const webTableLi = Selector('#item-3');

    await t
    .click(webTableLi)
    .wait(5000)

    const elementByAttrSelector = Selector('button').withAttribute('id','addNewRecordButton');
    
    await t
    .click(elementByAttrSelector)
    .wait(5000)

    const headerSelector = Selector('#registration-form-modal');
    const headerString = await headerSelector.innerText;

    console.log('Header String: "' + headerString+ '"');    
});

test

('With Exact selector example', async t => {
    console.log('---------------------------------');
    console.log('With Exact selector example');

    //Selector to get the first child element
    const webTableLi = Selector('#item-3');

    await t
    .click(webTableLi)
    .wait(5000)

    const elementByAttrSelector = Selector('button').withExactText('Add');
    
    await t
    .click(elementByAttrSelector)
    .wait(5000)

    const headerSelector = Selector('#registration-form-modal');
    const headerString = await headerSelector.innerText;

    console.log('Header String: "' + headerString+ '"');    
});
