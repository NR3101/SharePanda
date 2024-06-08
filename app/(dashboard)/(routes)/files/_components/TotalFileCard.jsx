import React from "react";

function TotalFileCard({ totalFile }) {
  return (
    <div
      className="p-3 border rounded-md grid grid-cols-2
    md:grid-cols-3 lg:grid-cols-4 mt-3 bg-white dark:bg-gray-800"
    >
      <h2 className="text-gray-500 dark:text-gray-200">Total Files : {totalFile}</h2>
    </div>
  );
}

export default TotalFileCard;