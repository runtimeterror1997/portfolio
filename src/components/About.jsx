import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          I am a Javascript developer with expertise in Reactjs and React
          Native. I combine my front-end engineering skills with my interaction
          design background to create elegant and interactive user interfaces
          while adhering to a familiar design hierarchy for a straightforward,
          easy-to-use user experience. Adept at contributing to a highly
          collaborative work environment, finding solutions, and determining
          customer satisfaction.
        </p>
        <br />
        {/* <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cumque
          necessitatibus reiciendis nostrum vitae nam laborum. Animi ut, tempora
          quae, quidem iusto, deserunt aspernatur beatae cumque quaerat
          repudiandae ea impedit esse maiores corrupti exercitationem minima
          totam accusamus cum rerum ipsam aut eveniet accusantium repellat at!
          Ab dolore consectetur placeat debitis.
        </p> */}
      </div>
    </div>
  );
}

export default About
