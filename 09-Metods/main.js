// -------------------------------------------- TASK 1 --------------------------------------------
// const text = "Java is awesome. Java is fun.";
// text dəyişəndə Java sözünün əvəzinə Javascript yazdırın
// ====>> JavaScript is awesome. Javascript is fun.
// const text = "Java is awesome. Java is fun.";
// console.log(text.replaceAll("Java", "JavaScript"));

// -------------------------------------------- TASK 2 --------------------------------------------
// function mixUp(a, b) {}
// mixUp adlı function yaradın. function 2 parametr qəbul edir. Ən sonda aşağıdakı kimi
// nəticə çıxardın.
// console.log(mixUp("val", "pur")); //'pul var'
// console.log(mixUp("donce", "gevlet")); //'gence dovlet'

// function mixUp(a, b) {
//   let result = b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2);
//   return result;
// }
// console.log(mixUp("val", "pur"));
// console.log(mixUp("donce", "gevlet"));

// -------------------------------------------- TASK 3 --------------------------------------------
// function verbing(word) {}
// verbing adlı function yaradın. Bu function bir parametr(feil) qəbul edir. Bu feil əgər 3 hərfdən
// kiçikdirsə sözün özün return edin. Əgər sonu "ing" ilə bitirsə sonuna "ly" əlavə edin. Digər
// hallarda sözün sonuna "ing" əlaavə edin.
// console.log(verbing('go')); // go
// console.log(verbing('swim')); //swiming
// console.log(verbing('swiming')); //swimingly

// function verbing(word) {
//   let result;
//   if (word.length < 3) {
//     result = word;
//   } else if (word.endsWith("ing")) {
//     result = word + "ly";
//   } else {
//     result = word + "ing";
//   }
//   return result;
// }
// console.log(verbing("go"));
// console.log(verbing("swim"));
// console.log(verbing("swiming"));

// -------------------------------------------- TASK 4 --------------------------------------------

// Sözün palindrom olub olmadığını yoxlayın.
// function isPalindrome(string) {
//     string == string.split("").reverse().join("")}
// isPalindrome("hello");

// function isPalindrome(string) {
//   let result = string.split("").reverse().join("");
//   return result === string ? "palindromdur." : "palindrom deyil.";
// }
// console.log(isPalindrome("hello")); //palindrom deyil.
// console.log(isPalindrome("lol")); //palindromdur.
