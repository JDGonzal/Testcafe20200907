import {Selector} from 'testcafe';

const interfaceSelect = Selector ('select#preferred-interface');
const interfaceOption = interfaceSelect.find('option');

fixture("Select element from Dropdownlist")
.page("https://devexpress.github.io/testcafe/example/");

test("Select element DropdownList test", async t=> {
    await t
    .click(interfaceSelect)
    .click(interfaceOption.withText('Both'));
})