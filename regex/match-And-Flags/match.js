// .match() sama seperti .exec()
// yaitu sebuah method bawaan (built-in) dari JavaScript. Namun .match() jika disisipkan suatu flag akan menghasilkan hasil yang beda dengan .exec()

const regex = /i/;
const word = "Indonesia";
console.log(word.match(regex));