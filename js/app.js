function convertToRoman(num) {
  let accumulator = '';
  const numbers = {
    M̅: 1000000,
    C̅M̅: 900000,
    D̅: 500000,
    C̅D̅: 400000,
    C̅: 100000,
    X̅C̅: 90000,
    L̅: 50000,
    X̅L̅: 40000,
    X̅: 10000,
    MX̅: 9000,
    V̅: 5000,
    MV̅: 4000,
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  for (const key in numbers) {
    const numberValue = numbers[key];
    while (numberValue <= num) {
      num -= numberValue;
      accumulator += key;
    }
    document.getElementById('outputRoman').innerHTML = accumulator;
  }
  return accumulator;
}

let result = convertToRoman(0);

console.log(result);

