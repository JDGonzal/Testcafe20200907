import {Selector } from 'testcafe'

const triedCheckBox = Selector('label').withText("I have tried TestCafe");
const slider = Selector('#slider');

fixture('Drag Fixture')
.page('https://devexpress.github.io/testcafe/example/')

test ('Drag Test', async t => {
    await t
    .click(triedCheckBox)
    .drag(slider, 360,0,{offsetX:10,offsetY:10})
})