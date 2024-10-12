import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "I had a wonderful experience and I would highly recommend this Planner to others.",
      author: "Happy Customer",
    },
    {
      quote:
        "This event planner made my dream event come true. Everything was perfect!",
      author: "Satisfied Client",
    },
    {
      quote:
        "Highly professional and reliable team. Would definitely recommend!",
      author: "Event Host",
    },
  ];

  return (
    <div className="testimonial-section bg-black text-white py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side: Title */}
        <div className="w-full flex justify-center items-center flex-col md:items-start md:w-1/2 px-4 mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            WHAT <span className="bg-yellow-500 text-black px-2">OTHERS</span>
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold">SAY ABOUT US</h2>
          <div className="w-16 h-1  bg-yellow-500 mt-4"></div>
        </div>

        {/* Right Side: Swiper for Testimonials */}
        <div className="w-full md:w-1/2 px-4">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} bg-yellow-300 w-2 h-2 rounded-full"></span>`; // Custom bullet style
              },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center text-center mb-10">
                  <p className="text-xl md:text-2xl mb-4">"{testimonial.quote}"</p>
                  <h4 className="font-semibold text-lg">{testimonial.author}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
