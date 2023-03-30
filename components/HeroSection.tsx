"use client"
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <section id="home">
      {/**IMG-AND-HEROTEXTS */}
      <div
        id=""
        className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left"
      >
        {/**IMG */}
        <div id="imgContainer" className="md:mt-2 md:w-1/2">
          <Image
            src={"/kaola.jpg"}
            alt={"my picture"}
            width={325}
            height={325}
            className="rounded-full shadow-md"
          />
        </div>

        {/**HEROTEXTS */}
        <div id="texts" className="md: mt-2 md:w-3/5">
          <h1 className="text-2xl font-bold mt-6 md:mt-0 md:text-7xl">
            你好呀！
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            我是余如敏，一名正在学习前端的学生。（由于本人很少拍照，找不出能搭配背景的真人照，就只能拿考拉充数了）
          </p>
          <Link
            to="projects"
            className="cursor-pointer text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
          >
            Projects
          </Link>
        </div>
      </div>

      {/**ANIMATION LINK */}
      <div id="hi" className="flex items-center justify-center ">
        <Link to="about" smooth={true} offset={-10}>
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
