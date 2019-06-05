const {sum,} = require('../app');

test('It will add two nums', done => {
    expect(sum(1,2)).toBe(3);
    done();
});