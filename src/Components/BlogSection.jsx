import { useRef, useState } from "react";
import { gsap } from "gsap";

function Blog() {
  const videoRefs = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // GSAP Animation on Hover
  const handleMouseEnter = (index) => {
    gsap.to(videoRefs.current[index], { scale: 1.05, duration: 0.3 });
    setHoveredIndex(index); // Set the hovered index
  };

  const handleMouseLeave = (index) => {
    gsap.to(videoRefs.current[index], { scale: 1, duration: 0.3 });
    setHoveredIndex(null); // Reset hovered index
  };

  // Video Data
  const videos = [
    {
      id: 1,
      title: "SPN Wedding Chapter 02",
      description:
        "Chapter 2 of A memorable wedding by Third Eye Event - edit by atif",
      thumbnail: "https://img.youtube.com/vi/FET9K7S93jw/hqdefault.jpg",
      videoId: "FET9K7S93jw",
    },
    {
      id: 2,
      title: "The Memorable night in JPM Public School",
      description: "Annual function",
      thumbnail: "https://img.youtube.com/vi/8DnQheydRfE/hqdefault.jpg",
      videoId: "8DnQheydRfE",
    },
    {
      id: 3,
      title: "Gautam GS Profile ",
      description: "Beloved Founder !",
      thumbnail: "https://img.youtube.com/vi/A4Z2rY8iPps/hqdefault.jpg", // Thumbnail for the new video
      videoId: "A4Z2rY8iPps", // New YouTube video ID
    },
  ];

  return (
    <section id="blog" className="py-20 space-y-5">
      <h1 className="text-4xl font-bold text-center">Blog Post's</h1>
      <p className="text-sm text-[#A7A7A7] text-center">
        We Specialize in Creating Great Quality Designs <br />
        and Our Team Can Prove it!
      </p>
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div
            key={video.id}
            ref={(el) => (videoRefs.current[index] = el)}
            className="bg-white rounded-lg shadow-md overflow-hidden relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-48 object-cover"
            />
            <iframe
              className={`absolute inset-0 w-full h-48 transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
              src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1`}
              title={video.title}
              frameBorder="0"
              allowFullScreen
              style={{
                pointerEvents: hoveredIndex === index ? "auto" : "none",
              }} // Enable interaction on hover
            ></iframe>
            <div className="content-block p-4">
              <span className="inline-block bg-yellow-400 text-white text-sm font-semibold px-2 rounded mb-2">
                Third Eye Events
              </span>
              <h3 className="text-xl text-black font-semibold">
                {video.title}
              </h3>
              <p className="text-gray-600">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
