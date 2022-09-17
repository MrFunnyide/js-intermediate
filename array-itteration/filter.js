let angka = [1, 2, 3, 4, 5];

let ganjilAngka = angka.filter((item) => {
  return item % 2 != 0;
});
// penulisan lebih singkat dengan impicit return value
let genapAngka = angka.filter((item) => item % 2 == 0);
console.log(ganjilAngka);
console.log(genapAngka);
