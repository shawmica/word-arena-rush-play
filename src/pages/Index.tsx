
import React from "react";
import WelcomeBanner from "@/components/home/WelcomeBanner";
import NavBar from "@/components/layout/NavBar";
import GameCard from "@/components/ui/GameCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      <WelcomeBanner />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">Game Modes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <GameCard gradient className="flex flex-col">
            <div className="text-center mb-4">
              <div className="w-16 h-16 rounded-full bg-game-purple text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                60s
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Classic Mode</h3>
              <p className="text-gray-700 mb-4">Make as many words as possible in 60 seconds</p>
            </div>
            <Link to="/game" className="mt-auto">
              <Button className="w-full bg-game-purple hover:bg-game-dark-purple">
                Play Classic Mode
              </Button>
            </Link>
          </GameCard>
          
          <GameCard className="opacity-70 flex flex-col">
            <div className="text-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-400 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                10×
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Timed Sprint</h3>
              <p className="text-gray-700 mb-4">10 rounds of 20 seconds each</p>
            </div>
            <div className="mt-auto">
              <Button disabled className="w-full cursor-not-allowed" variant="outline">
                Coming Soon
              </Button>
            </div>
          </GameCard>
          
          <GameCard className="opacity-70 flex flex-col">
            <div className="text-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-400 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                1/d
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Daily Challenge</h3>
              <p className="text-gray-700 mb-4">One unique letter set each day</p>
            </div>
            <div className="mt-auto">
              <Button disabled className="w-full cursor-not-allowed" variant="outline">
                Coming Soon
              </Button>
            </div>
          </GameCard>
          
          <GameCard className="opacity-70 flex flex-col">
            <div className="text-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-400 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                ∞
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Unlimited Practice</h3>
              <p className="text-gray-700 mb-4">No timer, build words freely</p>
            </div>
            <div className="mt-auto">
              <Button disabled className="w-full cursor-not-allowed" variant="outline">
                Coming Soon
              </Button>
            </div>
          </GameCard>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-heading font-bold text-center mb-8">How to Play</h2>
          <div className="max-w-3xl mx-auto">
            <ol className="space-y-6">
              <li className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-game-purple text-white font-bold mr-3">1</span>
                <div>
                  <h3 className="font-bold text-lg">Choose a game mode</h3>
                  <p className="text-gray-700">Select from Classic Mode, Timed Sprint, Daily Challenge, or Unlimited Practice.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-game-purple text-white font-bold mr-3">2</span>
                <div>
                  <h3 className="font-bold text-lg">Form words from the letters</h3>
                  <p className="text-gray-700">Click on letters to form words. Words must be at least 2 letters long.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-game-purple text-white font-bold mr-3">3</span>
                <div>
                  <h3 className="font-bold text-lg">Submit your words</h3>
                  <p className="text-gray-700">Press the "Submit" button to check if your word is valid.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-game-purple text-white font-bold mr-3">4</span>
                <div>
                  <h3 className="font-bold text-lg">Score points</h3>
                  <p className="text-gray-700">Each valid word earns points equal to its length. Longer words = more points!</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
      
      <footer className="mt-auto bg-white py-6 border-t">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 Word Rush Arena - Challenge your vocabulary and reflexes!</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
