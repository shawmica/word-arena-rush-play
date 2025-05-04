
import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

interface TimerProps {
  initialSeconds: number;
  onTimeout: () => void;
  isActive: boolean;
}

const Timer: React.FC<TimerProps> = ({ initialSeconds, onTimeout, isActive }) => {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          onTimeout();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, onTimeout]);

  useEffect(() => {
    setProgress(Math.floor((timeLeft / initialSeconds) * 100));
  }, [timeLeft, initialSeconds]);

  const getColorClass = () => {
    if (progress > 60) return "text-green-600";
    if (progress > 30) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="w-full space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">Time Remaining</span>
        <span className={`text-lg font-bold ${getColorClass()}`}>
          {timeLeft}s
        </span>
      </div>
      <Progress value={progress} className={progress <= 30 ? "animate-pulse" : ""} />
    </div>
  );
};

export default Timer;
