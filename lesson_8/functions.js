//1. Дана строка из четного количества цифр. 
//Проверьте, что сумма первой половины цифр равняется сумме второй половине цифр. 
///Если это так - выведите 'да', в противном случае выведите 'нет'.

function checkHalfSum(n) {   

    let arr_n = Array.from(n.toString(), Number); 

    if (arr_n.length % 2 != 0) {
        console.log("Строка должна содержать четное количество цифр")
        return false; 
    }
    const firstHalf = arr_n.slice(0, arr_n.length/2);
    const secondHalf = arr_n.slice(arr_n.length/2, arr_n.length);

    let sumFirstHalf = 0;
    let sumSecondHalf = 0;

    firstHalf.map((item) => sumFirstHalf += item);
    secondHalf.map((item) => sumSecondHalf += item);


   return sumFirstHalf === sumSecondHalf ? 'да' : 'нет'; 
}
console.log(checkHalfSum(1122))


//2. Дано число n=1000 (может быть заданное любое число). Делите его на 2 столько раз, 
//пока результат деления не станет меньше 50 (может быть любое заданное число). 
//Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), 
//и запишите его в переменную num.

function divideByTwoUntilLowestTarget(n, target) {
    let num = 0; 

    while (n >= target) {
        n = Math.floor(n / 2);
        num++; 
    }

    return {
        newNumber: n,
        iterations: num
    };
}

const result = divideByTwoUntilLowestTarget(1005, 20);
console.log(`Полученное число: ${result.newNumber}`);
console.log(`Количество итераций: ${result.iterations}`);

//3. Дан массив arr. Найдите среднее арифметическое его элементов. 
//Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
function findAverage(arr){
    if(arr.length === 0)
        return 0;
 
    let sum = 0;
 
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    } 
    return sum / arr.length;
}
let k = [12, 15, 20, 25, 59, 79];
console.log(findAverage(k));

//4. Напишите функцию, которая вставит данные в массив с заданного места в массиве. 
//Дан массив [1, 2, 3, 4, 5]. Сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

function insertElementsIntoArray(array, elements, startIndex) {
    // Проверяем, что индекс вставки находится в пределах допустимого
    if (startIndex < 0 || startIndex > array.length) {
        console.log("Индекс вставки больше, чем само число")
        return false; 
    }

    const newArray = [...array];

    for (let i = 0; i < elements.length; i++) {
        newArray.splice(startIndex + i, 0, elements[i]);
    }

    return newArray;
}

const givenArray = [1, 2, 3, 4, 5];
const newArray = insertElementsIntoArray(givenArray, ['a', 'b', 'c'], 3);
console.log(newArray); 

//5. Напишите функцию, которая вставит данные в массив в заданные несколько мест в массиве. 
//Дан массив [1, 2, 3, 4, 5]. Сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
function insertElementsIntoArrayAtMultiplePositions(array, elements, positions) {
      const newArray = [...array];

    positions.forEach((position, index) => {
        newArray.splice(position, 0, elements[index]);
    });

    return newArray;
}

// Пример использования функции
const givenArray2 = [1, 2, 3, 4, 5];
const elements = ['a', 'b', 'c', 'e'];
const positions = [1, 3, 6, 8];
const newArray2 = insertElementsIntoArrayAtMultiplePositions(givenArray2, elements, positions);
console.log(newArray2); // Выведет: [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']


//6. Дан массив [3, 4, 1, 2, 7. 30. 50]. Отсортируйте его.
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

const arr = [3, 4, 1, 2, 7, 30, 50];
console.log(sortArray(arr)); 