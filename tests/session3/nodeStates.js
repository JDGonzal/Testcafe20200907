import {Selector} from 'testcafe';

fixture `NODE STATES`
.page `https://demoqa.com/text-box`

test
.skip
('Checked State', async t =>{
    console.log('---------------------------------');
    console.log('Checked State');

    //Var Declaration
    const itemToBeClicked = Selector('#item-1');
    const testCheckBoxSpan = Selector('.rct-checkbox');
    const testCheckBoxElement = Selector('#tree-node-home');

    await t
    .click(itemToBeClicked)
    .wait(5000)

    //Getting the checkbox status
    let unCheckedNodeStatus = await testCheckBoxElement.checked;
    console.log('Node Status: "' + unCheckedNodeStatus+ '"');

    //Clicking on the Checkbox Span
    await t
    .click(testCheckBoxSpan)
    .wait(5000);

    let checkedNodeStatus = await testCheckBoxElement.checked;
    console.log('Node Status: "' + checkedNodeStatus + '"');
})

test
.skip
('Get Classes', async t =>{
    console.log('---------------------------------');
    console.log('Get Classes');

    //Var Declaration
    const itemToBeClicked = Selector('#item-1');
    const arrowToggleButton = Selector('.rct-collapse');

    await t
    .click(itemToBeClicked)
    .wait(5000)

    let classesContained = await arrowToggleButton.classNames;
    console.log('Class contained: "' + classesContained + '"');
    console.log(classesContained);
})

test
.skip
('Get Inner Text', async t =>{
    console.log('---------------------------------');
    console.log('Get Inner Text');

    //Var Declaration
    const itemToBeClicked = Selector('#item-1');
    const homeFolderElement = Selector('.rct-title');

    await t
    .click(itemToBeClicked)
    .wait(5000)

    let text = await homeFolderElement.innerText;
    console.log('Text from the elmement: "' + text + '"');

})

test

('Get Style', async t =>{
    console.log('---------------------------------');
    console.log('Get Style');

    //Var Declaration
    const itemToBeClicked = Selector('#item-1');
    const iconElement = Selector('.rct-icon-parent-close');

    await t
    .click(itemToBeClicked)
    .wait(5000)

    let iconStyleObject = await iconElement.getStyleProperty('color');
    console.log('Icon Color: "' + iconStyleObject + '"');

})
