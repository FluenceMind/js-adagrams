
const LETTER_POOL = {
  A: 9,  B: 2,  C: 2,  D: 4,  E: 12,
  F: 2,  G: 3,  H: 2,  I: 9,  J: 1,
  K: 1,  L: 4,  M: 2,  N: 6,  O: 8,
  P: 2,  Q: 1,  R: 6,  S: 4,  T: 6,
  U: 4,  V: 2,  W: 2,  X: 1,  Y: 2,
  Z: 1,
};



export const drawLetters = () => {
  // 1. Собираем массив всех букв по их количеству
  const letterPoolArray = [];

  for (const letter in LETTER_POOL) {
    const count = LETTER_POOL[letter];

    for (let i = 0; i < count; i += 1) {
      letterPoolArray.push(letter);
    }
  }

  // 2. Выбираем 10 случайных букв без превышения лимита
  const hand = [];

  for (let i = 0; i < 10; i += 1) {
    const randomIndex = Math.floor(Math.random() * letterPoolArray.length);
    const chosenLetter = letterPoolArray[randomIndex];

    hand.push(chosenLetter);

    // удаляем эту «фишку» из пула, чтобы, например, не получить 3 Z
    letterPoolArray.splice(randomIndex, 1);
  }

  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
