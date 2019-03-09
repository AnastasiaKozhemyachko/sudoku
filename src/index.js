module.exports = function solveSudoku(matrix) {

  var control = Array([9]);
  var controlFun = () => {
    for (var i = 1; i < 10; i++){
    	control[i] = false;
    }
  };

  var cols = (col) => {
    controlFun();
    for (var row = 0; row < 9; row++) {
      if (matrix[row][col] != 0) {
        if (control[matrix[row][col]]){ 
          return false;
        }
        else{
          control[matrix[row][col]] = true;
        }
      }
    }
    return true;
  }

  var rows = (row) => {
    controlFun();
    for (var col = 0; col < 9; col++) {
      if (matrix[row][col] != 0) {
        if (control[matrix[row][col]]){
        	return false;
        }
        else {
        	control[matrix[row][col]] = true;
        }
      }
    }
    return true;
  }

  var box = (rowBox, colBox) => {
    controlFun();
      for (var row = rowBox; row < rowBox+3; row++) {
        for (var col = colBox; col < colBox+3; col++) {
        if (matrix[row][col] != 0) {
          if (control[matrix[row][col]]){
          	return false;
          }
          else{
            control[matrix[row][col]] = true;
          }
        }
      }
    }
    return true;
  }

  var sud =(row, col) => {
    while (row < 9 && matrix[row][col] != 0) {
      col++;
      if (col == 9) {
        row++;
        col = 0;
      }
    }
    if (row == 9){
      return true;
    }
    for (var a = 1; a < 10; a++) {
      matrix[row][col] = a;
      if (rows(row) && cols(col) && box(row - row%3, col - col%3) && sud(row, col)){
      	return true;
      }
    }  
    matrix[row][col] = 0;
    return false;
  } 
  sud(0, 0);
  return matrix;
}