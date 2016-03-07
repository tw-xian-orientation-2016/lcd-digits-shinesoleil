function split(number) {
  var digits = number.toString().split('');
  return digits.map(function (digit) {
    return parseInt(digit);
  })
}

var dictionary = {
  0: ['._.', '|.|', '|_|'],
  1: ['...', '..|', '..|'],
  2: ['._.', '._|', '|_.'],
  3: ['._.', '._|', '._|'],
  4: ['...', '|_|', '..|'],
  5: ['._.', '|_.', '._|'],
  6: ['._.', '|_.', '|_|'],
  7: ['._.', '..|', '..|'],
  8: ['._.', '|_|', '|_|'],
  9: ['._.', '|_|', '..|']
};

function getPatterns(digits, dictionary) {
  return digits.map(function (digit) {
    return dictionary[digit];
  })
}

function concat(patterns) {
  var firstLine = '';
  var secondLine = '';
  var thirdLine = '';

  patterns.forEach(function (pattern) {
    firstLine += pattern[0] + ' ';
    secondLine += pattern[1] + ' ';
    thirdLine += pattern[2] + ' ';
  });

  firstLine = firstLine.slice(0, -1);
  secondLine = secondLine.slice(0, -1);
  thirdLine = thirdLine.slice(0, -1);

  return [firstLine, secondLine, thirdLine];
}

function display(orderedPatterns) {
  var text = '';
  orderedPatterns.forEach(function (orderedPattern) {
    text += orderedPattern;
    text += '\n';
  });

  console.log(text);
  return text;
}

function lcd(number) {
  var digits = split(number);
  var patterns = getPatterns(digits, dictionary);
  var patternsInOrder = concat(patterns);
  return display(patternsInOrder);
}


