let arr = new Array ();

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies.length);
console.log(itCompanies);

console.log(itCompanies[0]);
console.log(itCompanies[parseInt(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length-1]);

let arry = [];
for (let i = 0; i < itCompanies.length; i++) {
//console.log(itCompanies[i].toLocaleUpperCase());
arry.push(itCompanies[i].toLocaleUpperCase());
 }
 console.log(arry);


console.log(itCompanies.toString());


console.log(`${itCompanies.toString()} Boyuk IT sirketleridir`);
