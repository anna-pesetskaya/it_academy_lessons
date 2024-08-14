// Сложение string+boolean (true или false)
const flag = new Boolean();
console.log("Hello" + flag); // Выведет "Hellofalse"

console.log("Hello" + (+ true)); // Выведет "Hello1", так как true преобразуется в строку "1"

// Сложение string+number
console.log("Hello" + 5); // Выведет "Hello5", так как число преобразуется в строку

// Сложение number+boolean
console.log(5 + true); // Выведет 6, так как true преобразуется в 1 перед сложением

// Умножение string * boolean
console.log("Hello"  *  true); // Выведет NaN

// Умножение string * number
console.log("Hello"  *  5); // Выведет NaN

// Умножение number * boolean
console.log(5  *  true); // Выведет 5, так как true преобразуется в 1 перед умножением 

// Деление string/boolean
console.log("Hello" / true); // Выведет NaN

// Деление string/number
console.log("Hello" / 5); // Выведет NaN

// Деление number/Boolean
console.log(5 / true); // Выведет 5, так как true преобразуется в 1 перед делением

// Явное преобразование number
const str1 = '5'
const num1 = Number(str1); // Преобразует строку "5" в число 5
console.log(num1)

// Явное преобразование string
const num = 5
const str2 = String(num); // Преобразует число 5 в строку "5"
console.log(str2)

// Явное преобразование boolean
let str = "true";
let result = Boolean(str);
console.log(result);// true