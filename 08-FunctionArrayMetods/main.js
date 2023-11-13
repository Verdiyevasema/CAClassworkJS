//TASK 1:
// console.log(findFirstNotRepeatedChar('abacddbecz'));
// findFirstNotRepeatedChar adlı bir function yaradın. Bu function göndərdiyiniz string-in ilk təkrarlanmayan
// hərfini qaytarsın. Nəticə =====>> "e"

// function findFirstNotRepeatedChar(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
//       result = str[i];
//       break;
//     }
//   }
//   return result;
// }
// console.log(findFirstNotRepeatedChar("abacddbecz"));

//TASK 2:
// console.log(charCount('w3rescource.com', 'c'));
// charCount adlı function yaradın. Bu function 2 ədəd argument qəbul edir. 2-ci göndərdiyiniz hərf 1-cinin içərisində
// neçə dəfə təkrarlanıbsa onun sayısını göstərin.
// Nəticə: 3.

// function charCount(str, letter) {
//   var letterCount = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       letterCount++;
//     }
//   }
//   return letterCount;
// }

// console.log(charCount("w3rescource.com", "c"));

//TASK 3:
// console.log(makeId(8));
// makeId adlı function yaradın. Bu function qəbul etdiyi rəqəm uzunluğunda random ID verməlidir.
// Məsələn =====>> 4SGqCfrz
// var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// function makeId(length) {
//   let text = "";
//   let charList =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   for (let i = 0; i < length; i++) {
//     text += charList.charAt(Math.floor(Math.random() * charList.length));
//   }

//   return text;
// }

// console.log(makeId(8));
