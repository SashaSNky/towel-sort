
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  if (Array.isArray(matrix))
  {//console.log('dfdsfds',matrix, matrix.length);
    if (matrix.length===0) return res
      else 
        if (matrix.length===1) return matrix
        else 
         if (Array.isArray(matrix[0])) {
          res=res.concat(matrix[0]); 
     //     console.log(matrix[0]);
         for (let i=1; i<matrix.length;i++){
          // console.log(res);
          if (i%2===0) res=res.concat(matrix[i]) 
             else {
               res=res.concat(matrix[i].reverse())
             }
         }//for
        }//end if assArray
        else return matrix;
  }
  return res;
}