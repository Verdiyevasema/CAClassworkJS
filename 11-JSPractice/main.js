// TASK. arrayın içindəki müsbət ədədləri tapın
// let array = [2, 4, -3, 43, 41, -3];
// function findPositives(arr) {
//   arr.forEach((item) => {
//     if (item > 0) {
//     console.log(item);
//     }
//   });
// }
// console.log(findPositives(array));

// TASK. arrayın içindəki bütün hərfləri böyük olan elementin indexini tapın
// const webTechs = ["html", "CSS", "js", "REACT", "Redux", "Node", "MongDB"];
// let result = webTechs.findIndex((item) => item === item.toLocaleUpperCase());
// console.log(result);

// TASK. arrayın içindəki bütün hərfləri böyük olan elementləri başqa bir array şəklində return edin
// const webTechs2 = ["HTML", "CSS", "JS", "REACT", "Redux", "Node", "MongDB"];
// let result = webTechs2.filter((item) => item === item.toLocaleUpperCase());
// console.log(result);

//TASK. Reverse the Case
// Given a string, create a function called "reverseCase(str)" that to reverse the case.
//  All lower-cased letters should be upper-cased, and vice versa.

// function reverseCase(str) {
//   if (str === str.toLocaleUpperCase()) {
//     str.toLocaleLowerCase();
//   } else {
//     str.toLocaleUpperCase();
//   }
// }

// console.log(reverseCase("MANY THANKS")); //"many thanks"
// console.log(reverseCase("many thanks")); //"MANY THANKS"

//TASK
// const users = [
//   {
//     name: "Anar",
//     surname: "Hesenli",
//     age: "22",
//     uni: "ADA",
//     gender: "male",
//     salary: "3001",
//   },
//   {
//     name: "Nicat",
//     surname: "Sadiqov",
//     age: "25",
//     uni: "GDU",
//     gender: "male",
//     salary: "200",
//   },
//   {
//     name: "Nezrin",
//     surname: "Reshidova",
//     age: "23",
//     uni: "UNEC",
//     gender: "female",
//     salary: "300",
//   },
//   {
//     name: "Hikmet",
//     surname: "Hesenov",
//     age: "22",
//     uni: "UNEC",
//     gender: "male",
//     salary: "320",
//   },
//   {
//     name: "Murad",
//     surname: "Salmanli",
//     age: "23",
//     uni: "GDU",
//     gender: "male",
//     salary: "420",
//   },
//   {
//     name: "Aynure",
//     surname: "Hesenzade",
//     age: "23",
//     uni: "BMU",
//     gender: "female",
//     salary: "3210",
//   },
// ];

// TASK 2.1.Show users who is studying at 'UNEC' and surname starts 'r'.
// let filteredUni = users.filter((item) => {
//   return item.uni === "UNEC" && item.surname[0].toLocaleLowerCase() === "r";
// });
// console.log(filteredUni);
// TASK 2.2.Show users whose age is eqaul to 22 and name start 'a'.
// let agename = users.filter((item) => {
//   return item.age === 22 && item.name[0].toLocaleLowerCase() === "a";
// });
// console.log(agename);
// TASK 2.3.Return new array, if user is male add in front of name 'Mr', or Ms. (e.g. name:'Mr Anar', 'Ms Aynure').
// let user = users.map((item) => {
//   if (item.gender === "male") {
//     return { ...item, name: `Mr ${item.name}` };
//   } else {
//     return { ...item, name: `Mrs ${item.name}` };
//   }
// });
// console.log(user);

// let employees = [
//   {
//     email: "alex@alex.com",
//     skills: ["HTML", "CSS", "JavaScript"],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   {
//     email: "asab@asab.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Redux",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   {
//     email: "daniel@daniel.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   {
//     email: "daniel@alex.com",
//     skills: ["HTML", "CSS", "JavaScript", "Python"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   {
//     email: "john@john.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   {
//     email: "thomas@thomas.com",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   {
//     email: "paul@paul.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// ];
//TASK  Find the employee who has many skills in the employees object.
// console.log(employees.sort((a,b) => b.skills.length - a.skills.length[0]));
//TASK Random 1 den 10 a qeder reqem generate edin ve sonra arrayda hemin reqemin olub olmamasini yoxlayin
// let numArr = [1, 5, 7, 9];
// function checkRandomNumberInArray(array) {
//   let randomNumber = Math.floor(Math.random() * 10);

//   if (array.includes(randomNumber)) {
//     return `${randomNumber} number includes in [${array}]`;
//   } else {
//     return `${randomNumber} number does not includes in [${array}]`;
//   }
// }
