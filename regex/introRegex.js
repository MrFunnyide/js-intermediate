// method paga regex
//.exec(): di gunakan untuk mencari string yang kita inginkan pada pola regex yang tersedia dengan mengembalikan nilai array atau null.

// regex literal
const string = "Saya suka kopi";
const pattern = /kopi/;
const result = pattern.exec(string);
// console.log(result);

// RegExp
const string1 = "Indonesia Tanah Air Ku";
const words = ["Tanah", "Air"];
const result1 = new RegExp(words.join(" ")).exec(string1);
// console.log(result1);

// .test()
// digunakan untuk string matching dari pencarian teks pada pola regex yang tersedia dengan mengembalikan nilai boolean (true/false)

// regex literal
const regex = /Test/;
console.log(regex.test("Test"));

// RegExp
const word = ["Tes", "Tess", "Test"];
console.log(new RegExp(word[2]).test("Test"));
console.log(new RegExp(word[1]).test("Test"));
