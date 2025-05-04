
import { wordListSet } from "@/data/wordList";

export const validateWord = (word: string): boolean => {
  // Convert to lowercase for consistent comparison
  const normalizedWord = word.toLowerCase().trim();
  
  // Check if the word exists in our dictionary
  return wordListSet.has(normalizedWord);
};
