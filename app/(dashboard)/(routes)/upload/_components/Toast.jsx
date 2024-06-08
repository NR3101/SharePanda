import { useState, useEffect } from "react";

function Toast({ show, message }) {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    setIsVisible(show);
    if (show) {
      const timer = setTimeout(() => setIsVisible(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 right-0 m-6 z-50">
      <div className="bg-green-500 text-white py-2 px-4 rounded-md shadow-lg text-sm sm:text-base md:text-lg lg:text-xl">
        {message}
      </div>
    </div>
  );
}

export default Toast;
