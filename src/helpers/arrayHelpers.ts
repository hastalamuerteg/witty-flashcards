import { IFlashcard } from "../@types/flashcard";

type helperFunctionData = IFlashcard[];

export function helperShuffleArray(array: helperFunctionData) {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}
