export function reverseString(string = "") {
  const characters = string.split("");
  const reversedCharacters = [];

  for (
    let index = 0, reversedIndex = characters.length - 1;
    index < characters.length;
    index++, reversedIndex--
  ) {
    reversedCharacters[reversedIndex] = characters[index];
  }

  return reversedCharacters.join("");
}
