const wordSearch = (letters, word) => {
  console.log(letters);
  // checks for empty array
  if (letters.length === 0) {
    return false;
  }
  //
  if (horizontalSearch(letters, word)) {
    return true;
  // call transpose to flip matrix then run horizontal search again
  } else if (horizontalSearch(transpose(letters), word)) {
    return true;
  }

  return false;
};
// input 2d matrix of letters and word to search
// return whether word exists horizontally
const horizontalSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
};

// flips 2d array along x/y axis
const transpose = (letters) => {
  let flipped = [];
  for (let x = 0; x < letters[0].length; x++) {
    flipped.push([]);
    for (let y = 0; y < letters.length; y++) {
      flipped[x].push(letters[y][x]);
    }
  }
  return flipped;
};

//console.log(wordSearch([],' '));

module.exports = wordSearch;







