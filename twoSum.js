const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 10;
const showTwoSum = () => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == target) {
        return {
          fistNumber: array[i],
          secondNumber: array[j],
        };
      }
    }
    return console.log("element not found");
  }
};
console.log(showTwoSum());
