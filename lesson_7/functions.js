
// Написать функцию которая будет эмулировать игру в кубики, заданное количество игроков по очереди бросают кубик, 
//каждый в итоге бросает одинаковое количество раз (должно работать с любым количеством раз заданным в переменной). 
//У кого сумма набранная будет наибольшей - тот выиграл. Если суммы равны то ничья. Выведите результаты в консоль
function playGame(players, throws) {
    const results = {};

    for (let i = 0; i < players.length; i++) {
       
        let player = players[i];
        let totalPlayerResults = 0;
        for (let j = 0; j < throws; j++) {
            totalPlayerResults += Math.floor(Math.random()*6+1);
        }
        results[player] = totalPlayerResults;
    }

    let gameWinner = null;
    let maxTotal = 0;
    for (let player in results) {
        if (results[player] > maxTotal) {
            maxTotal = results[player];
            gameWinner = player;
            
        } else if (results[player] === maxTotal && gameWinner !== player) {
            gameWinner = 'Ничья';
        }
    }
    console.log(`The winner is ${gameWinner}`);
    return results;
}

// Пример использования функции
const players = ['Player 1', 'Player 2', 'Player 3', 'Player 4'];
const throws = 5;
const gameResults = playGame(players, throws);
console.log(gameResults);

///2.  Написать функцию которая будет разбивать число на заданное количество рандомных чисел сумма которых 
///будет равна изначальному числу. Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15) (4,6,5)
//Ваш код должен работать с любым числом заданным в переменной (не только с 15) 
//и с любым количеством частей на которые надо разбить число..


//а. числа изначальное число целое, числа разбивки - целые (4,6,5)
function findSummonds(number, parts) {
    let summonds = []
    sumCurrent = 0;
    for (let i = 0; i < parts; i ++) { 
        if (i == parts - 1) {
            summonds.push(number - sumCurrent);
        }
        else {
            summonds.push(Math.floor(Math.random() * (number - sumCurrent)));
            sumCurrent += summonds[summonds.length - 1];
        }
    }
    return summonds;
}

const number = 400;
const parts = 8;

let result = findSummonds(number, parts);
console.log(result);

//б. числа разбивки дробные с 2 знаками после запятой 4.55, 5.20, 5.25)
function splitNumber(number, parts) {
    let summonds = []
    sumCurrent = 0;
    for (let i = 0; i < parts; i ++) { 
        if (i == parts - 1) {
            summonds.push(parseFloat((number - sumCurrent).toFixed(2)));
        }
        else {
            summonds.push(
                Math.floor(Math.random() * (number - sumCurrent - 1))
            + parseFloat(Math.random().toFixed(2))
            );
            sumCurrent += summonds[summonds.length - 1];
        }
    }
    return summonds;
}

const number2 = 100;
const parts2 = 3;
 
let result2 = splitNumber(number2, parts2);
console.log(result2);


//3. Написать функцию которая подсчитывает количество Пятниц 13-ого с любой заданной даты в прошлом до сегодня. 
//Ваш код должен иметь возможность считать количество дней на любую заданую в переменной первоначальную дату и 
//считать верно через 10-15-20 лет 
function countFridays13(startDate) {
    const start = new Date(startDate);
    const today = new Date();
    let fridays13Count = 0;

    while (start <= today) {
        if (start.getDay() === 5 && start.getDate() === 13) {
            fridays13Count++;
        }
        start.setDate(start.getDate() + 1);
    }

    return fridays13Count;
}

// Пример использования функции
const initialDate = '2000-01-01'; // Дата в формате YYYY-MM-DD
console.log(`Количество пятниц 13-го с ${initialDate}:`, countFridays13(initialDate));