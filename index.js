const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2];
const showResult = () => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) return true;
    }
  }
  return false;
};

console.log(showResult());
