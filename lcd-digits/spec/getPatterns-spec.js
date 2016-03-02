describe('get digits patterns', function() {
  it('should return a patterns array', function() {
    expect(getPattern([1,0])).toEqual([['...', '..|', '..|'], ['._.', '|.|', '|_|']]);
  })
});
