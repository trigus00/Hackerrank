// console.log('Hello world ')
function diagonalDifference(arr) {
    // Write your code here
   
        // Write your code here
        let right = 0 ;
        let left = 0 
        for (let i = 0 ; i< arr.length;i++){
            for(let j = 0; j < arr.length;j++){
               if(i===j){
                    right+= arr[i][j]
               }
               if( i+j == arr.length -1 ) {
                   left += arr[i][j]
               }
               
            }
            
        }
        // console.log(arr)
        console.log(Math.abs(right-left))
    }


diagonalDifference([[11, 2, 4],[4, 5, 6], [10, 8, -12]])

