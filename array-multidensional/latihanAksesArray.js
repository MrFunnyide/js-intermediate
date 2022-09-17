let inventory = [
  ["Kaos Polos", 21],
  ["Jaket Hoodie", 13],
  ["Topi", 7],
];

let item;
let jumlahTerjual;

// Buat kode kamu di bawah ini
let remove = inventory.splice(1, 1);
// console.log(remove);
console.log(inventory);

// simpan nilai topi ke dalam variabel item
// simpan nilai 7 ke dalam variabel jumlahTerjual
item = inventory[1][0];
jumlahTerjual = inventory[1][1];

console.log(`Total penjualan ${item} ada sebanyak ${jumlahTerjual} item`);
