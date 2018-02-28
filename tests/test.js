var helpers = require('../database/helpers.js')

test('shows attributes', () => {
    expect(helpers.fetchItem(() => {
        console.log(item)
    }));
});