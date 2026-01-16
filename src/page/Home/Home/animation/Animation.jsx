import React, { useEffect, useState } from "react";

const Features = () => {
  const allFeatures = [
    { id: 1, text: "Quality Product", icon: "✅" },
    { id: 2, text: "Fast Delivery", icon: "🚚" },
    { id: 3, text: "Easy Payment Methods", icon: "💳" },
    { id: 4, text: "Get Offers", icon: "🎁" },
  ];

  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setVisibleItems((prev) => {
        if (index >= allFeatures.length) {
          clearInterval(interval);
          return prev;
        }
        const nextItem = allFeatures[index];
        index++;
        return nextItem ? [...prev, nextItem] : prev;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-10">
      <style>
        {`
          @keyframes slideFade {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <div className="flex flex-wrap justify-center gap-6">
        {visibleItems
          .filter(Boolean) // 🛡️ extra protection
          .map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 bg-base-100 shadow-lg rounded-xl px-6 py-4 font-semibold text-lg"
              style={{ animation: "slideFade 0.5s ease forwards" }}
            >
              <span className="text-2xl">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Features;
