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