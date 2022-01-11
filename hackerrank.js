// console.log('Hello world ')

function staircase(n) {
    // Write your code here
    let star = '#'
    for (let i = 0; i< n; i++){
        console.log(star.padStart(n))
        star = '#' + star

    }
}

staircase(6)