const kata = "Saya belajar JavaScript di Skilvul.com";
const pattern = /Belajar/;

const result = pattern.exec(kata);
const test = pattern.test(kata);

console.log(result);
console.log(test);
