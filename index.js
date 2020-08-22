function sumItems(array) {
  // Sum all the numbers in the array
  if (array.length === 0) {
    return 0;
  } else {
    if (Array.isArray(array[0])) {
      return sumItems(array[0]) + sumItems(array.slice(1));
    } else {
      return array[0] + sumItems(array.slice(1));
    }
  }
}

module.exports = sumItems;