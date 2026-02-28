"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number; // value between 0–100
  showLabel?: boolean;
}

export default function ProgressBar({
  progress,
  showLabel = true,
}: ProgressBarProps) {
  const safeProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className="w-full mt-6">
      {showLabel && (
        <div className="flex justify-between text-sm mb-2 text-black font-medium">
          <span className="text-black">Progress</span>
          <span className="text-black">
            {Math.round(safeProgress)}%
          </span>
        </div>
      )}

      <div
        className="w-full bg-gray-200 rounded-full h-4 overflow-hidden"
        role="progressbar"
        aria-valuenow={safeProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.div
          className="h-4 rounded-full bg-green-500"
          initial={{ width: 0 }}
          animate={{ width: `${safeProgress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}