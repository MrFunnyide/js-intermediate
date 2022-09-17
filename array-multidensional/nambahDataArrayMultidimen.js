// menambahkan data array

let inventory = [
  ["Kaos Polos", 21],
  ["Jaket Hoodie", 13],
  ["Topi", 7],
];

// menggunakan for

for (let i = 0; i < inventory.length; i++) {
  let stok1 = 100 - inventory[i][1];
  inventory[i].push(stok1);
}
console.log("Menggunakan for");
console.log(inventory);

// menggunakan .foreach()
inventory.forEach((dataInventory) => {
  let stok2 = 100 - dataInventory[1];
  dataInventory.push(stok2);
});
console.log("Menggunakan .foreach()");
console.log(inventory);

// menggunakan .map()
inventory.map((dataInventory2) => {
  let stok3 = 100 - dataInventory2[1];
  dataInventory2.push(stok3);
});
console.log("Menggunakan .map()");
console.log(inventory);
