import React from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Project = () => {
     const [show, setShow] = React.useState(0);

     const handleShow = (value) => {
       setShow(show === value ? 0 : value);
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
      name="project"
      className="bg-gradient-to-b from-gray-900 to-black w-full h-full text-white pb-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Highlighted Projects
          </p>
        </div>
        <div className="text-xl">
          <Accordion open={show === 1} icon={<Icon id={1} open={show} />}>
            <AccordionHeader
              onClick={() => handleShow(1)}
              className="text-white text-xl hover:text-gray-500"
            >
              E-Layog
            </AccordionHeader>
            <AccordionBody className="text-white">
              <div className="flex items-center">
                <p className="text-sm text-white">
                  Reactjs, Material UI, SCSS, REST API
                </p>
              </div>
              <div>
                <p className="text-lg mt-5">
                  E-Layog is a web application that empowers jobseeker to apply
                  to job vacancies online and after that vetting, sorting, and
                  finally shortlist the applicants digitally on behalf of the
                  employers.
                </p>
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion open={show === 2} icon={<Icon id={2} open={show} />}>
            <AccordionHeader
              onClick={() => handleShow(2)}
              className="text-white text-xl hover:text-gray-500"
            >
              Events.bt
            </AccordionHeader>
            <AccordionBody className="text-white">
              <div className="flex items-center">
                <p className="text-sm text-gray-500">
                  Reactjs, Material UI, SCSS, GraphQL
                </p>
              </div>
              <div>
                <p className="text-lg mt-5">
                  Events.bt is a Bhutanese web app platform for buying tickets
                  and registering for events happening across Bhutan.
                </p>
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion open={show === 3} icon={<Icon id={3} open={show} />}>
            <AccordionHeader
              onClick={() => handleShow(3)}
              className="text-white text-xl hover:text-gray-500"
            >
              PPPIMS
            </AccordionHeader>
            <AccordionBody className="text-white">
              <div className="flex items-center">
                <p className="text-sm text-gray-500">
                  Reactjs, Material UI, SCSS, GraphQL
                </p>
              </div>
              <div>
                <p className="text-lg mt-5">
                  The Plant Protection Product Information Management System is
                  the digitization of indent collection and distribution of
                  plant protection products to farmers. The system would help to
                  gather quality data about the usage of PP products at farm
                  levels. Such an organized level of information would
                  positively impact pest management activities, human health,
                  and the environment.
                </p>
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion open={show === 2} icon={<Icon id={2} open={show} />}>
            <AccordionHeader
              onClick={() => handleShow(2)}
              className="text-white text-xl hover:text-gray-500"
            >
              Lagta Express
            </AccordionHeader>
            <AccordionBody className="text-white">
              <div className="flex items-center">
                <p className="text-sm text-gray-500">
                  Reactjs, React Native, Material UI, SCSS, Google maps API,
                  GraphQL
                </p>
              </div>
              <div>
                <p className="text-lg mt-5">
                  Lagta Express is a delivery service provider with an online
                  tracking feature with Google maps.
                </p>
              </div>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Project
