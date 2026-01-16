import React from 'react';
import img1 from '../../../../assets/shirt/shirt.png';
import img2 from '../../../../assets/shirt/shirt2.png';
import img3 from '../../../../assets/shirt/shirt3.png';

const Trending = () => {
  const trendingData = [
    {
      id: 1,
      title: "Casual Wear",
      desc:" Comfortable and stylish casual wear for all occasions.",
      img: img1,
      rating: 4,
    },
    {
      id: 2,
      title: "Printed T-Shirts",
      desc: "Best quality printed t-shirts for everyday wear.",
      img: img2,
      rating: 5,
    },
    {
      id: 3,
      title: "Women Shirt",
      desc: "Trendy and fashionable women's shirts for all seasons.",
      img: img3,
      rating: 4,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-start mb-4">
        🔥 Top Rated Products
      </h2>
      <p className='pb-6 text-gray-500'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, aspernatur earum quaerat dicta expedita voluptatibus.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {trendingData.map((item) => (
          <div
            key={item.id}
            className="
              card bg-base-100 shadow-md
              transition-all duration-300 ease-in-out
              hover:shadow-2xl hover:-translate-y-2 hover:scale-105
            "
          >
            <figure className="overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="
                  h-60 w-60 mt-4
                  transition-transform duration-300
                  hover:scale-110
                "
              />
            </figure>

            <div className="card-body">
              <h3 className="card-title">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>

              {/* ⭐ Star Rating */}
              <div className="rating rating-sm mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <input
                    key={star}
                    type="radio"
                    className="mask mask-star-2 bg-orange-400"
                    checked={star <= item.rating}
                    readOnly
                  />
                ))}
              </div>

              <div className="card-actions justify-start mt-4">
                <button
                  className="
                    btn btn-outline btn-secondary
                    transition-all duration-300
                    hover:scale-105 hover:shadow-lg
                  "
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
