"use client"

import { motion } from "framer-motion"
import { Download, Briefcase, GraduationCap, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Software Engineer",
    company: "Code Avenue",
    period: "2023 - Present",
    description:
      "Development, optimization, and maintenance of web applications. Collaborated with backend engineers, UI/UX designers, and product stakeholders to deliver seamless and responsive user interfaces.",
  },
  {
    title: "Frontend Developer",
    company: "TechiBits",
    period: "2023",
    description:
      "Developed responsive websites and web applications for various clients using React, Vue.js, and modern CSS frameworks.",
  },
  {
    title: "Internship",
    company: "Pak Brunei ltd",
    period: "2023",
    description:
      "Development, optimization, and maintenance of web applications.",
  },
]

const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "Usman Institute Of Technology",
    period: "2019 - 2023",
    description:
      "Gained strong foundations in software engineering, data structures, algorithms, and modern web technologies. Engaged in practical projects and collaborative work, graduating with honors.",
  },
  {
    degree: "Pre-Engineering",
    school: "SRE-Majeed College",
    period: "2018 - 2019",
    description:
      "Completed intermediate studies with a focus on mathematics, physics, and chemistry, laying the groundwork for a career in engineering and technology.",
  },
];


export default function Resume() {
  const downloadResume = () => {
    // In a real application, this would download an actual PDF file
    const link = document.createElement("a")
    link.href = "/SyedMuhammadZaid-CV.pdf"
    link.download = "SyedMuhammadZaid-CV.pdf"
    link.click()
  }

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">My Resume</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            A journey of continuous learning and professional growth
          </p>

          <motion.button
            onClick={downloadResume}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer inline-flex items-center px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Experience</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-blue-200"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>

                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{exp.title}</h4>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <GraduationCap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-green-200"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-green-600 rounded-full"></div>

                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{edu.degree}</h4>
                    <div className="flex items-center text-green-600 dark:text-blue-400 mb-2">
                      <span className="font-medium">{edu.school}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
