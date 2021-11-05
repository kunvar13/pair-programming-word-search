const transpose = function(matrix) {
  const newArr = [];
  // const element = matrix[i]

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

module.exports = transpose();