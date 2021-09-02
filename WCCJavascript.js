const function1 = (n) => {
  let a = 0;
  let count = 0;
  while (n > 0) {
    a = n % 10;
    count += a;
    n = Math.floor(n / 10);
   
  }
  return count;
};

const additivePersistence = (n) => {
  let a = 0;
  let count = 0;
  while (n > 9) {
    n = function1(n);
    a = n;
    count += 1;
  }
  return count;
};

const function2 = (n) => {
let a = 1;
let count = 1;
while (n > 0) {
  a = n % 10;
  count *= a;
  n = Math.floor(n / 10);
}
  return count;
};

const multiplicativePersistence = (n) => {
let count = 0;
while (n > 9) {
  n = function2(n);
  count += 1;
}
  return count;
};

console.log(additivePersistence(1679583));
console.log(additivePersistence(123456));
console.log(additivePersistence(6));
console.log(multiplicativePersistence(77));
console.log(multiplicativePersistence(123456));
console.log(multiplicativePersistence(4));