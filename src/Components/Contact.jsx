import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Contact() {
  const formRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    // GSAP Animation for heading
    gsap.from(headingRef.current, {
      y: -50,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
    });

    // GSAP Animation for form
    gsap.from(formRef.current, {
      x: 40,
      opacity: 1,
      duration: 0.6,
      delay: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      id="contact"
      className="relative w-full mx-auto flex flex-col md:flex-row items-center justify-center h-auto gap-20   my-28 "
    >
      {/* Left Section: Heading */}
      <div className="md:w-1/2 w-full text-center md:text-left   animate-bounce-up-down">
        <h1
          ref={headingRef}
          className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight"
          style={{ lineHeight: "1.16" }}
        >
          Let's
          <br />
          Start Working <br />
          <span className="relative inline-block">
            <span className="bg-yellow-500 text-white rounded-xl px-2">
              Together.
            </span>
          </span>{" "}
          <br />
          Get in Touch With
          <br />
          Us!
        </h1>
      </div>

      {/* Right Section: Contact Form */}
      <div
        ref={formRef}
        className=" md:w-1/3 w-3/4 mr-10 md:mr-0 md:mb-10 p-6 bg-white rounded-lg shadow-md flex flex-col" // Change md:w-1/2 to md:w-1/3 for smaller width
      >
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <textarea
            placeholder="Your Message"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-500 text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
