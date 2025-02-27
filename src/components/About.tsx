import { motion } from 'framer-motion';
import { HiOutlineLocationMarker, HiOutlineCode, HiOutlineAcademicCap, HiOutlineBriefcase } from 'react-icons/hi';
import { useEffect, useState } from 'react';

const About = () => {
  const shadowColors = [
    'from-green-200/50 to-green-300/50',
    'from-blue-200/50 to-blue-300/50',
    'from-red-200/50 to-red-300/50',
    'from-orange-200/50 to-orange-300/50',
    'from-purple-200/50 to-purple-300/50',
    'from-pink-200/50 to-pink-300/50',
    'from-teal-200/50 to-teal-300/50'
  ];

  const [currentShadowIndex, setCurrentShadowIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShadowIndex((prev) => (prev + 1) % shadowColors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Computer Science Engineering Student
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed">
                A dedicated Computer Science Engineering student with a strong foundation in programming, data structures, and database management. 
                Passionate about developing user-friendly applications and solving complex problems through innovative solutions.
              </p>
              <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Skills & Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600">
                      <span className="font-semibold">Programming:</span> Proficient in C, Java, Python, and HTML for developing various applications.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-600">
                      <span className="font-semibold">Database Management:</span> Experience with SQL and DBMS for efficient data handling and management.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="text-gray-600">
                      <span className="font-semibold">Problem Solving:</span> Strong analytical skills with expertise in data structures and algorithms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-indigo-50/50 p-6 rounded-xl">
              <div className="flex flex-col items-center text-center">
                <HiOutlineLocationMarker className="w-6 h-6 text-indigo-600 mb-2" />
                <h4 className="font-semibold text-gray-900">Location</h4>
                <p className="text-gray-600">Rayadurg, Andhra Pradesh</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <HiOutlineCode className="w-6 h-6 text-indigo-600 mb-2" />
                <h4 className="font-semibold text-gray-900">Specialization</h4>
                <p className="text-gray-600">Computer Science</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <HiOutlineAcademicCap className="w-6 h-6 text-indigo-600 mb-2" />
                <h4 className="font-semibold text-gray-900">Education</h4>
                <p className="text-gray-600">B.E in CSE (CGPA: 8.6/10)</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <HiOutlineBriefcase className="w-6 h-6 text-indigo-600 mb-2" />
                <h4 className="font-semibold text-gray-900">Availability</h4>
                <p className="text-gray-600">Open to Opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 