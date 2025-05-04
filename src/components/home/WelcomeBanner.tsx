
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WelcomeBanner: React.FC = () => {
  return (
    <div className="relative py-16 md:py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-16 left-10 w-20 h-20 rounded-full bg-game-purple opacity-20 animate-float"></div>
      <div className="absolute top-32 right-24 w-12 h-12 rounded-full bg-game-orange opacity-20 animate-float" style={{ animationDelay: "-2s" }}></div>
      <div className="absolute bottom-16 left-1/4 w-16 h-16 rounded-full bg-game-blue opacity-20 animate-float" style={{ animationDelay: "-4s" }}></div>
      
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6">
          Welcome to{" "}
          <span className="text-gradient">Word Rush Arena</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-700">
          Challenge your vocabulary and reflexes! Create words from randomly generated letters, 
          beat the clock, and climb the leaderboard.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/game">
            <Button className="bg-game-purple hover:bg-game-dark-purple text-white font-medium text-lg px-8 py-6">
              Play Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <div className="bg-white rounded-lg px-6 py-4 shadow-md border border-gray-100">
            <h3 className="font-bold text-game-purple">Improve Vocabulary</h3>
            <p className="text-gray-700">Discover new words and expand your language skills</p>
          </div>
          <div className="bg-white rounded-lg px-6 py-4 shadow-md border border-gray-100">
            <h3 className="font-bold text-game-purple">Boost Reflexes</h3>
            <p className="text-gray-700">Think fast and build words under time pressure</p>
          </div>
          <div className="bg-white rounded-lg px-6 py-4 shadow-md border border-gray-100">
            <h3 className="font-bold text-game-purple">Track Progress</h3>
            <p className="text-gray-700">See your improvement and earn achievements</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
