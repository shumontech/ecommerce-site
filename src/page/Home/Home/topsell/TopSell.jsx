import React from "react";

const TopSellCarousel = () => {
  const slides = [
    "/assets/women/women.png",
    "/assets/women/women2.jpg",
    "/assets/women/women3.jpg",
    "/assets/women/women4.jpg",
  ];

  return (
    <div className="my-12 w-full px-4 mt-20">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center ">Top Selling Products</h2>
        <p className="text-center pb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, sapiente ut! Voluptas explicabo et perspiciatis.</p>
      </div>
       <div className="w-full overflow-hidden bg-gray-100 py-8">
      <div className="relative flex">
        {/* Track */}
        <div className="flex animate-marquee gap-6">
          {[...slides, ...slides].map((src, index) => (
            <div
              key={index}
              className="w-64 h-40 flex-shrink-0"
            >
              <img
                src={src}
                alt={`slide-${index}`}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </div>
    </div>
   
  );
};

export default TopSellCarousel;
