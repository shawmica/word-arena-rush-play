
import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="w-full py-4 bg-white shadow-sm">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-game-purple to-game-blue rounded-lg flex items-center justify-center text-white font-bold">
            WR
          </div>
          <span className="font-heading text-xl font-bold text-gradient">
            Word Rush Arena
          </span>
        </Link>
        <div className="space-x-6">
          <Link to="/" className="font-medium hover:text-game-purple transition-colors">
            Home
          </Link>
          <Link to="/game" className="font-medium hover:text-game-purple transition-colors">
            Play
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
