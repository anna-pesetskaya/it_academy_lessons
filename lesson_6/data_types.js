// 1. поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]
let array = [1, 2, 3, 4, 5, 6];
console.log(array.reverse()); // Теперь массив будет [6, 5, 4, 3, 2, 1]

let array2 = [6,5,4,3,2,1];
console.log(array2.reverse()); // Теперь массив будет [ 1, 2, 3, 4, 5, 6 ]

// 2. найти максимальное значение числа в массиве ([3,67,15...])
let numbers = [3, 67, 15];
const getMax = (a, b) => Math.max(a, b);
const max = numbers.reduce(getMax);
console.log(max);


// 3. записать в массив ряд фибоначчи начиная с N члена с длинной массива M
const n = 8;
const m = 7;
 
let f_array_n = [];
 
let f_temp = [];
for (let i = 0; i < n + m; i ++) {
    switch(i) {
        case 0:
        case 1:
            f_temp.push(i);
            break;
        default:
            f_temp.push(f_temp[i - 2] + f_temp[i - 1]);
            break;
    }
}
 
for (let i = n; i < n + m; i++ ) {
    f_array_n.push(f_temp[i]);
}
 
console.log(f_array_n);


//4. даны 2 4-х значных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 )
const n1 = 3487; 
const n2 = 3794;
 
let arr_n1 = Array.from(n1.toString(), Number); // число n1 в массив
let arr_n2 = Array.from(n2.toString(), Number); // число n2 в массив
 
let sameValueAndPosition = 0;
let sameValueOnly = 0;
 
for (let k of arr_n1) {
  if (arr_n1.indexOf(k) === arr_n2.indexOf(k)) {
    sameValueAndPosition++;
  } 
}

for (let k of arr_n1) {
  if (arr_n1.indexOf(k) !== arr_n2.indexOf(k) && arr_n2.includes(k)) {
    sameValueOnly++;
  }
}
console.log(sameValueAndPosition);
console.log(sameValueOnly);


//5. сортировка массива по возрастанию/убыванию
let arr = [8, 1, 5];
let arrAfterSorting = [...arr];
console.log(arr.sort((a, b) => a - b)); // Сортировка по возрастанию
console.log(arr.sort((a, b) => b - a)); // Сортировка по убыванию


//6. удалить из массива все повторяющиеся элементы
const numbers2 = [1, 2, 3, 2, 1];
let uniqueNumbers = [];
numbers2.forEach((element) => {
    if (!uniqueNumbers.includes(element)) {
      uniqueNumbers.push(element);
    }
});
console.log(uniqueNumbers);