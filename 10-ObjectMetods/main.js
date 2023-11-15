// ---------------------------------------------------------- TASK 1 ----------------------------------------------------------
// const person = {
//     firstName: 'Michael',
//     lastName: 'Pam',
//     age: 26,
//     city: 'Poland'};
// 1. employees object-nin sadəcə key-lərini console-a çıxardın.
// 2. employees object-nin sadəcə value-lərini console-a çıxardın.
// 3. Aşağıdakı kimi console-a çıxardın.
//     [firstName: 'Michael']
//     [lastName: 'Pam']
//     [age:26]
//     [city: 'Poland']
// 4. object-in age propertysini silin.
// 5. Ən uzun string value-nu console-a çıxardın.

// let person = {
//   firstName: "Sema",
//   lastName: "Verdiyeva",
//   age: 19,
//   university: "GDU",
//   skills: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "Python",
//     "Python",
//     "Python",
//     "Python",
//     "Python",
//     "Python",
//     "Python",
//     "Python",
//     "Python",
//     "Python",
//     "Python",
//   ],
// };
// person.city = "Samkir";

// 1.1
// console.log(Object.keys(person));

// 1.2
// console.log(Object.values(person));

// 1.3
// console.log(Object.entries(person));

// 1.4
// delete person.age
// console.log(person);

//1.5
// let arr = Object.values(person);
// let lengthy = "";
// arr.forEach((item) => {
//   if (item.length > lengthy.length && typeof item === "string") {
//     lengthy = item;
//   }
// });
// console.log(lengthy);

//----------------------------------------------------------- TASK 2 ----------------------------------------------------------
// "library" adlı array yaradın. İçərisində title, author və readingStatus adlı key-ləri olan objectlər yaradın.
// Əgər readingStatus true olarsa console-a "Already read 'title' by author' Əgər false
// olarsa "You still need to read 'title' by author' yazsın
// Nəticə ====>>
// Already read 'The Road Ahead' by Bill Gates.
// Already read 'Walter Isaacson' by Steve Jobs.
// You still need to read 'Suzanne Collins' by Mockingjay: The Final Book.

// var library = [
//   {
//     title: "The Road Ahead",
//     author: "Bill Gates",
//     readingStatus: true,
//   },
//   {
//     title: "Walter Isaacson",
//     author: "Steve Jobs",
//     readingStatus: true,
//   },
//   {
//     title: "Suzanne Collins",
//     author: "Mockingjay: The Final Book",
//     readingStatus: false,
//   },
// ];

// library.forEach((item) => {
//   if (item.readingStatus === true) {
//     console.log(`Already read ${item.title} by ${item.author}`);
//   } else if (item.readingStatus === false) {
//     console.log(`You still need to read ${item.title} by ${item.author}`);
//   }
// });


