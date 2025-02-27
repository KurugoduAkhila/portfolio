import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[50vh] md:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-6">
        <div className="text-center pt-16 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-3">
              Hi, I'm <span className="text-indigo-600">Kurugodu Akhila</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-lg md:text-3xl text-gray-600 mb-6">
              Computer Science Engineer
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <div className="flex justify-center space-x-6">
              <a
                href="https://linkedin.com/in/kurugodu-akhila-7444bb259"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <FaLinkedinIn className="h-6 w-6" />
              </a>
              <a
                href="mailto:kurugoduakhila02@gmail.com"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              >
                <span className="sr-only">Email</span>
                <HiMail className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/KurugoduAkhila"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              >
                <span className="sr-only">GitHub</span>
                <FaGithub className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 