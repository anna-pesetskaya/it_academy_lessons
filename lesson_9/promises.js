// Решить используя промисы и async/await. Сделайте 3 промиса, в каждом из которых расположена функция setTimeout 
//со случайной задержкой от 1 до 5 секунд. Пусть первый промис возвращает число 1, 
//второе - число 2, третий - число 3.
//С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.
async function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


function delayPromise(value) {
    return new Promise((res) => {
      const timeout = getRandomInt(1, 5) *  1000;
      setTimeout(() => res(value), timeout);
    });
  }

  const promise1 = delayPromise(1);
  const promise2 = delayPromise(2);
  const promise3 = delayPromise(3);

  Promise.race([promise1, promise2, promise3]).then(result => {
    console.log(result);
  });


///Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. 
//Создайте async функцию, которая с помощью await будет дожидаться результата getNum, 
//затем возводить его в квадрат и выводить на экран.


function getNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNumber = getRandomInt(1 , 5);
            resolve(randomNumber); 
        }, 3000); 
    });
}

async function getPowNumber() {
    try {
        const number = await getNumber(); 
        console.log(`Квадрат числа ${number}: ${number  *  number}`);
    } catch (error) {
        console.error('Ошибка при получении числа:', error);
    }
}

getPowNumber();


// //Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет 
// //случайное число от 1 до 5. Используйте также функцию getNum, чтобы вернуть промис, который с задержкой в 5 секунд 
// ///выведет случайное число от 6 до 10. Создайте async функцию, которая с помощью await будет дожидаться 
// //результата функции, затем будет дожидаться результата второй функции,
// //а затем найдет сумму полученных чисел и выводит на экран.

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function getNum() {
    return delay(3000).then(() => getRandomInt(1, 5));
  }

  function getNum2() {
    return delay(5000).then(() => getRandomInt(6, 9));
  }

  async function sumNumbers() {
    const num1 = await getNum();
    const num2 = await getNum2();
    console.log(`Сумма чисел: ${num1 + num2}`);
  }

  sumNumbers(); 