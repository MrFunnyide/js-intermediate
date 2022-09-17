//  memberikan nilai balik berupa nilai tunggal (single value) dari elemen pertama yang ditemukan jika memenuhi suatu kondisi pada return statement.
let people = [
  {
    name: "Jane",
    age: 20,
  },
  {
    name: "Doe",
    age: 15,
  },
];

let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let findAngka = angka.find((item) => item > 3);
// let filterAngka = angka.filter((item) => item > 3);

let janeFind = people.find((item) => item.name === "Jane");
let janeFilter = people.filter((item) => item.name === "Jane");

console.log(janeFind);
console.log(janeFilter);

// console.log(findAngka);
// console.log(filterAngka);
