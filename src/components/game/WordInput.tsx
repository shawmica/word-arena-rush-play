
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface WordInputProps {
  letters: string[];
  onSubmitWord: (word: string) => void;
  isGameActive: boolean;
}

const WordInput: React.FC<WordInputProps> = ({ letters, onSubmitWord, isGameActive }) => {
  const [currentWord, setCurrentWord] = useState("");
  const [usedIndices, setUsedIndices] = useState<number[]>([]);

  const handleLetterClick = (letter: string, index: number) => {
    if (!isGameActive) return;
    if (usedIndices.includes(index)) return;
    
    setCurrentWord(prev => prev + letter);
    setUsedIndices(prev => [...prev, index]);
  };

  const handleSubmit = () => {
    if (currentWord.length < 2) return;
    
    onSubmitWord(currentWord.toLowerCase());
    setCurrentWord("");
    setUsedIndices([]);
  };

  const handleClear = () => {
    setCurrentWord("");
    setUsedIndices([]);
  };

  // Reset input when game status changes
  useEffect(() => {
    if (!isGameActive) {
      setCurrentWord("");
      setUsedIndices([]);
    }
  }, [isGameActive]);

  return (
    <div className="space-y-6">
      <div>
        <div className="flex flex-col items-center">
          <div className="relative w-full">
            <Input
              type="text"
              value={currentWord}
              readOnly
              className="text-xl text-center font-semibold h-14 border-2 border-game-purple/30 focus:border-game-purple"
              placeholder={isGameActive ? "Form a word..." : "Game over"}
              disabled={!isGameActive}
            />
            {currentWord && (
              <button
                onClick={handleClear}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500 transition-colors"
              >
                ✕
              </button>
            )}
          </div>
          
          <Button
            onClick={handleSubmit}
            disabled={currentWord.length < 2 || !isGameActive}
            className="bg-game-purple hover:bg-game-dark-purple mt-3 px-8"
          >
            Submit Word
          </Button>
        </div>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
        <div className="flex flex-wrap justify-center gap-3">
          {letters.map((letter, index) => (
            <div
              key={`${letter}-${index}`}
              className={`letter-tile ${usedIndices.includes(index) ? "opacity-50" : ""} ${
                usedIndices.includes(index) ? "letter-tile-selected" : ""
              }`}
              onClick={() => handleLetterClick(letter, index)}
            >
              {letter}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WordInput;
