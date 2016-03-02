describe('display the text', function () {

  var patternsInOrder = ["... ._.", "..| |.|", "..| |_|"];

  var text = '... ._.\n' +
    '..| |.|\n' +
    '..| |_|\n';

  it('should display the LCD patterns', function () {
    expect(display(patternsInOrder)).toEqual(text);
  })
});
