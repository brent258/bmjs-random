const expect = require('chai').expect;
const random = require('../index');

describe('random', () => {

  it('should return a string from multiple strings', () => {
    let result = random('foo','bar','baz');
    expect(result).to.be.a('string');
  });

  it('should return a number from multiple numbers', () => {
    let result = random(1,2,3);
    expect(result).to.be.a('number');
  });

  it('should return undefined with no arguments', () => {
    let result = random();
    expect(result).to.be.undefined;
  });

});
