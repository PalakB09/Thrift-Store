import React, { useEffect } from "react";

const InstagramScroller = () => {
  const reels = [
    "https://www.instagram.com/reel/DGK0PFIPdqv/embed",
    "https://www.instagram.com/reel/DHlQRdJPUE2/embed",
    "https://www.instagram.com/reel/DEm1bv2PskA/embed",
    "https://www.instagram.com/reel/DH3G8CRPqVQ/embed",
    "https://www.instagram.com/reel/DIGrzhNvkRx/embed",
  ];

  useEffect(() => {
    // Load Instagram embed script once
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="my-10 px-4 sm:px-10">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">Thrift Stories</h2>
        <p className="text-gray-600 mt-2">
          How thrifting positively impacts our environment and community
        </p>
      </div>

      {/* Carousel */}
      <div className="flex overflow-x-auto gap-4 scrollbar-hide">
        {reels.map((url, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-72 sm:w-80 md:w-96 rounded-xl shadow-md p-2 bg-white"
          >
            <blockquote
              className="instagram-media w-full"
              data-instgrm-permalink={url.replace("/embed", "")}
              data-instgrm-version="14"
              style={{ width: "100%" }}
            ></blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramScroller;
