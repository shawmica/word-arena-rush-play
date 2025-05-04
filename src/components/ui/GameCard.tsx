
import React from "react";
import { cn } from "@/lib/utils";

interface GameCardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

const GameCard: React.FC<GameCardProps> = ({ children, className, gradient = false }) => {
  return (
    <div
      className={cn(
        "rounded-xl p-6 shadow-lg",
        gradient
          ? "bg-gradient-to-br from-white to-game-soft-bg border border-game-light-purple/40"
          : "bg-white border border-gray-100",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GameCard;
