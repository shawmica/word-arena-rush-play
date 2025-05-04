
import React, { useState, useEffect } from "react";
import WordInput from "./WordInput";
import Timer from "./Timer";
import ScoreDisplay from "./ScoreDisplay";
import GameCard from "../ui/GameCard";
import { validateWord } from "@/utils/wordValidator";
import { saveGameResult } from "@/utils/gameStorage";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const GAME_DURATION = 60; // seconds
const VOWELS = ["A", "E", "I", "O", "U"];
const CONSONANTS = [
  "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", 
  "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"
];

const GameBoard: React.FC = () => {
  const [letters, setLetters] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [wordsFound, setWordsFound] = useState<string[]>([]);
  const [gameActive, setGameActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const { toast } = useToast();

  const generateLetters = () => {
    const newLetters: string[] = [];
    
    // Generate 4 vowels
    for (let i = 0; i < 4; i++) {
      const randomVowel = VOWELS[Math.floor(Math.random() * VOWELS.length)];
      newLetters.push(randomVowel);
    }
    
    // Generate 8 consonants
    for (let i = 0; i < 8; i++) {
      const randomConsonant = CONSONANTS[Math.floor(Math.random() * CONSONANTS.length)];
      newLetters.push(randomConsonant);
    }
    
    // Shuffle the array
    return newLetters.sort(() => Math.random() - 0.5);
  };

  const startGame = () => {
    setLetters(generateLetters());
    setScore(0);
    setWordsFound([]);
    setGameActive(true);
    setGameOver(false);
  };

  const endGame = () => {
    setGameActive(false);
    setGameOver(true);
    
    // Save game result to localStorage
    saveGameResult("classic", {
      score,
      wordsFound,
      date: new Date().toISOString(),
    });
    
    toast({
      title: "Game Over!",
      description: `You found ${wordsFound.length} words and scored ${score} points!`,
    });
  };

  const handleSubmitWord = (word: string) => {
    if (word.length < 2) return;
    
    // Check if word has already been found
    if (wordsFound.includes(word)) {
      toast({
        title: "Already found!",
        description: `You've already found the word "${word}"`,
        variant: "destructive",
      });
      return;
    }
    
    // Validate word against dictionary
    if (validateWord(word)) {
      const wordScore = word.length;
      setScore(prevScore => prevScore + wordScore);
      setWordsFound(prevWords => [...prevWords, word]);
      
      toast({
        title: "Word found!",
        description: `"${word}" is worth ${wordScore} points!`,
        variant: "default",
      });
    } else {
      toast({
        title: "Not a valid word",
        description: `"${word}" is not in our dictionary.`,
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    // Initialize letters when component loads
    setLetters(generateLetters());
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <GameCard gradient className="mb-6">
        <div className="text-center">
          <h2 className="text-2xl font-heading font-bold mb-2">Classic Mode</h2>
          <p className="text-gray-600 mb-4">
            Make as many words as you can in 60 seconds!
          </p>
          
          {!gameActive && !gameOver && (
            <Button 
              onClick={startGame} 
              className="bg-game-purple hover:bg-game-dark-purple"
            >
              Start Game
            </Button>
          )}
          
          {gameOver && (
            <div className="space-y-3">
              <h3 className="text-xl font-bold">Game Over!</h3>
              <p>You found {wordsFound.length} words and scored {score} points!</p>
              <Button 
                onClick={startGame} 
                className="bg-game-purple hover:bg-game-dark-purple"
              >
                Play Again
              </Button>
            </div>
          )}
        </div>
      </GameCard>
      
      {(gameActive || gameOver) && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {gameActive && (
              <Timer 
                initialSeconds={GAME_DURATION} 
                onTimeout={endGame} 
                isActive={gameActive} 
              />
            )}
            
            <WordInput 
              letters={letters} 
              onSubmitWord={handleSubmitWord}
              isGameActive={gameActive}
            />
          </div>
          
          <div className="lg:col-span-1">
            <ScoreDisplay score={score} wordsFound={wordsFound} />
          </div>
        </div>
      )}
    </div>
  );
};

export default GameBoard;
