"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import { motion } from "framer-motion"

const projects = [
  {
    name: "Chat App",
    description:
      "这是一个基于chat engine和openai的api接口搭建的模拟聊天网站，可以在其中与chatgptbot进行对话（待部署）",
    image: "/chat-app.png",
    github: "https://github.com/brown-cat-cyber/chat-app",
    link: "",
  },
  {
    name: "Gym Website",
    description:
      "这是一个健身主题的仿制网站，主要用到了tailwind，typescript和React",
    image: "/gym.png",
    github: "https://github.com/brown-cat-cyber/Gym-website",
    link: "https://468cfb4d.gym-website-de2.pages.dev/",
  },
]
const ProjectsSection = () => {
  return (
    <section id="projects">
      {/*HEADER*/}
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      {/**PROJECTS */}
      <div className="flex flex-col gap-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              {/**PROJECT */}

              <motion.div
                id="projectLocation"
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 200,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="flex flex-col md:flex-row md:gap-x-12"
              >
                {/**IMG */}
                <div className=" md:w-1/2">
                  <Link href={project.link}>
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>

                {/**DESCRIPTIONS AND LINKS */}

                <div className="mt-8 md:w-1/2">
                  {/**DESCRIPTIONS */}
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  {/**LINKS */}
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.github} target="_blank">
                      <BsGithub
                        size={30}
                        className="hover:translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                    <Link
                      href={project.link}
                      target={project.link === "" ? "_self" : "_blank"}
                    >
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default ProjectsSection
