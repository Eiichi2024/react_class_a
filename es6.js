// 1. mapの使用例
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// 2. filterの使用例
const ages = [12, 18, 22, 29, 16];
const adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 22, 29]

// 3. スプレッド演算子の使用例
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// 4. mapとfilterの組み合わせ例
const numbers2 = [10, 20, 30, 40, 50];
const filteredAndDoubled = numbers2.filter(num => num > 20).map(num => num * 2);
console.log(filteredAndDoubled); // [60, 80, 100]

// 5. オブジェクトのスプレッド演算子の使用例
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }

// 6. ネストされたオブジェクトのスプレッド演算子の使用例
const obj3 = { a: 1, b: { c: 2, d: 3 } };
const obj4 = { ...obj3, b: { ...obj3.b, e: 4 } };
console.log(obj4); // { a: 1, b: { c: 2, d: 3, e: 4 } }
