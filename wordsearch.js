const wordSearch = (letters, word) => {
  let horResult = false;
  let verResult = false;
/***************************************************************/
  const transpose = function(matrix) {
    const newArr = [];
  
    const arraySize = matrix.length;
    for (let f = 0; f < arraySize; f++) {
      newArr.push([]);
    }
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        newArr[j].push(matrix[i][j]);
      }
    }
    return newArr;
  };
/**************************************************************/
  const horizontalJoin = letters.map(ls => ls.join(''));
  console.log(horizontalJoin);
  for (let l of horizontalJoin) {
    console.log(l);
    if (l.includes(word)) {
      //storing the horizontal result
      horResult = true;
    }
  }
  
  let verticalJoin = transpose(letters);
  verticalJoin = letters.map(ls => ls.join(''));
  console.log(verticalJoin);
  for (let l of verticalJoin) {
    console.log(l);
    if (l.includes(word)) {
      //storing the vertical result
      verResult = true;
    }
  }

  if (horResult === true || verResult === true) {
    return true;
  } else {
    return false;
  }


};

module.exports = wordSearch;