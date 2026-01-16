import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Arif Shumon",
    role: "E-commerce Seller",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    message:
      "Amazing service! Fast delivery and very reliable. My customers are very happy.",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Online Entrepreneur",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 4,
    message:
      "Payment system is super easy and delivery is always on time. Highly recommended!",
  },
  {
    id: 3,
    name: "Rakib Hasan",
    role: "Business Owner",
    image: "https://i.pravatar.cc/150?img=45",
    rating: 5,
    message:
      "Best logistics partner I’ve worked with. Professional support and great offers.",
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">What Our Customers Say</h2>
        <p className="text-gray-500">
          Trusted by thousands of happy customers
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="card-body">
              {/* User */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>

              {/* Message */}
              <p className="text-gray-600 mb-4">“{item.message}”</p>

              {/* Rating */}
              <div className="rating rating-sm">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
