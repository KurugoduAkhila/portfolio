import { motion } from 'framer-motion';

const projectsData = [
  {
    title: 'E-Appointment Application',
    description: 'Developed an Android-based appointment booking app with user authentication, scheduling, and real-time notifications using Java/Kotlin and Firebase. Implemented secure user profiles and appointment management.',
    image: 'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg',
    tags: ['Android', 'Java', 'Kotlin', 'Firebase', 'Real-time Database', 'Authentication'],
    liveUrl: '#'
  },
  {
    title: 'Online Voting System',
    description: 'Developed a user-friendly interactive voting system ensuring data integrity and confidentiality. Implemented secure authentication and vote counting mechanisms.',
    image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=1170&auto=format&fit=crop',
    tags: ['C', 'Data Structures', 'User Authentication', 'Security'],
    liveUrl: '#'
  },
  {
    title: 'Loan Prediction using Machine Learning',
    description: 'Built a machine learning model predicting loan eligibility using pandas and scikit-learn, achieving high accuracy. Implemented data preprocessing, feature engineering, and model evaluation.',
    image: 'https://images.unsplash.com/photo-1589758438368-0ad531db3366?q=80&w=1170&auto=format&fit=crop',
    tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Data Analysis'],
    liveUrl: '#'
  },
  {
    title: 'Hotel Management System',
    description: 'Developed a system to manage reservations, customer data, and billing using SQL and CRUD operations. Implemented database design with proper relationships and constraints.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1170&auto=format&fit=crop',
    tags: ['DBMS', 'SQL', 'Database Design', 'CRUD Operations'],
    liveUrl: '#'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my key projects, showcasing my skills in mobile development, programming, and database management
          </p>
        </motion.div>

        {/* Featured Project */}
        <div className="mb-16">
          <motion.div
            key="featured-project"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative overflow-hidden group h-64 md:h-auto">
                <img
                  src={projectsData[0].image}
                  alt={projectsData[0].title}
                  className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="mb-2">
                  <span className="px-3 py-1 bg-indigo-600 text-white rounded-full text-sm inline-block mb-3">Featured Project</span>
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">{projectsData[0].title}</h3>
                <p className="text-gray-600 mb-6">{projectsData[0].description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projectsData[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm text-center"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.slice(1).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden group">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-48 transform transition-transform duration-300 group-hover:scale-110 filter brightness-95 contrast-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 backdrop-blur-sm bg-black/30">
                  <h4 className="text-lg font-semibold">{project.title}</h4>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-1 min-h-[100px]">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm text-center"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 