import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Heading = () => {
  return (
    <h1 className="text-4xl sm:text-5xl font-semibold mb-8">Founder</h1>
  );
};

// Helper function to split text into individual words and wrap them in spans with spacing
const wrapWordsInSpans = (text) => {
  return text.split(" ").map((word, i) => (
    <span
      key={i}
      className="inline-block opacity-0" // Set initial opacity to 0
      style={{ marginRight: ".5rem" }} // Add space between words
    >
      {word}
    </span>
  ));
};

function Founder() {
  const pTagsRef = useRef([]);
  const imageRef = useRef(null); // Reference for the image

  useEffect(() => {
    pTagsRef.current.forEach((el, index) => {
      const words = el.querySelectorAll("span");

      // Animate each word's opacity from 0 to 1
      gsap.fromTo(
        words,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1, // Duration of each word's animation
          stagger: 0.3, // Delay between each word's animation
          ease: "power3.inout",
          scrollTrigger: {
            trigger: el,
            start: "top 75%", // Start when the top of the element is at 75% of the viewport height
            end: "top 25%", // End the animation when the top of the element reaches 25% of the viewport
            scrub: true,
            markers: false, // Remove markers for production
            onEnter: () => {
              // When the previous paragraph finishes, trigger the next one
              if (index < pTagsRef.current.length - 1) {
                ScrollTrigger.refresh();
              }
            },
          },
        }
      );
    });

    // Animate image opacity on scroll
    gsap.fromTo(
      imageRef.current,
      { opacity: 0 }, // Start with opacity 0
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 75%",
          end: "top 25%",
          scrub: true,
          markers: false, // Remove markers for production
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      className="text-white py-16 flex justify-center items-center bg-black relative"
    >
      <div className="container flex flex-col md:flex-row justify-center items-center px-4 py-10  text-center w-full rounded-2xl relative">
        {/* Left Section: Text Content */}
        <div className="flex text-left flex-col w-full md:w-1/2 p-4 relative z-10">
          <Heading />
          {/* First Paragraph */}
          <p
            ref={(el) => (pTagsRef.current[0] = el)}
            className="text-xl sm:text-2xl md:text-3xl mb-6 leading-relaxed"
          >
            {wrapWordsInSpans(
              "Discover Third Eye Event: Your Premier Event Planning Partner. We believe every event is a unique opportunity to celebrate life’s special moments. Our passionate team is dedicated to transforming your vision into reality."
            )}
          </p>

          {/* Second Paragraph */}
          <p
            ref={(el) => (pTagsRef.current[1] = el)}
            className="text-xl sm:text-2xl md:text-3xl mb-6 leading-relaxed"
          >
            {wrapWordsInSpans(
              "We aim to create exceptional experiences tailored to your needs. Understanding that planning can be overwhelming, we provide a seamless, stress-free process from start to finish. Your happiness is our priority."
            )}
          </p>

          {/* Third Paragraph */}
          <p
            ref={(el) => (pTagsRef.current[2] = el)}
            className="text-xl sm:text-2xl md:text-3xl mb-6 leading-relaxed"
          >
            {wrapWordsInSpans(
              "Our experienced professionals bring years of expertise in event planning and design. With a passion for creativity, we bring innovative ideas to life, making your event truly one-of-a-kind."
            )}
          </p>
        </div>

        {/* Right Section: Image Content */}
        <div className="flex justify-center items-center w-full md:w-1/2 p-4 relative z-10">
          <img
            ref={imageRef}
            src="/Founder.jpg" // Replace with your image path
            alt="Event Planning"
            className="w-full h-auto object-cover rounded-2xl" // Adjust styling as needed
          />
        </div>
      </div>

      <img
        src="/FooterAssests_1.png"
        className="absolute right-20 top-10 w-[7vw]"
      />
      <img
        src="/FooterAssests_2.jpg"
        className="absolute md:right-20  right-10  bottom-10 w-[7vw]"
      />
      <img
        src="/FooterAssests_3.png"
        className="absolute -left-10 bottom-1/2 w-[7vw] z-5"
      />
    </section>
  );
}

export default Founder;
