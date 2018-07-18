const expect = require('expect');

const { generateMessage } = require('./message');

describe('GenerateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'Mike';
    let text = 'Hello there!';
    let message = generateMessage(from, text);

    expect(message).toInclude({ from, text });
    expect(typeof message.createdAt).toBe('number');
  });
});