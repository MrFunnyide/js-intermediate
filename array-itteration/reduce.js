let value = [1, 2, 3, 4, 5];
let fruits = ["Jambu", "Apel", "Mangga", "Jambu", "Jeruk", "Apel"];

// 5 == firstSumValue
// currentValue == isi dari variabel value

// proses
// 5 + 1 = 6
// 6 + 2 = 8
// 8 + 3 = 11
// 11 + 4 = 15
// 15 + 5 = 20

// output == 20
// let sum = value.reduce((firstSumValue, currentValue) => {
//   return firstSumValue + currentValue;
// }, 5);

// console.log(sum);

// let fruitList = fruits.reduce((list, fruit) => {
//   if (list[fruit]) {
//     // memeriksa apakah buah tersebut sudah ada dalam objet atau belum
//     list[fruit] = list[fruit] + 1; // jika ada, kita tambahkan 1
//   } else {
//     list[fruit] = 1; // jika belum, beri nilai 1
//   }
//   return list; // mengembalikan object
// }, {}); // initial value nya adalah object

// console.log(fruitList);

let nilai = [100, 80, 80, 70, 90];

let jumlahNilai = nilai.reduce((total, item) => {
  return total + item;
});

// console.log(jumlahNilai);
let rataRata = jumlahNilai / nilai.length;
console.log(rataRata);
