const foods = ["siomay", "dimsum", "gyoza", "pangsit"];
// Buat kode kamu di bawah ini
function checkFood(foodName) {
  let isNotEmptyString = foodName !== "";
  let foodIsIncluded = foods.includes(foodName);

  if (isNotEmptyString && foodIsIncluded) {
    console.log("Makanan sudah tersedia");
    console.log(foods);
  } else {
    foods.push(foodName);
    console.log(foods);
  }
}

checkFood("pangsit");
