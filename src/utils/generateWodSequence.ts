import { wordsArr } from "./words";

/**
 * Generate a word sequence
 * @param {number} len Number of words to make a sentece
 * @return {string} String of random words
 */
export function generateWordSequence(len: number): string {
  const randomWordsArr: string[] = [];
  const taken = new Array(wordsArr.length);
  if (len > 100) {
    throw new RangeError(
      "generateWordSequence: taken more elements than available"
    );
  }
  while (len--) {
    const x = Math.floor(Math.random() * wordsArr.length);
    randomWordsArr[len] = wordsArr[x in taken ? taken[x] : x];
    taken[x] =
      --wordsArr.length in taken ? taken[wordsArr.length] : wordsArr.length;
  }
  return randomWordsArr.join(" ");
}
