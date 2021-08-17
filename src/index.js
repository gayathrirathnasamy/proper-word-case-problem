//If proper word return true else false
//Proper word conditions: all lowerCase or all upperCase or title cas

const properWord = (word) => {
  let lowerCount = 0;
  let upperCount = 0;
  let loopWord =
    word.charAt(0) === word.toUpperCase().charAt(0) ? word.slice(1) : word;
  let lowerWord = loopWord.toLowerCase();
  let upperWord = loopWord.toUpperCase();
  for (let i = 0; i < loopWord.length; i++) {
    if (loopWord[i] === lowerWord[i]) {
      lowerCount++;
    } else if (loopWord[i] === upperWord[i]) {
      upperCount++;
    }
  }
  if (lowerCount === loopWord.length || upperCount === loopWord.length) {
    return true;
  } else {
    return false;
  }
};

console.log(properWord("Draw"));
