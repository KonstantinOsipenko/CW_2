console.warn('exercise one')
let userNumber = prompt('Enter numbers from 0 to 100');
let myNumber = Math.floor(Math.random() * 101);
userNumber = Number (userNumber);
console.log(userNumber ==  myNumber);

console.warn('exercise two')
array = ['beer' , 'boobs' , 'rock&roll']
console.table(array);
console.time(1);
console.log(array.length)
console.timeEnd(1);
console.info('info');

console.warn('exercise three')
let firstGuestNumber = prompt('Enter any numbers');
 firstGuestNumber = Number (firstGuestNumber);
 let secondGuestNumber = prompt('One more number');
 secondGuestNumber = Number (secondGuestNumber);
 let thirdGuestNumber = prompt('Well, one more thing, this is the last, I promise');
 thirdGuestNumber = Number (thirdGuestNumber);
 let mathAverage = (firstGuestNumber + secondGuestNumber + thirdGuestNumber) / 3;
  console.log('Average your number entered ' + mathAverage);
 
 console.warn('exercise four')
 let newNumber = prompt('Enter numbers separated by commas');
 let newArray = [];
 newArray = newNumber.split(",")
 let average = 0;
 newArray.forEach((element) => { 
   average= average + Number (element)
 });
   average = average / newArray.length
 console.log('Average your number entered ' + average)

console.warn('exercise five')
let userBirthYear = prompt ('enter your year of birth');
let nowYear = 2020;
let  userAge = nowYear - userBirthYear
console.log ('You ' + userAge + ' year ?' )





