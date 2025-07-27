"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Code2, Database, Smartphone, Cloud, Palette, Settings, Star, TrendingUp } from "lucide-react"

const techCategories = [
    {
        id: "frontend",
        name: "Frontend",
        icon: Code2,
        color: "blue",
        technologies: [
            { name: "React", level: 95, experience: "2+ years" },
            { name: "Next.js", level: 90, experience: "2+ years" },
            { name: "TypeScript", level: 88, experience: "2+ years" },
            { name: "JavaScript", level: 95, experience: "2+ years" },
            { name: "HTML/CSS", level: 98, experience: "2+ years" },
            { name: "Tailwind CSS", level: 92, experience: "2+ years" },
            // { name: "Vue.js", level: 75, experience: "2+ years" },
            { name: "Sass/SCSS", level: 85, experience: "2+ years" },
        ],
    },
    {
        id: "backend",
        name: "Backend",
        icon: Database,
        color: "green",
        technologies: [
            { name: "Node.js", level: 70, experience: "2+ years" },
            { name: "Express.js", level: 70, experience: "2+ years" },
            // { name: "Python", level: 82, experience: "3+ years" },
            // { name: "PostgreSQL", level: 85, experience: "3+ years" },
            { name: "MongoDB", level: 70, experience: "2+ years" },
            // { name: "Redis", level: 75, experience: "2+ years" },
            // { name: "GraphQL", level: 78, experience: "2+ years" },
            { name: "REST APIs", level: 92, experience: "2+ years" },
        ],
    },
    // {
    //     id: "mobile",
    //     name: "Mobile",
    //     icon: Smartphone,
    //     color: "purple",
    //     technologies: [
    //         { name: "React Native", level: 85, experience: "2+ years" },
    //         { name: "Flutter", level: 70, experience: "1+ years" },
    //         { name: "Expo", level: 80, experience: "2+ years" },
    //         { name: "iOS Development", level: 65, experience: "1+ years" },
    //         { name: "Android Development", level: 68, experience: "1+ years" },
    //     ],
    // },
    {
        id: "cloud",
        name: "Cloud & DevOps",
        icon: Cloud,
        color: "orange",
        technologies: [
            // { name: "AWS", level: 82, experience: "3+ years" },
            { name: "Vercel", level: 90, experience: "2+ years" },
            // { name: "Docker", level: 78, experience: "2+ years" },
            { name: "Git/GitHub", level: 95, experience: "2+ years" },
            { name: "CI/CD", level: 80, experience: "2+ years" },
            { name: "Netlify", level: 85, experience: "2+ years" },
        ],
    },
    {
        id: "design",
        name: "Design & Tools",
        icon: Palette,
        color: "pink",
        technologies: [
            { name: "Figma", level: 88, experience: "2+ years" },
            { name: "Adobe XD", level: 75, experience: "2+ years" },
            // { name: "Photoshop", level: 70, experience: "3+ years" },
            { name: "Framer Motion", level: 85, experience: "2+ years" },
            // { name: "Three.js", level: 65, experience: "1+ years" },
        ],
    },
    {
        id: "tools",
        name: "Development Tools",
        icon: Settings,
        color: "gray",
        technologies: [
            { name: "VS Code", level: 95, experience: "3+ years" },
            { name: "Webpack", level: 75, experience: "2+ years" },
            { name: "Vite", level: 85, experience: "2+ years" },
            { name: "Jest", level: 80, experience: "2+ years" },
            { name: "Cypress", level: 70, experience: "1+ years" },
            { name: "ESLint", level: 88, experience: "3+ years" },
        ],
    },
]

