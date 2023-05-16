import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import graphql from "../assets/graphql.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import figma from "../assets/figma.png";



const Skills = () => {
    const experiences = [
      {
        id: 1,
        src: html,
        title: "HTMl",
        style: "shadow-orange-500",
      },
      {
        id: 2,
        src: css,
        title: "CSS",
        style: "shadow-blue-500",
      },
      {
        id: 3,
        src: javascript,
        title: "JavaScript",
        style: "shadow-yellow-500",
      },
      {
        id: 4,
        src: reactImage,
        title: "React and React Native",
        style: "shadow-blue-600",
      },

      {
        id: 5,
        src: tailwind,
        title: "Tailwind",
        style: "shadow-cyan-600",
      },
      {
        id: 6,
        src: graphql,
        title: "GraphQl",
        style: "shadow-pink-400",
      },
      {
        id: 7,
        src: github,
        title: "GitHub",
        style: "shadow-gray-400",
      },
      {
        id: 8,
        src: figma,
        title: "Figma Design",
        style: "shadow-purple-600",
      },
    ];

  return (
    <div
      name="skill"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            My Skills
          </p>
          <p className="py-6 ">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {experiences?.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500  py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills
