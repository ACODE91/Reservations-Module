

test('shows attributes', () => {
    expect(helpers.fetchItem(() => {
        console.log(item)
    }));
});