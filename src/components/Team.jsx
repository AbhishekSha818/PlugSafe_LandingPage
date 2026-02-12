import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CTO',
      image: '👨‍💼',
      bio: 'Security expert with 10+ years in hardware verification',
    },
    {
      name: 'Sarah Williams',
      role: 'Lead Engineer',
      image: '👩‍💻',
      bio: 'Full-stack developer specializing in IoT security',
    },
    {
      name: 'Mike Chen',
      role: 'ML Specialist',
      image: '👨‍🔬',
      bio: 'AI researcher focused on threat detection systems',
    },
    {
      name: 'Emma Davis',
      role: 'Product Manager',
      image: '👩‍💼',
      bio: 'Product strategist with background in cybersecurity',
    },
  ];

  return (
    <section
      id="team"
      className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 transition-colors duration-300">
            Meet Our <span className="text-primary-green">Team</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 transition-colors duration-300">
            Dedicated experts working to keep your devices safe
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-700 transition-all duration-300 hover:border-primary-green hover:shadow-lg hover:shadow-primary-green/20 text-center group cursor-pointer transform hover:-translate-y-2"
            >
              {/* Avatar */}
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4 inline-block p-3 sm:p-4 bg-primary-green/10 rounded-full group-hover:bg-primary-green group-hover:scale-110 transition-all duration-300">
                {member.image}
              </div>

              {/* Name */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1 sm:mb-2 transition-colors duration-300">
                {member.name}
              </h3>

              {/* Role */}
              <div className="text-sm sm:text-base text-primary-green font-semibold mb-2 sm:mb-3">
                {member.role}
              </div>

              {/* Bio */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4 sm:mb-6 transition-colors duration-300">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-2 sm:gap-3">
                <button className="p-2 bg-gray-100 dark:bg-slate-800 rounded-lg hover:bg-primary-green hover:text-slate-900 transition-all duration-300">
                  <Github size={18} />
                </button>
                <button className="p-2 bg-gray-100 dark:bg-slate-800 rounded-lg hover:bg-primary-green hover:text-slate-900 transition-all duration-300">
                  <Linkedin size={18} />
                </button>
                <button className="p-2 bg-gray-100 dark:bg-slate-800 rounded-lg hover:bg-primary-green hover:text-slate-900 transition-all duration-300">
                  <Twitter size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
