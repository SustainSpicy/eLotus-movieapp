export function getRandomElementsFromArray(inputArray) {
  let randomElements = new Set();

  while (randomElements.size < 3) {
    let randomIndex = Math.floor(Math.random() * inputArray.length);
    randomElements.add(inputArray[randomIndex]);
  }

  return Array.from(randomElements);
}
