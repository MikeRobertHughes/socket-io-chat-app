const expect = require('expect');

const { isRealString } = require('./validation');

//isRealString
//it should reject nonstring values
//should reject string with only spaces
// should allow strings with non-space characters

describe('isRealString', () => {
  it('should reject nonstring values', () => {
    let res = isRealString(3);

    expect(res).toBe(false);
  });

  it('should reject string with only spaces', () => {
    let res = isRealString('   ');

    expect(res).toBe(false);
  });

  it('should allow strings with non-space characters', () => {
    let res = isRealString('  test string  ');

    expect(res).toBe(true);
  });
});
