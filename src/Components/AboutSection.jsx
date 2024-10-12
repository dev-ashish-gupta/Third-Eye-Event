import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Heading = () => {
  return <h1 className="text-4xl sm:text-5xl font-semibold mb-8">About Us</h1>;
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

function About() {
  const pTagsRef = useRef([]);

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
  }, []);

  return (
    <section className="text-white py-16 h-auto flex justify-center items-center">
      <div className="container flex justify-center items-center px-4 py-10 text-center w-[95%] sm:w-[95%] md:w-[95%]    bg-black rounded-2xl relative">
        <div className=" mx-auto space-y-8 w-3/4">
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
      </div>
    </section>
  );
}

export default About;
