const skipIndex = (array, index) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== index) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

export default skipIndex;
