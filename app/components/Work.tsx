"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Mobrage",
    category: "Web",
    image: "/mobrageLogo.png",
    description: "Built a B2C web platform for car mechanic services with user and service provider interfaces, including features like authentication, chat, bookings, roles, panel and payments.",
    tech: ["React", "Stripe", "Tailwind CSS", "Firebase", "Sockets"],
    liveUrl: "https://app.mobrage.com",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Guyana",
    category: "Web",
    image: "/inmateLogo.png",
    description: "Worked on the Master App and Prison Management modules for a government system. Built dynamic, role-based forms with complex conditional logic to support multi-user workflows and data accuracy.",
    tech: ["React", "Redux Toolkit", "TypeScript", "React Hook Forms"],
    liveUrl: "https://inmate.stg.guyana2030.net/login",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Sentinel",
    category: "Web",
    image: "/sentinelLogo.png",
    description: "Developed a role-based security guard management platform. Features included different roles,  one-on-one chat using sockets, secure authentication, shift scheduling and attendance tracking.",
    tech: ["React", "Tailwind CSS", "Redux", "Saga", "Sockets", "Firebase"],
    liveUrl: "https://app.sts.5stardesigners.net/login",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "TRKR",
    category: "Web",
    image: "/trkrLogo.png",
    description: "Maintaining a multi-vendor e-commerce platform where vendors list products, users make purchases, and the admin manages logistics. Handling bug fixes, performance improvements, and minor feature updates as needed.",
    tech: ["React", "Chart.js", "Redux", "CSS Modules"],
    liveUrl: "https://app.main-frame.com/#/admin/signin",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Classique",
    category: "Web",
    image: "/classiqueLogo.png",
    description: "Whether you need a reliable ride for your journey or want to explore breathtaking destinations, website offer seamless booking, competitive rates, and a hassle-free experience to make your travels unforgettable.",
    tech: ["React", "Ant-design", "Zustand", "Tailwind"],
    liveUrl: "https://classiquecarrental.com/",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "E Guard",
    category: "Web",
    image: "/placeholder.svg?height=300&width=400",
    description: "Developed a responsive admin panel to manage users, handle emergency requests, display dashboards, and visualize data through interactive graphs.",
    tech: ["React", "TypeScript", "Redux Toolkit", "Ant-Design"],
    liveUrl: "https://eguard.5stardesigners.net/uat/",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "African Witch",
    category: "Web",
    image: "/placeholder.svg?height=300&width=400",
    description: "Developed the admin panel for a social media app to manage users, posts, reports, and platform settings. Included dashboards, analytics.",
    tech: ["React", "Redux", "Saga", "Firebase", "Ant-Design"],
    liveUrl: "https://awitch.5stardesigners.net/admin-panel-uat/",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "Programming Blog",
    category: "Web",
    image: "/placeholder.svg?height=300&width=400",
    description: "A webiste for programmers to share blogs and insights. Admins have more control over content and users, while authentication keeps everything secure.",
    tech: ["React", "Express", "MongoDB", "Firebase", "Ant-Design"],
    liveUrl: "https://mern-blog-ea4i.onrender.com/",
    githubUrl: "#",
  },
  {
    id: 9,
    title: "Tomato Food Delivery",
    category: "Web",
    image: "/placeholder.svg?height=300&width=400",
    description: "Developed an online food ordering platform where you can browse, filter, and choose your favorite dishes with ease. while the admin panel allows for seamless order tracking and status management.",
    tech: ["React", "Express", "MongoDB"],
    liveUrl: "https://tomato-food-del-frontend.vercel.app/",
    githubUrl: "#",
  },
]

const categories = ["All", "Web", "Mobile"]

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="work" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">My Work</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                  ? "bg-blue-600 dark:bg-blue-500 text-white shadow-lg"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects?.length > 0 ?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative group">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover object-bottom"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      target="_blank"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    {/* <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a> */}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))
            }
          </div>
          :
          <p className="text-center text-gray-600 dark:text-gray-300">No Active Projects For This Category.</p>
        }

      </div>
    </section>
  )
}
