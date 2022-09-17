let colors = ["blue", "red", "orange", "green"];
// mengakses 3 parameter callback (value, index, array)
// akses isi tiap elemen yang di proses (value) . isiColors == value
// colors.forEach(isiColors => {
//   console.log(isiColors);
// });

// akses index dari array. idx sebagai index
colors.forEach((isiColors, idx) => {
  if (idx % 2 == 0) {
    console.log(isiColors, idx);
  } else {
    console.log("not allowed", idx);
  }
});
