import { Selector, t, ClientFunction} from 'testcafe';

fixture('Assertion API')
.page('https://demoqa.com/elements');

const getWindowLocation = ClientFunction(() => window.location);

test('Deep Equal ', async t => {

    await t.expect(Selector('.header-wrapper').count).eql(6, "Accordion Items Count", { timeout: 2000 });

});

test('NOT Deep Equal ', async t => {

    await t.expect(Selector('.header-wrapper').count).notEql(5, "Accordion Items Count", { timeout: 2000 });

});

test('Ok ', async t => {

    await t.click('#item-0');
    await t.expect(Selector('#submit').exists).ok('This test will validate if the "submit" button exist');

});

test('Not Ok ', async t => {

    await t.expect(Selector('#submit').exists).notOk('This test will validate if the "submit" button exist');

});

test('Contains ', async t => {

    const getLocation = ClientFunction(() => document.location.href.toString());

    //await t.click('#item-0');
    await t.expect(getLocation()).contains('https://demoqa.com/elements');

});