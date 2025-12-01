
const LETTER_POOL = {
  A: 9, B: 2, C: 2, D: 4, E: 12,
  F: 2, G: 3, H: 2, I: 9, J: 1,
  K: 1, L: 4, M: 2, N: 6, O: 8,
  P: 2, Q: 1, R: 6, S: 4, T: 6,
  U: 4, V: 2, W: 2, X: 1, Y: 2,
  Z: 1,
};

const SCORE_CHART = {
  A: 1, E: 1, I: 1, O: 1, U: 1,
  L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4,
  Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10,
};

export const drawLetters = () => {
  const letterPoolArray = [];

  for (const letter in LETTER_POOL) {
    const count = LETTER_POOL[letter];

    for (let i = 0; i < count; i += 1) {
      letterPoolArray.push(letter);
    }
  }

  const hand = [];

  for (let i = 0; i < 10; i += 1) {
    const randomIndex = Math.floor(Math.random() * letterPoolArray.length);
    const chosenLetter = letterPoolArray[randomIndex];

    hand.push(chosenLetter);

    letterPoolArray.splice(randomIndex, 1);
  }

  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const handCopy = [...lettersInHand];
  const upperInput = input.toUpperCase();

  for (const char of upperInput) {
    const index = handCopy.indexOf(char);

    if (index === -1) {
      return false;
    }

    handCopy.splice(index, 1);
  }

  return true;
};

export const scoreWord = (word) => {
  if (!word) {
    return 0;
  }

  const upperWord = word.toUpperCase();
  let score = 0;

  for (const char of upperWord) {
    score += SCORE_CHART[char] || 0;
  }

  if (upperWord.length >= 7 && upperWord.length <= 10) {
    score += 8;
  }

  return score;
};

export const highestScoreFrom = (words) => {
  if (!words || words.length === 0) {
    return null;
  }

  let bestWord = null;
  let bestScore = 0;

  for (const word of words) {
    const score = scoreWord(word);

    if (score > bestScore) {
      bestScore = score;
      bestWord = word;
      continue;
    }

    if (score === bestScore) {
      const currLen = word.length;
      const bestLen = bestWord.length;

      if (currLen === 10 && bestLen !== 10) {
        bestWord = word;
        continue;
      }

      if (bestLen !== 10 && currLen < bestLen) {
        bestWord = word;
        continue;
      }
    }
  }

  return { word: bestWord, score: bestScore };
};