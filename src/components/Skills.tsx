import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'C', proficiency: 90 },
        { name: 'Java', proficiency: 85 },
        { name: 'Python', proficiency: 80 },
        { name: 'HTML', proficiency: 85 },
      ]
    },
    {
      category: 'Technologies & Frameworks',
      items: [
        { name: 'SQL', proficiency: 85 },
        { name: 'Data Structures', proficiency: 90 },
        { name: 'DBMS', proficiency: 85 },
        { name: 'Machine Learning', proficiency: 75 },
      ]
    },
    {
      category: 'Tools',
      items: [
        { name: 'VS Code', proficiency: 90 },
        { name: 'Git', proficiency: 80 },
        { name: 'MySQL', proficiency: 85 },
        { name: 'Jupyter Notebook', proficiency: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            I've developed a diverse set of technical skills throughout my education and projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  {skillGroup.category}
                </h3>
                <div className="space-y-6">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.1 + groupIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <motion.div
                          className="h-2.5 rounded-full bg-indigo-600"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 + groupIndex * 0.1 }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-medium text-gray-900 mb-2">AWS Certified</h4>
              <p className="text-gray-600">Professional certification in Amazon Web Services cloud infrastructure</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-medium text-gray-900 mb-2">DevOps Engineer Certification</h4>
              <p className="text-gray-600">Professional certification in DevOps practices and methodologies</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 