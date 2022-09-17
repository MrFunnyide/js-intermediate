// komponen utama dari rekursif
/*
 * Base Case
 * Recursion Case
 */

// contoh pencarian faktorial
function faktorial(n) {
  // code here
  if (n == 1) {
    return 1; // Base case
  } else {
    return n * faktorial(n - 1); // recursive case
  }
}

console.log(faktorial(4));
