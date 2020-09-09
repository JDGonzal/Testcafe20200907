import { Selector } from 'testcafe';

//param function syntax
const elementWithId = Selector(Id => {
    return document.getElementById(Id)
});

//options.dependency syntax
const persistentId = 'item-3';

const element = Selector(() =>{
    return document.getElementById(persistentId);  
},{
    dependencies: { persistentId }
});

fixture  `Selector Session`
.page `https://demoqa.com/text-box`

test
.skip
('Single selector example', async t => {
    console.log('.......................');
    console.log('Single selector example');

    //Selector to get the first child element
   const webTableLi = Selector('#item-3');
    await t
    .click(webTableLi)
    .wait(5000)

    const headerSelector = Selector('.main-header');
    const heaserString = await headerSelector.innerText;

    console.log('Header String: '+ heaserString );
});

test
.skip
('Function parameter selector example ', async t => {
    console.log('...................................');
    console.log('Function parameter selector example');

    await t
    .click(elementWithId('item-3'))
    .wait(5000)

    const headerSelector = Selector('.main-header');
    const heaserString = await headerSelector.innerText;

    console.log('Header String: '+ heaserString );
})

test
.skip
('Options.Dependency selector example', async t => {
    console.log('...................................');
    console.log('Options.Dependency selector example');
    
    await t
    .click(element)
    .wait(5000)

    const headerSelector = Selector('.main-header');
    const heaserString = await headerSelector.innerText;
});

test
.skip
('Child selector example', async t => {
    console.log('......................');
    console.log('Child selector example');

    //Selector to get the first child element
    const checkboxchildren = Selector('ul').child(3);

    await t
    .click(checkboxchildren)
    .wait(5000)
    
    const headerSelector = Selector('.main-header');
    const heaserString = await headerSelector.innerText;
})

test
.skip
('Count & click selector example', async t => {
    console.log('..............................');
    console.log('Count & Click selector example');

    await t
    //To click on CheckBox
    .click(elementWithId('item-1'))
    //To expand the options
    .click('#tree-node > ol > li > span > button')
    .wait (5000)

    const checkboxSelector = Selector('ol li .rct-node-collapsed span label .rct-checkbox')
    const counter =  await checkboxSelector.count;

    console.log('Checkboxs found: ' + counter);

    for (let i=0; i< counter; i++){
        await t
        .click(checkboxSelector.nth(i));
    }
    await t
    .wait

    const textDisplayedSelector = Selector('#result')
    const result = await textDisplayedSelector.innerText
    console.log(result)
});

test 
('With Atribute Selector', async t => {
    console.log('..............................');
    console.log('With Atribute Selector example');

    //Selector to get the first child element
    const webTableLi = Selector('#item-3');

    await t
    .click(webTableLi)
    .wait(5000)

    const elementBySelector = Selector('button').withAttribute('id', 'addNewRecordButton')

    await t
    .click(elementBySelector)
    .wait(5000)

    const headerSelector = Selector('#registration-form-modal');
    const headerString = await headerSelector.innerText;

    console.log('Header String: ' + headerString);
});