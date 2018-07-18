const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('GenerateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'Mike';
    let text = 'Hello there!';
    let message = generateMessage(from, text);

    expect(message).toInclude({ from, text });
    expect(typeof message.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    let from = 'Mike';
    let latitude = 30;
    let longitude = -97;
    let url = 'https://www.google.com/maps?q=30,-97'

    let message = generateLocationMessage(from, latitude, longitude);

    expect(message).toInclude({
      from,
      url
    });
    expect(message.createdAt).toBeA('number');
  });
});