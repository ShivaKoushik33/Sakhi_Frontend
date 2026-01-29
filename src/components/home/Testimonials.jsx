import { useEffect, useState } from "react";

export default function Testimonials({ data }) {
  if (!data || data.length === 0) return null;

  // duplicate array for infinite loop
  const items = [...data, ...data];
  const cardWidth = 443; // 400px card + 43px gap
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prev) => prev + 1);
    }, 20); // speed control (smaller = faster)

    return () => clearInterval(interval);
  }, []);

  // reset seamlessly when half scrolled
  if (translateX >= data.length * cardWidth) {
    setTranslateX(0);
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto overflow-hidden">

      {/* Header */}
      <div className="flex flex-col items-center gap-1.5 px-2.5 py-2.5 mb-10">
        <h2 className="text-2xl font-semibold text-[#353945]">
          Let Customers Speak
        </h2>
        <p className="text-xl text-[#777E90]">
          Trusted by 10,000+ Customers
        </p>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden px-[124px]">
        <div
          className="flex gap-[43px]"
          style={{
            transform: `translateX(-${translateX}px)`,
            transition: "linear"
          }}
        >
          {items.map((testimonial, index) => (
            <div
              key={index}
              className="flex items-center gap-6 p-6 bg-[#FFE1BA] rounded-[20px] w-[400px] flex-shrink-0"
            >
              {/* Image */}
              <div className="w-[148px] h-[148px] flex-shrink-0">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover rounded-lg border border-white"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-1">
                  {Array(testimonial.stars || 5).fill(0).map((_, i) => (
                    <span key={i} className="text-[#901CDB]">★</span>
                  ))}
                  <span>{testimonial.rating}/5.0</span>
                </div>

                <h3 className="text-xl font-medium">{testimonial.name}</h3>
                <p className="text-sm">{testimonial.review}</p>
                <span className="text-[10px]">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
