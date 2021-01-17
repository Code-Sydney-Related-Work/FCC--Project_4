const { TestScheduler } = require('jest');
const telephoneCheck = require('./telephone_valid');
describe('telephoneCheck', () => {
    test('it should validate telephone number', () => {
        expect(telephoneCheck("25-555-5555")).toEqual(false);
        expect(telephoneCheck("1 555-555-5555")).toEqual(true);
        expect(telephoneCheck("555-555-5555")).toEqual(true);
    });
});