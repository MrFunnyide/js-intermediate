function balikKata(str) {
  if (str == "") {
    return "";
  } else {
    return balikKata(str.substr(1)) + str[0];
  }
}
console.log(balikKata("Skilvul")); // output :  luvlikS
// let nama = "Terra";
// console.log(nama.substr(-1));
// let nama = "Skilvul";
// console.log(nama.substr(1) + nama[0]);
