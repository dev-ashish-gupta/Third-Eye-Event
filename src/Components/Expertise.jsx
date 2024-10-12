import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Expertise() {
  const services = [
    {
      title: "Invitation Card Design",
      description:
        "UI/UX design focuses on creating a seamless and meaningful user experience.",
      bgColor: "bg-white",
      textColor: "text-gray-500",
      imageUrl: "/Expertise_1.png",
      imageBg: "bg-[#7DFEFF]",
    },
    {
      title: "Photography and Videography",
      description:
        "Unique products are those that offer something different than competing products.",
      bgColor: "bg-white",
      textColor: "text-gray-500",
      imageUrl: "/Expertise_2.png",
      imageBg: "bg-[#E1D5E3]",
    },
    {
      title: "Entertainment Services",
      description:
        "Aspects of creative marketing include motion, symbols, artwork, and design.",
      bgColor: "bg-white",
      textColor: "text-gray-500",
      imageUrl: "/Expertise_3.png",
      imageBg: "bg-[#6CD1FF]",
    },
    {
      title: "Event Catering",
      description:
        "Offering top-quality catering services, providing delicious meals tailored to your event.",
      bgColor: "bg-white",
      textColor: "text-gray-500",
      imageUrl: "/Expertise_4.png",
      imageBg: "bg-[#FFC857]",
    },
    {
      title: "Venue Decoration",
      description:
        "Expert venue decoration to create the perfect atmosphere for your special event.",
      bgColor: "bg-white",
      textColor: "text-gray-500",
      imageUrl: "/Expertise_5.png",
      imageBg: "bg-[#D1FFD7]",
    },
    {
      title: "Event Coordination",
      description:
        "Ensuring smooth operations, we handle all logistics to make your event stress-free.",
      bgColor: "bg-white",
      textColor: "text-gray-500",
      imageUrl: "/Expertise_6.png",
      imageBg: "bg-[#FFD1DC]",
    },
  ];

  useGSAP(() => {
    gsap.to(".image-div", {
      y: "100%",
      duration: 2,
      ease: "power3.inOut",
      repeat: -1,
      yoyo: true,
      repeatDelay: 1,
    });

    gsap.to(".center-image-div", {
      y: "-100%",
      duration: 2,
      ease: "power3.inOut",
      repeat: -1,
      yoyo: true,
      repeatDelay: 1,
    });
  });
  return (
    <section id="expertise" className=" py-20">
      <div className=" mx-auto text-center space-y-10">
        <h2 className="text-3xl font-bold mb-6">Our Expertise</h2>
        <p className="text-sm text-[#A7A7A7]  ">
          We Specialize in Creating Great Quality Designs <br />
          and Our Team Can Prove it!
        </p>

        <div className="container mx-auto p-4">
          <div className="grid md:grid-cols-3 gap-10 md:gap-0   rounded-xl overflow-hidden ">
            <div className="relative ">
              <div
                // image div
                className={`${services[0].imageBg} image-div hidden md:flex absolute left-0 top-0 h-1/2 w-full p-8  items-center justify-center`}
              >
                <img
                  src={services[0].imageUrl}
                  alt="Abstract Shapes"
                  width={200}
                  height={200}
                />
              </div>
              <div
                className={`${services[0].bgColor}  p-8 mb-5 md:mb-0 flex  border md:border-none flex-col justify-center h-1/2 items-center text-center`}
              >
                <h2 className="text-2xl font-bold mb-4">{services[1].title}</h2>
                <p className={`${services[1].textColor} mb-4`}>
                  {services[1].description}
                </p>
                <a href="#" className="text-yellow-500 hover:underline">
                  Read More
                </a>
              </div>
              <div
                className={`${services[0].bgColor}  p-8 mb-5 md:mb-0 border md:border-none flex flex-col justify-center h-1/2 items-center text-center`}
              >
                <h2 className="text-2xl font-bold mb-4">{services[2].title}</h2>
                <p className={`${services[2].textColor} mb-4`}>
                  {services[2].description}
                </p>
                <a href="#" className="text-yellow-500 hover:underline">
                  Read More
                </a>
              </div>
            </div>
            <div className="relative">
              <div
                // image div
                className={`${services[1].imageBg} center-image-div hidden md:flex absolute left-0 bottom-0 h-1/2 w-full p-8 mb-5 md:mb-0  items-center justify-center`}
              >
                <img
                  src={services[1].imageUrl}
                  alt="Abstract Shapes"
                  width={200}
                  height={200}
                />
              </div>
              <div
                className={`${services[1].bgColor}  p-8 mb-5 md:mb-0 border md:border-none flex flex-col justify-center items-center h-1/2 text-center`}
              >
                <h2 className="text-2xl font-bold mb-4">{services[3].title}</h2>
                <p className={`${services[3].textColor} mb-4`}>
                  {services[3].description}
                </p>
                <a href="#" className="text-yellow-500 hover:underline">
                  Read More
                </a>
              </div>
              <div
                className={`${services[1].bgColor}  p-8 mb-5 md:mb-0 border md:border-none flex flex-col justify-center h-1/2 items-center text-center`}
              >
                <h2 className="text-2xl font-bold mb-4">{services[4].title}</h2>
                <p className={`${services[4].textColor} mb-4`}>
                  {services[4].description}
                </p>
                <a href="#" className="text-yellow-500 hover:underline">
                  Read More
                </a>
              </div>
            </div>
            <div className="relative">
              <div
                // image div
                className={`${services[2].imageBg} image-div hidden md:flex absolute left-0 top-0 w-full  h-1/2 p-8 mb-5 md:mb-0 border md:border-none  items-center justify-center`}
              >
                <img
                  src={services[2].imageUrl}
                  alt="Abstract Shapes"
                  width={200}
                  height={200}
                />
              </div>
              <div
                className={`${services[2].bgColor}  p-8 mb-5 md:mb-0 border md:border-none flex flex-col justify-center items-center h-1/2 text-center`}
              >
                <h2 className="text-2xl font-bold mb-4">{services[5].title}</h2>
                <p className={`${services[5].textColor} mb-4`}>
                  {services[5].description}
                </p>
                <a href="#" className="text-yellow-500 hover:underline">
                  Read More
                </a>
              </div>
              <div
                className={`${services[2].bgColor}  p-8 mb-5 md:mb-0 border md:border-none flex flex-col justify-center items-center h-1/2 text-center`}
              >
                <h2 className="text-2xl font-bold mb-4">{services[0].title}</h2>
                <p className={`${services[0].textColor} mb-4`}>
                  {services[0].description}
                </p>
                <a href="#" className="text-yellow-500 hover:underline">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
