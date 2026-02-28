"use client";

import { useEffect, useState } from "react";

const tasks = [
  "Clean your room",
  "Drink a glass of water",
  "Do 10 pushups",
  "Read for 15 minutes",
  "Organize your desk",
];

export default function Home() {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [xp, setXp] = useState(0);

  // Load XP from localStorage
  useEffect(() => {
    const savedXP = localStorage.getItem("xp");
    if (savedXP) setXp(parseInt(savedXP));
  }, []);

  // Save XP
  useEffect(() => {
    localStorage.setItem("xp", xp.toString());
  }, [xp]);

  const level = Math.floor(xp / 50) + 1;
  const progress = (xp % 50) * 2;

  const speak = (text: string) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
  };

  const completeTask = () => {
    const newXP = xp + 10;
    setXp(newXP);

    if (newXP % 50 === 0) {
      speak("Level up! You are doing amazing!");
    } else {
      speak("Good job! Keep going!");
    }

    if (currentTaskIndex < tasks.length - 1) {
      setCurrentTaskIndex(currentTaskIndex + 1);
    } else {
      speak("All tasks completed for today. You're unstoppable!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white flex flex-col items-center justify-center p-6">

      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-xl text-center max-w-md w-full">

        <h1 className="text-3xl font-bold mb-2">🚀 Smart Companion</h1>

        <div className="mb-4">
          <p className="text-lg">⭐ XP: {xp}</p>
          <p className="text-md">🏆 Level: {level}</p>

          <div className="w-full bg-gray-700 rounded-full h-3 mt-2">
            <div
              className="bg-indigo-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl mb-6">
          <h2 className="text-xl font-semibold">
            {tasks[currentTaskIndex]}
          </h2>
        </div>

        <button
          onClick={completeTask}
          className="bg-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-700 transition w-full"
        >
          Complete Task ✅
        </button>

      </div>

    </div>
  );
}