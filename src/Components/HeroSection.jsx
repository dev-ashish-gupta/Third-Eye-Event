import gsap from "gsap";
import { useRef, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa6";
function Hero() {
  const MainHeading = useRef(null);
  const SpanElement = useRef(null);
  const pot = useRef(null);
  const arrow = useRef(null);
  const UPDOWN = useRef(null);
  const Pink = useRef(null);
  const ElementDiv = useRef(null);
  const Button = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    // Fade in the main heading smoothly
    tl.to([MainHeading.current, ElementDiv.current], {
      opacity: 1,
      duration: 1.5, // Extended duration for a smoother fade-in
    })
      // Animate the yellow span's width from 0 to 100% with smooth easing
      .to(SpanElement.current, {
        width: "100%",
        duration: 1,
        y: 10,
        padding: 5,
      })
      // Rotate the span slightly for a subtle effect
      .to(SpanElement.current, {
        rotate: -5,
        duration: 0.4, // Short duration for a quick rotation
        ease: "power2.inout",
      })
      .to(UPDOWN.current, {
        y: -20,
        repeat: -1,
        duration: 1,
        yoyo: true,
        ease: "power1.inOut",
      })
      .to(Pink.current, {
        scale: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      })
      .to(pot.current, {
        rotate: -15,
        repeat: -1,
        duration: 1.2,
        yoyo: true,
        ease: "power1.inOut",
      })
      .to(arrow.current, {
        rotate: 10,
        repeat: -1,
        duration: 1.2,
        yoyo: true,
        ease: "power1.inOut",
      });
  }, []);

  return (
    <section
      id="home"
      className="relative w-full bg-white py-16 md:flex items-center justify-center h-screen"
    >
      <div className="flex justify-center items-center md:hidden">
        <div className="text-white p-6 mx-auto">
          <div className="flex items-center ml-8  mb-4">
            <img
              src="/Man.png"
              alt="Profile picture"
              className="rounded-full w-16 h-16 absolute  "
            />
            <div className="border-yellow-400 border ml-10 rounded-full p-5 w-14 h-14 flex items-center justify-center"></div>
          </div>
          <h2 className="text-xs text-center font-bold text-gray-500">
            Welcome to Third Eye Event
          </h2>
          <p className="text-xs text-center text-gray-400">
            Your vision, our magic!
          </p>
        </div>
      </div>
      <div className="absolute z-10 container md:w-3/4 text-center px-4">
        {/* Heading */}
        <h1
          ref={MainHeading}
          className="MainHeading text-6xl md:text-8xl font-bold mb-4 opacity-0"
          style={{ lineHeight: "1" }}
        >
          We Create
          <br />
          <span className="relative inline-block items-center justify-center">
            <span
              ref={SpanElement}
              className="bg-yellow-500 text-white  rounded-xl p-0 py-3 "
              style={{
                width: "0",
                display: "inline-block",
                overflow: "hidden",
              }}
            >
              Unique
            </span>
          </span>
          Events
          <br />
          Everyday
        </h1>
        <div>
          <p className="text-base text-gray-500 md:hidden">
            <span className="bg-yellow-500 text-white px-2 rounded-full">
              50+
            </span>{" "}
            Events Completed
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center items-center">
          <button
            ref={Button}
            className="bg-[#6CD1FF] w-fit rounded-md text-white py-4 px-6 mt-5 transition duration-300"
          >
            Plan Your Event Today!
          </button>
        </div>
      </div>

      {/* Optional Decorative Elements */}
      <div
        ref={ElementDiv}
        className="absolute z-5 container mx-auto w-3/4 h-3/4 opacity-0 hidden md:flex "
      >
        <div ref={UPDOWN} className="absolute top-0 left-0 w-64 h-64   ">
          <img src="/Herosection_1.png" />
          <img
            ref={Pink}
            src="/Herosection_assest.png"
            className="absolute top-0 "
          />
        </div>
        <div ref={pot} className="absolute bottom-0 right-0 w-64 h-64  ">
          <img src="/Herosection_4.png" />
        </div>
        <div className="absolute top-0 right-0">
          <div className="text-white p-6 mx-auto">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/Man.png"
                alt="Profile picture"
                className="rounded-full w-16 h-16 absolute left-0 z-10"
              />
              <div
                ref={arrow}
                className="border-yellow-400 border text-yellow-300 rounded-full -rotate-90  w-14 h-14 flex items-center justify-center"
              >
                <FaArrowDown size={30} />
              </div>
            </div>
            <h2 className="text-xs text-left font-bold text-gray-500">
              Welcome to Third Eye Event
            </h2>
            <p className="text-xs text-left text-gray-400">
              Your vision, our magic!
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-32 h-32">
          <img src="/950+.png" />
          <p className="text-xs text-gray-500">Events Completed</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
