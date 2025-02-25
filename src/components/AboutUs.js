import React from 'react';

const AboutUs = () => {
  return (
    <section id="about-us" className="min-h-screen bg-dark-bg p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Image Banner */}
        <div className="grid grid-cols-3 gap-4 mb-24">
          <div className="h-[400px] overflow-hidden">
            <img
              src="/about/1.jpg"
              alt="Portrait 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[400px] overflow-hidden">
            <img
              src="/about/2.jpg"
              alt="Portrait 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[400px] overflow-hidden">
            <img
              src="/about/3.jpg"
              alt="Portrait 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* About Us Title */}
          <div className="md:col-span-4">
            <h1 className="text-white text-7xl font-bold mb-4">About Us</h1>
            <div className="w-40 h-0.5 bg-white"></div>
          </div>

          {/* Vision Section */}
          <div className="md:col-span-4 space-y-4">
            <h2 className="text-white text-2xl font-semibold">Our Vision</h2>
            <p className="text-white/80 leading-relaxed text-sm">
              Our vision is to be a leading force in creating cinematic experiences that inspire, engage, and 
              connect brands with their audience. We strive to seamlessly blend the artistry of photography and 
              cinematography with the power of strategic social media management, crafting compelling visual 
              narratives that resonate and endure. Our goal is to help businesses build meaningful relationships, 
              boost their online presence, and create social media content that stands out all while maintaining 
              a commitment to creativity, innovation, and excellence.
            </p>
          </div>

          {/* Mission Section */}
          <div className="md:col-span-4 space-y-4">
            <h2 className="text-white text-2xl font-semibold">My Mission</h2>
            <p className="text-white/80 leading-relaxed text-sm">
              Our mission is to deliver exceptional cinematography and expert social media management that 
              elevates brands and engages audiences. We specialize in creating visual content that tells 
              unique stories, while strategically managing social media to drive growth and establish a 
              powerful online presence. Through creativity, collaboration, and a deep understanding of 
              digital media, we help our clients thrive in today's competitive landscape.
            </p>
          </div>
        </div>

        {/* Page Number */}
        <div className="absolute bottom-8 right-8">
          <p className="text-white text-sm">Page | 03</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
