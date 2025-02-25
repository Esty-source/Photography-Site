import React from 'react';

const Introduction = () => {
  return (
    <div className="min-h-screen bg-dark-bg p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <div className="space-y-12">
            {/* Title */}
            <div>
              <h1 className="text-white text-5xl font-bold mb-2">Introduction</h1>
              <div className="w-24 h-0.5 bg-white"></div>
            </div>

            {/* Welcome Text */}
            <p className="text-white/80 leading-relaxed">
              Welcome to Creative Mind Production, where every frame is crafted with purpose and 
              passion. We are a full-service videography and photography production company dedicated 
              to bringing your stories to life. From cinematic films to dynamic photography, our team of 
              experts combines creativity with technical precision to deliver visuals that captivate and 
              inspire audiences. Using state-of-the-art equipment and innovative storytelling techniques, we 
              create stunning content. Creative Mind Production is here to transform your vision into 
              reality with artistry and excellence. Let's create something unforgettable together.
            </p>

            {/* About Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-white text-xl font-semibold mb-4">About Me</h2>
                <p className="text-white/80 leading-relaxed">
                  My Name is Konji Nabil the CEO of CreativeMind Production I'm a 
                  passionate leader with a love for everything through visuals. With years 
                  of experience in photography, video, social media management and videography. 
                  We're not only focused on the artistic but also on building relationships, 
                  building strong partnerships, and staying ahead of industry trends. Their 
                  success is our success, and we proudly work while supporting the team to 
                  create outstanding content that clients love.
                </p>
              </div>
              <div>
                <h2 className="text-white text-xl font-semibold mb-4">About Portfolio</h2>
                <p className="text-white/80 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Page Number */}
        <div className="absolute bottom-8 right-8">
          <p className="text-white text-sm">Page | 02</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
