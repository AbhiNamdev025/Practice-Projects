import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, ChevronRight, ExternalLink, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Add cursor follower effect
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  // Sample data - replace with your actual resume information
  const resumeData = {
    name: "Your Name",
    title: "Your Profession",
    about: "Passionate professional with expertise in... [your bio]",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "UI/UX Design", level: 80 },
      // Add your skills
    ],
    experience: [
      {
        role: "Your Role",
        company: "Company Name",
        period: "Jan 2020 - Present",
        description: "Key responsibilities and achievements..."
      },
      // Add more experiences
    ],
    education: [
      {
        degree: "Your Degree",
        institution: "University Name",
        year: "2015 - 2019"
      }
    ],
    projects: [
      {
        title: "Project Name",
        description: "Brief description of the project",
        technologies: ["React", "Node.js"],
        link: "#"
      }
    ],
    contact: {
      email: "your.email@example.com",
      phone: "+1 (123) 456-7890",
      linkedin: "linkedin.com/in/yourprofile",
      github: "github.com/yourusername"
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Custom cursor */}
      <motion.div
        className={`fixed w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference ${darkMode ? 'bg-white' : 'bg-black'}`}
        animate={{
          x: cursorPosition.x - 12,
          y: cursorPosition.y - 12,
          scale: 1
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      />

      {/* Main container */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
          >
            {resumeData.name}
          </motion.h1>
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </header>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`sticky top-8 rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}
            >
              <div className="flex flex-col items-center mb-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-4 overflow-hidden">
                  {/* Replace with your image */}
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <span className="text-4xl font-bold">{resumeData.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                </div>
                <h2 className="text-xl font-semibold">{resumeData.title}</h2>
              </div>

              <nav className="space-y-2">
                {['about', 'skills', 'experience', 'projects', 'education', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveSection(item)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${activeSection === item 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
                      : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                  >
                    <span className="capitalize">{item}</span>
                    <ChevronRight size={16} />
                  </button>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* Main section */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`rounded-xl p-8 h-full ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}
              >
                {/* About Section */}
                {activeSection === 'about' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">About Me</h2>
                    <p className="mb-6 leading-relaxed">{resumeData.about}</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h3 className="font-semibold mb-2">Experience</h3>
                        <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                          {resumeData.experience.length}+ years
                        </p>
                      </div>
                      <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h3 className="font-semibold mb-2">Projects</h3>
                        <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                          {resumeData.projects.length}+
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Skills Section */}
                {activeSection === 'skills' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>
                    <div className="space-y-4">
                      {resumeData.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-1">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                          </div>
                          <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1 }}
                              className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Experience Section */}
                {activeSection === 'experience' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
                    <div className="space-y-8">
                      {resumeData.experience.map((exp, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-semibold">{exp.role}</h3>
                              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{exp.company}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                              {exp.period}
                            </span>
                          </div>
                          <p className="mt-4">{exp.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Projects Section */}
                {activeSection === 'projects' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {resumeData.projects.map((project, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ y: -5 }}
                          className={`rounded-xl overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-white shadow-md'}`}
                        >
                          <div className="h-40 bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                            <span className="text-white text-xl font-bold">{project.title}</span>
                          </div>
                          <div className="p-6">
                            <p className="mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.map((tech) => (
                                <span 
                                  key={tech} 
                                  className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <a 
                              href={project.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-blue-500 hover:underline"
                            >
                              View Project <ExternalLink size={16} className="ml-1" />
                            </a>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Education Section */}
                {activeSection === 'education' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Education</h2>
                    <div className="space-y-6">
                      {resumeData.education.map((edu, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
                        >
                          <h3 className="text-xl font-semibold">{edu.degree}</h3>
                          <p className={`mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{edu.institution}</p>
                          <p className={`mt-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{edu.year}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact Section */}
                {activeSection === 'contact' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <Mail size={20} className="mr-3 text-blue-500" />
                            <a href={`mailto:${resumeData.contact.email}`} className="hover:underline">
                              {resumeData.contact.email}
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Phone size={20} className="mr-3 text-blue-500" />
                            <a href={`tel:${resumeData.contact.phone.replace(/\D/g, '')}`} className="hover:underline">
                              {resumeData.contact.phone}
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Linkedin size={20} className="mr-3 text-blue-500" />
                            <a 
                              href={`https://${resumeData.contact.linkedin}`} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {resumeData.contact.linkedin}
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Github size={20} className="mr-3 text-blue-500" />
                            <a 
                              href={`https://${resumeData.contact.github}`} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {resumeData.contact.github}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
                        <form className="space-y-4">
                          <div>
                            <input 
                              type="text" 
                              placeholder="Your Name" 
                              className={`w-full px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            />
                          </div>
                          <div>
                            <input 
                              type="email" 
                              placeholder="Your Email" 
                              className={`w-full px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            />
                          </div>
                          <div>
                            <textarea 
                              placeholder="Your Message" 
                              rows="4"
                              className={`w-full px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            ></textarea>
                          </div>
                          <button
                            type="submit"
                            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                          >
                            Send Message
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;