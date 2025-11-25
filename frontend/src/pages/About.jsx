import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-16 min-h-screen bg-gradient-to-b from-[#FFF0F2] via-[#FFE5D9] to-[#FFD6C5]">

      {/* Features Section at Top */}
      <div className="text-center pt-12 mb-16">
        <Title text1="WHY" text2="CHOOSE RELOVED" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          {/* Feature Card 1 */}
          <div className="bg-pink-100 rounded-3xl shadow-lg p-6 flex flex-col items-center text-center gap-4 hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center text-pink-600 font-bold text-xl">🌿</div>
            <b className="text-gray-800">Eco-Friendly</b>
            <p className="text-gray-600">Every purchase helps reduce waste and supports sustainability.</p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-pink-100 rounded-3xl shadow-lg p-6 flex flex-col items-center text-center gap-4 hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center text-pink-600 font-bold text-xl">♻️</div>
            <b className="text-gray-800">Curated Quality</b>
            <p className="text-gray-600">We carefully select high-quality pre-loved items for you.</p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-pink-100 rounded-3xl shadow-lg p-6 flex flex-col items-center text-center gap-4 hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center text-pink-600 font-bold text-xl">💖</div>
            <b className="text-gray-800">Stylish Finds</b>
            <p className="text-gray-600">Unique items that blend personality, style, and sustainability.</p>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-pink-100 rounded-3xl shadow-lg p-6 flex flex-col items-center text-center gap-4 hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center text-pink-600 font-bold text-xl">🤝</div>
            <b className="text-gray-800">Community</b>
            <p className="text-gray-600">Join a supportive community that celebrates sustainable fashion.</p>
          </div>
        </div>
      </div>

      {/* Header / Hero Section */}
      <div className="text-center mb-16">
        <Title text1="ABOUT" text2="RELOVED" />
        <p className="mt-4 text-gray-700 max-w-xl mx-auto text-lg">
          Reloved is a sustainable fashion community giving pre-loved items a second life. Stylish, eco-friendly, and meaningful — every piece tells a story.
        </p>
      </div>

      {/* Hero Section Image + Text */}
      <div className="my-16 flex flex-col md:flex-row items-center gap-12">
        <img 
          className="w-full md:max-w-[450px] rounded-3xl shadow-lg" 
          src={assets.about_img} 
          alt="About Reloved" 
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-700">
          <p>
            <span className="font-semibold text-gray-800">Reloved</span> began with the idea that fashion can be sustainable, fun, and affordable. We create a platform where pre-loved items have a second life.
          </p>
          <p>
            Our community loves unique pieces, conscious shopping, and supporting eco-friendly practices — all while keeping style and individuality intact.
          </p>
          <b className="text-gray-800 text-lg">Our Mission</b>
          <p>
            Empower people to make thoughtful choices, embrace sustainability, and enjoy pre-loved fashion that’s as stylish as it is meaningful.
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;
