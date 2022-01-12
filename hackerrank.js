// console.log('Hello world ')


function miniMaxSum(arr) {
    let max = 0;
    let min = 0;
    let total = 0;
    
    max = Math.max(...arr)
    min = Math.min(...arr)

    arr.reduce((previouseValue, currentValue) => total = currentValue + previouseValue, 0)
    max = total - max;
    min = total - min;
    console.log(max, min)

}
miniMaxSum([256741038, 623958417, 467905213, 714532089, 938071625])
// let total = [1,2,3,4,5].reduce((previouseValue,currentValue)=>currentValue+previouseValue,0)
// console.log(total)