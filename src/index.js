module.exports = function towelSort (matrix) {
  const matrixContainer = [];
  if (!Array.isArray(matrix) || matrix.length === 0) {
      return [];
  } 
        for (i = 0; i < matrix.length; i++) {
              if (i % 2 == 0) {
                  for (j = 0; j < matrix[i].length; j++) {
                  matrixContainer.push(matrix[i][j]);
                  } 
              }
              else {
                  for (j = matrix[i].length-1; j  >= 0; j--) {
                      matrixContainer.push(matrix[i][j]);
                  }
              }
        }
      return matrixContainer;
}
