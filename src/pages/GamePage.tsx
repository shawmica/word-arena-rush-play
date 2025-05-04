
import React from "react";
import NavBar from "@/components/layout/NavBar";
import GameBoard from "@/components/game/GameBoard";

const GamePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      <div className="flex-grow py-6">
        <GameBoard />
      </div>
      <footer className="bg-white py-4 border-t">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 Word Rush Arena - Challenge your vocabulary and reflexes!</p>
        </div>
      </footer>
    </div>
  );
};

export default GamePage;