const colorVariants = {
    blue: {
        bg: "bg-blue-100 dark:bg-blue-900/30",
        text: "text-blue-600 dark:text-blue-400",
        bar: "bg-blue-500",
        border: "border-blue-200 dark:border-blue-800",
    },
    green: {
        bg: "bg-green-100 dark:bg-green-900/30",
        text: "text-green-600 dark:text-green-400",
        bar: "bg-green-500",
        border: "border-green-200 dark:border-green-800",
    },
    purple: {
        bg: "bg-purple-100 dark:bg-purple-900/30",
        text: "text-purple-600 dark:text-purple-400",
        bar: "bg-purple-500",
        border: "border-purple-200 dark:border-purple-800",
    },
    orange: {
        bg: "bg-orange-100 dark:bg-orange-900/30",
        text: "text-orange-600 dark:text-orange-400",
        bar: "bg-orange-500",
        border: "border-orange-200 dark:border-orange-800",
    },
    pink: {
        bg: "bg-pink-100 dark:bg-pink-900/30",
        text: "text-pink-600 dark:text-pink-400",
        bar: "bg-pink-500",
        border: "border-pink-200 dark:border-pink-800",
    },
    gray: {
        bg: "bg-gray-100 dark:bg-gray-700",
        text: "text-gray-600 dark:text-gray-400",
        bar: "bg-gray-500",
        border: "border-gray-200 dark:border-gray-600",
    },
}

export default function Technologies() {
    const [activeCategory, setActiveCategory] = useState("frontend")

    const activeData = techCategories.find((cat) => cat.id === activeCategory)

    return (
        <section id="technologies" className="pt-20 pb-14 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">Technologies & Skills</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Here are the technologies and tools I've mastered throughout my development journey
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {techCategories.map((category) => {
                        const colors = colorVariants[category.color as keyof typeof colorVariants]
                        const isActive = activeCategory === category.id

                        return (
                            <motion.button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${isActive
                                        ? `${colors.bg} ${colors.text} ${colors.border} border-2 shadow-lg`
                                        : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
                                    }`}
                            >
                                <category.icon className="w-5 h-5" />
                                <span>{category.name}</span>
                            </motion.button>
                        )
                    })}
                </motion.div>

                {/* Active Category Content */}
                {activeData && (
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8"
                    >
                        <div className="flex items-center mb-8">
                            <div
                                className={`w-12 h-12 ${colorVariants[activeData.color as keyof typeof colorVariants].bg} rounded-full flex items-center justify-center mr-4`}
                            >
                                <activeData.icon
                                    className={`w-6 h-6 ${colorVariants[activeData.color as keyof typeof colorVariants].text}`}
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{activeData.name}</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {activeData.technologies.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="space-y-3"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <h4 className="font-semibold text-gray-800 dark:text-white">{tech.name}</h4>
                                            {tech.level >= 90 && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
                                            {tech.level >= 85 && tech.level < 90 && <TrendingUp className="w-4 h-4 text-green-500" />}
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-sm text-gray-500 dark:text-gray-400">{tech.experience}</span>
                                            <span
                                                className={`text-sm font-medium ${colorVariants[activeData.color as keyof typeof colorVariants].text}`}
                                            >
                                                {tech.level}%
                                            </span>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${tech.level}%` }}
                                                transition={{ duration: 1, delay: index * 0.1 }}
                                                className={`h-3 rounded-full ${colorVariants[activeData.color as keyof typeof colorVariants].bar} relative overflow-hidden`}
                                            >
                                                <motion.div
                                                    animate={{ x: ["0%", "100%", "0%"] }}
                                                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                                />
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Category Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div>
                                    <div
                                        className={`text-2xl font-bold ${colorVariants[activeData.color as keyof typeof colorVariants].text}`}
                                    >
                                        {activeData.technologies.length}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
                                </div>
                                <div>
                                    <div
                                        className={`text-2xl font-bold ${colorVariants[activeData.color as keyof typeof colorVariants].text}`}
                                    >
                                        {Math.round(
                                            activeData.technologies.reduce((acc, tech) => acc + tech.level, 0) /
                                            activeData.technologies.length,
                                        )}
                                        %
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Average Proficiency</div>
                                </div>
                                <div>
                                    <div
                                        className={`text-2xl font-bold ${colorVariants[activeData.color as keyof typeof colorVariants].text}`}
                                    >
                                        {activeData.technologies.filter((tech) => tech.level >= 85).length}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Expert Level</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        I'm constantly learning and staying up-to-date with the latest technologies and industry trends. My passion
                        for continuous improvement drives me to explore new tools and frameworks that can enhance the development
                        process and deliver better user experiences.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
