import React from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Experience = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
    
    function Icon({ id, open }) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            id === open ? "rotate-180" : ""
          } h-5 w-5 transition-transform`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      );
    }

  return (
    <div
      name="experience"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg w-full h-full flex flex-col justify-center p-4 mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">My Journey</p>
          <div className="text-xl mt-3">
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="text-white text-2xl hover:text-gray-300"
              >
                Tashi InfoComm Limited
              </AccordionHeader>
              <AccordionBody className="text-white">
                <div className="flex items-center">
                  <p className="text-lg pr-2 font-semibold">
                    Mobile App Developer
                  </p>
                  <p className="text-sm text-gray-500">
                    (December 2022 - Present)
                  </p>
                </div>

                <ul class="list-disc">
                  <li className="px-4 text-sm font-medium text-gray-300 py-2">
                    Design and implement user interface components for
                    JavaScript-based web and mobile applications using React
                    ecosystem.
                  </li>
                  <li className="px-4 text-sm font-medium text-gray-300 py-2">
                    Build app and UI components from prototypes and wireframes.
                  </li>
                  <li className="px-4 text-sm font-medium text-gray-300 py-2">
                    Use Native APIs for tight integrations with both platforms –
                    Android and iOS.
                  </li>
                  <li className="px-4 text-sm font-medium text-gray-300 py-2">
                    Improve front-end performance by eliminating performance
                    bottlenecks.
                  </li>
                  <li className="px-4 text-sm font-medium text-gray-300 py-2">
                    Create front-end modules with maximum code reusability and
                    efficiency.
                  </li>
                  <li className="px-4 text-sm font-medium text-gray-300 py-2">
                    Work with third-party dependencies and APIs.
                  </li>
                  <li className="px-4 text-sm font-medium text-gray-300 py-2">
                    Implement clean, smooth animations to provide an excellent
                    user interface
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="text-white text-2xl hover:text-gray-300"
              >
                Dragon Coders Pvt Ltd
              </AccordionHeader>
              <AccordionBody className="text-white">
                <div className="flex items-center">
                  <p className="text-lg pr-2 font-semibold">
                    Mobile App Developer
                  </p>
                  <p className="text-sm text-gray-500">
                    (October 2020 - November 2022)
                  </p>
                </div>

                <ul className="list-disc">
                  <li className="px-4 text-sm font-medium text-gray-300 py-2">
                    Developed and implemented front-end code using Reactjs,
                    React Native SCSS, Tailwind, and MUI to meet business
                    requirements.
                  </li>
                  <li className="px-4 text-sm font-medium text-gray-300 py-2">
                    Ensured that all code was well documented, reusable,
                    efficient, and followed best practices.
                  </li>
                  <li className="px-4 text-sm font-medium text-gray-300 py-2">
                    Participated in peer code reviews as appropriate for the
                    task at hand and reviewed others’ code when requested.
                  </li>
                  <li className="px-4 text-sm font-medium text-gray-300 py-2">
                    Improve front-end performance by eliminating performance
                    bottlenecks.
                  </li>
                  <li className="px-4 text-sm font-medium text-gray-300 py-2">
                    Create front-end modules with maximum code reusability and
                    efficiency.
                  </li>
                  <li className="px-4 text-sm font-medium text-gray-300 py-2">
                    Work with third-party dependencies and APIs.
                  </li>
                  <li className="px-4 text-sm font-medium text-gray-300 py-2">
                    Implement clean, smooth animations to provide an excellent
                    user interface
                  </li>
                  <li className="px-4 text-sm font-medium text-gray-300 py-2">
                    Improved site speed by optimizing images and reducing HTTP
                    requests when possible.
                  </li>
                  <li className="px-4 text-sm font-medium text-gray-300 py-2">
                    Worked with the senior developer to create a new website
                    from scratch using Reactjs.
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience
