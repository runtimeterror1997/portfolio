import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className='text4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
          rerum odio fuga debitis, officia esse at! Porro sapiente libero neque
          aliquam, inventore similique doloribus quasi quis nam velit esse illum
          praesentium voluptatem, in possimus qui eius, nemo labore quas aperiam
          ea. Reprehenderit tempora blanditiis esse eius voluptatibus adipisci,
          fugit expedita!
        </p>
        <br />
        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cumque
          necessitatibus reiciendis nostrum vitae nam laborum. Animi ut, tempora
          quae, quidem iusto, deserunt aspernatur beatae cumque quaerat
          repudiandae ea impedit esse maiores corrupti exercitationem minima
          totam accusamus cum rerum ipsam aut eveniet accusantium repellat at!
          Ab dolore consectetur placeat debitis.
        </p>
      </div>
    </div>
  );
}

export default About
