import React from "react";

function ProgressBar({ progress = 20 }) {
  return (
    <div className="bg-gray-400 w-full mt-3 rounded-full">
      <div
        className="py-0.2 bg-primary rounded-full text-white text-center transition-all 
        duration-500"
        style={{
          width: `${progress}%`,
        }}
      >
        {`${Number(progress).toFixed(0)}%`}
      </div>
    </div>
  );
}

export default ProgressBar;
