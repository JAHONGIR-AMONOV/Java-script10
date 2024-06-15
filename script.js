// let arr = ['Alex', 'John', 'Jorge', 'Jasmina', 'faya', 'Amina']

// let callBack = (name) => name.length % 2 === 0

// console.log(
//     arr.filter(callBack)
// );

// let num = [1, 2, 3, 4, 5]

// let total = 0
// num.filter((num) => total = total + num)

// console.log(total);


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even = numbers.filter(number => number % 2 === 0);
let odd = numbers.filter(number => number % 2 !== 0);

console.log("even", even);

console.log("odd", odd);