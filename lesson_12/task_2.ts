// //2. Создайте интерфейсы для ролей User и Admin, после этого создайте интерйфейc Person, который будет соответствовать массиву

// // type Person = unknown;

// // const persons: User[] = [
// //     {
// //         name: 'Max Mustermann',
// //         age: 25,
// //         occupation: 'Chimney sweep'
// //     },
// //     {
// //         name: 'Jane Doe',
// //         age: 32,
// //         role: 'Administrator'
// //     },
// //     {
// //         name: 'Kate Müller',
// //         age: 23,
// //         occupation: 'Astronaut'
// //     },
// //     {
// //         name: 'Bruce Willis',
// //         age: 64,
// //         role: 'World saver'
// //     }
// // ];

// interface User {
//     name: string;
//     age: number;
//     occupation: string;
// }
  
// interface Admin {
//     role: string;
// }

// type Person = {
//     id: number; 
//     name: string;
//     age: number;
//     role?: string;
//     occupation?: string; 
// };

// const persons: Person[] = [
// {
//     id: 1,
//     name: 'Max Mustermann',
//     age: 25,
//     occupation: 'Chimney sweep'
// },
// {
//     id: 2,
//     name: 'Jane Doe',
//     age: 32,
//     role: 'Administrator'
// },
// {
//     id: 3,
//     name: 'Kate Müller',
//     age: 23,
//     occupation: 'Astronaut'
// },
// {
//     id: 4,
//     name: 'Bruce Willis',
//     age: 64,
//     role: 'World saver'
// }
// ];

// // Проверка типа массива
// console.log(persons); // Выведет массив объектов, соответствующих интерфейсу Person