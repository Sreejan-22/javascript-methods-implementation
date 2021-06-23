// Going by the definition given in MDN docs, "map() method creates a new array populated with the results of calling a provided function on every element in the calling array"

const sample = [1, 2, 3, 4];
const mapResult = sample.map((item, index, array) => {
  console.log(`item: ${item}, index: ${index}, array: ${array}`);
  return item * 2;
});
console.log(mapResult);

Array.prototype.mymap = function(callback) {
  const resultArray = [];
  for(let index=0;index<this.length;index++) {
    resultArray.push(callback(this[index], index, this));
  }
  return resultArray;
}

console.log();

const mymapRes = sample.mymap((item, index, array) => {
  console.log(item + " " + index + " " + array);
  return item * 3
})

console.log(mymapRes);


