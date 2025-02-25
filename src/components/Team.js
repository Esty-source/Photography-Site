import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'ATINGI NATELL',
      skills: 'Photography, videography/video editor photo editor',
      image: '/team/atingi.jpg'
    },
    {
      name: 'Adu Marvellous Ohaji',
      skills: 'An aspiring filmmaker and a Photographer',
      image: '/team/adu.jpg'
    },
    {
      name: 'Ewurum Ozinachi (spinach)',
      skills: 'video editing, Photography Videography',
      image: '/team/ewurum.jpg'
    },
    {
      name: 'George Favour Chiamaka',
      skills: 'Graphic Designer\nPhoto Editor\nSocial Media Manager',
      image: '/team/george.jpg'
    }
  ];

  return (
    <section id="team" className="min-h-screen bg-dark-bg p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-white text-5xl font-bold mb-2">Meet Our Team</h1>
          <div className="w-24 h-0.5 bg-white mx-auto"></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-48 h-48 mb-4 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">{member.name}</h3>
              <p className="text-white/80 text-sm text-center">Skills:</p>
              <p className="text-white/80 text-sm text-center whitespace-pre-line">
                {member.skills}
              </p>
            </div>
          ))}
        </div>

        {/* Page Number */}
        <div className="absolute bottom-8 right-8">
          <p className="text-white text-sm">Page | 03</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
