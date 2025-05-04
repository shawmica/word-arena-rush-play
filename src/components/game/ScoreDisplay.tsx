
import React from "react";
import GameCard from "../ui/GameCard";

interface ScoreDisplayProps {
  score: number;
  wordsFound: string[];
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score, wordsFound }) => {
  return (
    <GameCard className="h-full">
      <div className="flex flex-col h-full">
        <div className="text-center mb-4">
          <h3 className="font-heading font-bold text-lg">Score</h3>
          <p className="text-3xl font-bold text-game-purple">{score}</p>
        </div>
        
        <div className="flex-grow">
          <h4 className="font-bold text-sm text-gray-600 mb-2">Words Found: {wordsFound.length}</h4>
          <div className="max-h-[300px] overflow-y-auto pr-2">
            <ul className="space-y-1">
              {wordsFound.map((word, index) => (
                <li 
                  key={`${word}-${index}`}
                  className="bg-gray-50 px-3 py-1 rounded text-sm flex justify-between"
                >
                  <span>{word}</span>
                  <span className="font-medium">{word.length} pts</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </GameCard>
  );
};

export default ScoreDisplay;
