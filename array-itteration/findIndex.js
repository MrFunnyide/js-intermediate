// .findIndex() yang digunakan untuk mendapatkan nomor index dari elemen yang dicari.
// .findIndex() memberikan nilai balik berupa nomor index dari elemen pertama yang ditemukan jika memenuhi kondisi pada return statement atau -1 jika tidak ditemukan.

let arrHewan = ["Kucing", "Burung", "Gajah", "Singa", "Jerapa"];

let index = arrHewan.findIndex((value) => {
  return value[0] == "B"; // huruf pertama dari value
});

console.log(index);
