import React from "react"
import Image from "next/image"
import Link from "next/link"

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Java",
  "React",
  "Tailwind CSS",
  "Git",
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          关于我
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              来认识我吧!
            </h1>
            <p>
              嘿，我叫余如敏，现在在
              <span className="font-bold">{"上海"}</span>, 想要成为一名
              <span className="font-bold">{"前端工程师"}</span>。
            </p>
            <br />
            <p>我即将毕业于上海应用技术大学，是一名德语专业的学生。</p>
            <br />
            <p>
              尽管我并不是计算机专业的学生，学习编程的时间也不算久，还走了很多弯路，
              但我还是很喜欢写代码的感觉。写代码给我的感觉就像在不断地翻译，
              把一系列图文或数理逻辑转译成编程语言，再从编程语言转译回来。我还记得一个月前有一天我十分郁闷，于是去读{" "}
              <Link
                className=" underline"
                href="https://sourceacademy.org/sicpjs/1.2.6#ex-1.26"
              >
                SICP
              </Link>
              （计算机程序的构造与解释） ，结果很惊喜地发现
              自己可以看懂阿克曼函数的程序表达形式了，开心到绕图书馆转了两圈。
            </p>
            <br />
            <p>
              在这个学习过程中，一方面我发现自己的学习知识由于种种原因，我欠缺实习经历。我相信走入职场
              会带给我更多新的挑战，
              <span className="font-bold text-teal-500">
                但我并不害怕它
              </span>{" "}
              ，我很乐于进入这个新环境中继续学习，
              体验团队协作的辛苦与快乐，创造一些个人无法单独创造出来的东西。🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left flex flex-col">
            <h1 className="text-2xl font-bold mb-6">Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item}
                  </p>
                )
              })}
            </div>
            <Image
              src="/kaola2.jpg"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:mt-6"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
