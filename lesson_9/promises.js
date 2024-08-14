// Решить используя промисы и async/await. Сделайте 3 промиса, в каждом из которых расположена функция setTimeout 
//со случайной задержкой от 1 до 5 секунд. Пусть первый промис возвращает число 1, 
//второе - число 2, третий - число 3.
//С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.
async function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getPromisArray() {
  let promiseArray = [];

  for (let i=0; i < 3; i++) {
      promiseArray.push(new Promise((resolve) => {
          setTimeout(() => resolve(i + 1), getRandomMilisec());
      }))
  }
  return promiseArray;
}

Promise.race(getPromisArray()).then((data) => console.log('The first resolved promise is:', data));


///Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. 
//Создайте async функцию, которая с помощью await будет дожидаться результата getNum, 
//затем возводить его в квадрат и выводить на экран.


function getNum(min, max, delay) {
  return new Promise((resolve) => setTimeout(() => {
      resolve(Math.floor(Math.random() * (max - min + 1)) + min);
  }, delay * 1000));
}

async function getSquareNum(min, max, delay) {
  const number = await getNum(min, max, delay);
  return number ** 2;
}

getSquareNum(1, 5, 3).then(data => console.log(`The getNum square is: ${data}`));


// //Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет 
// //случайное число от 1 до 5. Используйте также функцию getNum, чтобы вернуть промис, который с задержкой в 5 секунд 
// ///выведет случайное число от 6 до 10. Создайте async функцию, которая с помощью await будет дожидаться 
// //результата функции, затем будет дожидаться результата второй функции,
// //а затем найдет сумму полученных чисел и выводит на экран.

async function getSumOfNums() {
  const number1 = await getNum(1, 5, 3);
  const number2 = await getNum(6, 10, 5);
  return number1 + number2;
}

getSumOfNums().then(data => console.log(`The sum of promise's numbers is: ${data}`));
