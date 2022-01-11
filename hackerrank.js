// console.log('Hello world ')
function aVeryBigSum(ar) {
    let sum = 0;
    // Write your code here
    for(let i = 0; i < ar.length ; i++){
        // console.log(ar[i])
        sum = sum + ar[i]
    }
    console.log(sum)
}


aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005])