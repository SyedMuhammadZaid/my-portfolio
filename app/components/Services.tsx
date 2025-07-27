"use client"

import { motion } from "framer-motion"
import { Code, Palette, Smartphone, Globe, Database, Zap } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building responsive and performant web applications using modern technologies like React, Next.js, and Node.js.",
  },
  // {
  //   icon: Palette,
  //   title: "UI/UX Design",
  //   description: "Creating intuitive and beautiful user interfaces with a focus on user experience and accessibility.",
  // },
  // {
  //   icon: Smartphone,
  //   title: "Mobile Development",
  //   description: "Developing cross-platform mobile applications using React Native and Flutter for iOS and Android.",
  // },
  {
    icon: Globe,
    title: "SEO Optimization",
    description: "Optimizing websites for search engines to improve visibility and drive organic traffic.",
  },
  // {
  //   icon: Database,
  //   title: "Backend Development",
  //   description: "Building robust APIs and server-side applications with databases and cloud services.",
  // },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Improving website speed and performance through code optimization and best practices.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">My Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I offer a comprehensive range of services to help bring your digital vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{service.title}</h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
