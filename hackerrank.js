// console.log('Hello world ')


function birthdayCakeCandles(candles) {
    // Write your code here
    let max = 0;
    let count = 0 

    for(let i = 0; i < candles.length; i++){
        if(candles[i] > max){
            max = candles[i];
        }
    }
    for(let j = 0; j < candles.length; j++){
        if(candles[j] === max){
            count ++
        }
    }
console.log(count)
}

birthdayCakeCandles([18,90,90,13,90,75,90,8,90,43])
// 13,90,75,90,8,90,43