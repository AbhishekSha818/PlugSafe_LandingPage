import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Arnav Ghosh',
      role: 'Lead Engineer',
      image: 'ArnavGhosh',
      bio: 'Full-stack developer specializing in IoT security',
      links: {
        github: 'https://github.com/NotoriousArnav',
        linkedin: 'https://www.linkedin.com/in/arnv2004/',
        twitter: '@arnv2004',
      },
    },
    {
      name: 'Abhishek Sha',
      role: 'Founder of PlugSafe',
      image: 'AbhishekSha',
      bio: 'Security expert with 5+ years in hardware verification',
      links: {
        github: 'https://github.com/AbhishekSha818',
        linkedin: 'https://www.linkedin.com/in/abhishek-sha-ba916a284/',
        twitter: null,
      },
    },
    {
      name: 'Nabarun Dasgupta',
      role: 'ML Specialist',
      image: 'NabarunDasgupta',
      bio: 'AI researcher focused on threat detection systems',
      links: {
        github: null,
        linkedin: null,
        twitter: null,
      },
    },
    {
      name: 'Pratima Mishra',
      role: 'Product Manager',
      image: 'PratimaMishra',
      bio: 'Product strategist with background in cybersecurity',
      links: {
        github: 'https://github.com/11pratima',
        linkedin: 'https://www.linkedin.com/in/pratima-mishra-34ab0328b/',
        twitter: null,
      },
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
              <div className="mb-3 sm:mb-4 inline-block p-3 sm:p-4 bg-primary-green/10 rounded-full group-hover:bg-primary-green group-hover:scale-110 transition-all duration-300 overflow-hidden w-24 h-24 sm:w-28 sm:h-28">
                <img 
                  src={`/${member.image}.jpeg`} 
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
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
                {member.links?.github && (
                  <a 
                    href={member.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 dark:bg-slate-800 rounded-lg hover:bg-primary-green hover:text-slate-900 transition-all duration-300"
                  >
                    <Github size={18} />
                  </a>
                )}
                {member.links?.linkedin && (
                  <a 
                    href={member.links.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 dark:bg-slate-800 rounded-lg hover:bg-primary-green hover:text-slate-900 transition-all duration-300"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
                {member.links?.twitter && (
                  <a 
                    href={`https://twitter.com/${member.links.twitter.replace('@', '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 dark:bg-slate-800 rounded-lg hover:bg-primary-green hover:text-slate-900 transition-all duration-300"
                  >
                    <Twitter size={18} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
