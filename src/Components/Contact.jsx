function Contact() {
  return (
    <section className="relative w-full  py-16 flex items-center justify-center h-screen">
      <div className="container md:w-3/4 text-center px-4 animate-bounce-up-down">
        {/* Heading */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight"
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

      {/* Optional Decorative Elements */}
      <img
        src="/public/FooterAssests_1.png"
        className="absolute top-0 left-1/4 hidden  md:flex  md:w-30 "
        alt="Decoration 1"
      />
      <img
        src="/public/FooterAssests_3.png"
        className="absolute bottom-5 left-[30%] hidden md:flex md:w-30 "
        alt="Decoration 2"
      />
      <img
        src="/public/FooterAssests_2.jpg"
        className="absolute bottom-[40%] right-[15%] hidden md:flex md:w-30 "
        alt="Decoration 3"
      />
    </section>
  );
}

export default Contact;
