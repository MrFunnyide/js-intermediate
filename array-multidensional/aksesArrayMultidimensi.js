let inventory = [
  ["kaos", 11],
  ["celana", 21],
  ["topi", 15],
];
let inventory2 = [
  ["pedang", 11],
  ["samurai", 21],
  ["kunai", 15],
];
// akses array
// namaArray[indexBaris][indexKolom];

// console.log(inventory[2][1]); // kaos

// array multidimensional juga bisa menggunakan metode atau property bawaan seperti tipe data array

// menggunakan method push
// inventory.push(["Celana jeans", 5]);
let gabung = inventory.concat(inventory2);
console.log(gabung);
gabung.sort();
console.log(gabung);
