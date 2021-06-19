// Going by the definition given in MDN docs, "map() method creates a new array populated with the results of calling a provided function on every element in the calling array"

const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((item) => item * 2)
console.log(newArr); // [2, 4, 6, 8, 10]
