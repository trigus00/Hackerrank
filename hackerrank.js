// console.log('Hello world ')
function compareTriplets(a, b) {
    let aSum = 0;
    let bSum = 0;
    let total = []; 
    // Write your code here
    for(let i = 0; i < a.length & i<b.length ; i++){
        if(a[i]>b[i]){
            aSum+=1;
        }
        if(b[i]>a[i]){
            bSum+=1
        }
    }
    total.push(aSum,bSum)
   console.log(total)
}   

compareTriplets([5, 6, 7],[3,6,10]);