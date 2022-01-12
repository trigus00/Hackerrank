// console.log('Hello world ')
let hh = '';
let h12 = '';
let h24  = ''

function timeConversion(s) {
    // Write your code here
    let AmPm = s.slice(-2)
    let time = s.slice(0,-2).split(":");
    if(AmPm === 'AM' && time[0] == '12'){
        time[00] = '00'
        console.log('here')
    }else if(AmPm == 'PM'){
        console.log(time[0]%12)
        time[0] = (time[0]%12)+12 
    }
    console.log(time.join(':'))
   
    // console.log(typeof AmPm)
}
timeConversion('07:05:45PM')