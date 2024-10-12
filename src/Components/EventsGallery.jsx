// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const events = [
//   { id: 1, title: "Outdoor Wedding", image: "/public/GalleryBox1.png" },
//   { id: 2, title: "Elegant Reception", image: "/public/GalleryBox2.png" },
//   { id: 3, title: "Haldi Function", image: "/public/GalleryBox3.png" },
//   { id: 4, title: "Colorful Celebration", image: "/public/GalleryBox4.png" },
//   { id: 5, title: "Traditional Gathering", image: "/public/GalleryBox5.png" },
//   { id: 6, title: "Wedding Reception", image: "/public/GalleryBox6.png" },
// ];

// export default function Event() {
//   const [hoveredId, setHoveredId] = useState(null);
//   const imagesRef = useRef([]);

//   useEffect(() => {
//     // Create timelines for each image for scroll-triggered animations
//     imagesRef.current.forEach((el, index) => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: el,
//           start: "top 80%", // Starts animation when image is 80% from the top of the viewport
//           toggleActions: "play none none reverse", // Play on scroll, reverse on exit
//         },
//       });

//       tl.fromTo(
//         el,
//         { scale: 1.1, opacity: 0 },
//         {
//           scale: 1,
//           opacity: 1,
//           duration: .8, // Smooth duration
//           ease: "none",
//         }
//       );
//     });
//   }, []);

//   const handleHover = (index, enter = true) => {
//     const tl = gsap.timeline();
//     tl.to(imagesRef.current[index], {
//       scale: enter ? 1.1 : 1, // Scale up on hover in, scale down on hover out
//       duration: 0.6, // Smooth duration for hover effect
//       ease: "none", // Smooth easing
//     });
//   };

//   return (
//     <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto w-[90%]">
//         <div className="flex justify-between items-center mb-12">
//           <h2 className="text-3xl sm:text-4xl font-bold">
//             Here's some of our{" "}
//             <span className="bg-yellow-400 text-black px-2">Events</span>,<br />
//             created for our beloved clients.
//           </h2>
//           <button className="bg-yellow-400 text-black px-4 py-2 rounded-md flex items-center">
//             View All Projects
//           </button>
//         </div>
//         <div className="space-y-4">
//           {events.map((event, index) =>
//             index % 2 === 0 ? (
//               <div
//                 key={event.id}
//                 className={`grid grid-cols-2 gap-4 h-[50vh] ${
//                   index % 4 === 0
//                     ? "grid-cols-[35%_65%]"
//                     : "grid-cols-[65%_35%]"
//                 }`}
//               >
//                 <div
//                   className="relative overflow-hidden rounded-lg"
//                   onMouseEnter={() => {
//                     setHoveredId(event.id);
//                     handleHover(index, true); // Trigger hover animation
//                   }}
//                   onMouseLeave={() => {
//                     setHoveredId(null);
//                     handleHover(index, false); // Revert hover animation
//                   }}
//                 >
//                   <img
//                     src={event.image}
//                     alt={event.title}
//                     ref={(el) => (imagesRef.current[index] = el)} // Reference for GSAP
//                     className="w-full h-full object-cover transition-transform ease-in-out"
//                   />
//                   {hoveredId === event.id && (
//                     <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                       <h3 className="text-white text-xl font-semibold">
//                         {event.title}
//                       </h3>
//                     </div>
//                   )}
//                 </div>
//                 {index + 1 < events.length && (
//                   <div
//                     className="relative overflow-hidden rounded-lg"
//                     onMouseEnter={() => {
//                       setHoveredId(events[index + 1].id);
//                       handleHover(index + 1, true); // Trigger hover animation
//                     }}
//                     onMouseLeave={() => {
//                       setHoveredId(null);
//                       handleHover(index + 1, false); // Revert hover animation
//                     }}
//                   >
//                     <img
//                       src={events[index + 1].image}
//                       alt={events[index + 1].title}
//                       ref={(el) => (imagesRef.current[index + 1] = el)} // Reference for GSAP
//                       className="w-full h-full object-cover transition-transform ease-in-out"
//                     />
//                     {hoveredId === events[index + 1].id && (
//                       <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                         <h3 className="text-white text-xl font-semibold">
//                           {events[index + 1].title}
//                         </h3>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>
//             ) : null
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const events = [
  { id: 1, title: "Outdoor Wedding", image: "/public/GalleryBox1.png" },
  { id: 2, title: "Elegant Reception", image: "/public/GalleryBox2.png" },
  { id: 3, title: "Haldi Function", image: "/public/GalleryBox3.png" },
  { id: 4, title: "Colorful Celebration", image: "/public/GalleryBox4.png" },
  { id: 5, title: "Traditional Gathering", image: "/public/GalleryBox5.png" },
  { id: 6, title: "Wedding Reception", image: "/public/GalleryBox6.png" },
];

export default function Event() {
  const [hoveredId, setHoveredId] = useState(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    // Create timelines for each image for scroll-triggered animations
    imagesRef.current.forEach((el, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // Starts animation when image is 80% from the top of the viewport
          toggleActions: "play none none reverse", // Play on scroll, reverse on exit
        },
      });

      tl.fromTo(
        el,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8, // Smooth duration
          ease: "none",
        }
      );
    });
  }, []);

  const handleHover = (index, enter = true) => {
    const tl = gsap.timeline();
    tl.to(imagesRef.current[index], {
      scale: enter ? 1.1 : 1, // Scale up on hover in, scale down on hover out
      duration: 0.6, // Smooth duration for hover effect
      ease: "none", // Smooth easing
    });
  };

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center md:text-left mb-4 md:mb-0">
            Here's some of our{" "}
            <span className="bg-yellow-400 text-black px-2">Events</span>,<br />
            created for our beloved clients.
          </h2>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-md flex items-center">
            View All Projects
          </button>
        </div>
        <div className="space-y-4">
          {events.map((event, index) =>
            index % 2 === 0 ? (
              <div
                key={event.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-4 h-[50vh] ${
                  index % 4 === 0
                    ? "md:grid-cols-[35%_65%]"
                    : "md:grid-cols-[65%_35%]"
                }`}
              >
                <div
                  className="relative overflow-hidden rounded-lg"
                  onMouseEnter={() => {
                    setHoveredId(event.id);
                    handleHover(index, true); // Trigger hover animation
                  }}
                  onMouseLeave={() => {
                    setHoveredId(null);
                    handleHover(index, false); // Revert hover animation
                  }}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    ref={(el) => (imagesRef.current[index] = el)} // Reference for GSAP
                    className="w-full h-full object-cover transition-transform ease-in-out"
                  />
                  {hoveredId === event.id && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                      <h3 className="text-white text-xl font-semibold">
                        {event.title}
                      </h3>
                    </div>
                  )}
                </div>
                {index + 1 < events.length && (
                  <div
                    className="relative overflow-hidden rounded-lg"
                    onMouseEnter={() => {
                      setHoveredId(events[index + 1].id);
                      handleHover(index + 1, true); // Trigger hover animation
                    }}
                    onMouseLeave={() => {
                      setHoveredId(null);
                      handleHover(index + 1, false); // Revert hover animation
                    }}
                  >
                    <img
                      src={events[index + 1].image}
                      alt={events[index + 1].title}
                      ref={(el) => (imagesRef.current[index + 1] = el)} // Reference for GSAP
                      className="w-full h-full object-cover transition-transform ease-in-out"
                    />
                    {hoveredId === events[index + 1].id && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <h3 className="text-white text-xl font-semibold">
                          {events[index + 1].title}
                        </h3>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}
