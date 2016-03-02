function split(number) {
  var digits =  number.toString().split('');
  return digits.map(function(digit) {
    return parseInt(digit);
  })
}
