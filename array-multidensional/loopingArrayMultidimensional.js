let inventory = [
  ["Kaos Polos", 21],
  ["Jaket Hoodie", 13],
  ["Topi", 7],
];

// menggunakan for untuk mengakses data pada masing masing elemnt
for (let i = 0; i < inventory.length; i++) {
  for (let j = 0; j < inventory[i].length; j++) {
    console.log(inventory[i][j]);
  }
}

// menggunakan .foreach()
inventory.forEach((baris) => {
  baris.forEach((kolom) => {
    console.log(kolom);
  });
});

// menggunakan .map()
inventory.map((baris1) => {
  baris1.map((kolom1) => {
    console.log(kolom1);
  });
});
