const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-4">
          I am a proficient Javascript developer specializing in React.js and
          React Native frameworks. By seamlessly merging my front-end
          engineering expertise with a solid background in interaction design, I
          excel in crafting user interfaces that seamlessly blend elegance and
          interactivity. My approach is rooted in maintaining a cohesive design
          hierarchy to ensure user experiences are intuitive and user-friendly.
        </p>
        <p className="text-xl mt-4">
          One of my strengths lies in my ability to foster a dynamic and
          collaborative work environment. I thrive on actively engaging with
          fellow team members, consistently brainstorming and problem-solving to
          deliver optimal solutions. My commitment to excellence extends beyond
          development, as I am adept at gauging customer satisfaction and
          ensuring that the end product not only meets but surpasses
          expectations.
        </p>
        <p className="text-xl mt-4">
          Overall, my skill set encompasses the art of code, design, and
          teamwork, making me a valuable asset in creating compelling user
          interfaces that effectively bridge technology and user needs.
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
