import MainLayout from "../layout/MainLayout";

const Resume = () => {
  return (
    <MainLayout title="Check my resume" headPath="resume">
      <div className="resume-contents flex flex-col md:flex-row mb-5 ">
        <div className="flex-1/2">
          <div className="mb-10">
            <h2 className="text-primary text-3xl mb-4 font-bold">Summary</h2>
            <div className="flex justify-start">
              <div className="flex justify-center pt-1 relative">
                <div className="w-[15px] h-[15px] bg-secondary rounded-full z-10"></div>
                <div className="w-[2px] h-full bg-darkGray absolute "></div>
              </div>
              <div className="content ml-2 pb-6">
                <h3 className="text-secondary text-xl uppercase font-bold mb-3">
                  Nu Nu Aung
                </h3>
                <p className="italic text-primary mb-3">
                  Seeking a challenging position in a reputable organization to
                  expand and utilize my skills and knowledge. Flexible to work
                  in any environment as required. I am a quick learner and self
                  motivated.
                </p>
                <ul className="list-disc ml-5">
                  <li>Bang Lamung district, Chon Buri, Thailand</li>
                  <li>0660892964</li>
                  <li>nunuaung942@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <h2 className="text-primary text-3xl mb-4 font-bold">Education</h2>
            <div className="flex justify-start">
              <div className="flex justify-center pt-1 relative">
                <div className="w-[15px] h-[15px] bg-secondary rounded-full z-10"></div>
                <div className="w-[2px] h-full bg-darkGray absolute "></div>
              </div>
              <div className="content ml-2 pb-6">
                <h3 className="text-secondary text-xl uppercase font-bold mb-3">
                  Bechalor Of Computer Science
                </h3>
                <p className="my-4">
                  <span className="p-2 mt-3 text-sm bg-darkGray">
                    2011-2015
                  </span>
                </p>
                <p className="italic text-primary mb-3">
                  University of Computer Studies (Thaton)
                </p>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <h2 className="text-primary text-3xl mb-4 font-bold">IT Certifications</h2>
            <div className="flex justify-start">
              <div className="flex justify-center pt-1 relative">
                <div className="w-[15px] h-[15px] bg-secondary rounded-full z-10"></div>
                <div className="w-[2px] h-full bg-darkGray absolute "></div>
              </div>
              <div className="content ml-2 pb-6">
                <h3 className="text-secondary text-xl uppercase font-bold mb-3">
                  Web Design and PHP Web Development
                </h3>
                <p className="my-4">
                  <span className="p-2 mt-3 text-sm bg-darkGray">
                    2016
                  </span>
                </p>
                <p className="italic text-primary mb-3">
                  Information and Communication Technology Training Institute(ICTTI)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1/2">
          <div className="mb-10">
            <h2 className="text-primary text-3xl mb-4 font-bold">
              Professional Experience
            </h2>
            <div className="flex justify-start">
              <div className="flex justify-center pt-1 relative">
                <div className="w-[15px] h-[15px] bg-secondary rounded-full z-10"></div>
                <div className="w-[2px] h-full bg-darkGray absolute "></div>
              </div>
              <div className="content ml-2 pb-6">
                <h3 className="text-secondary text-xl uppercase font-bold mb-3">
                  Senior Frontend Engineer
                </h3>
                <p className="my-4">
                  <span className="p-2 mt-3 text-sm bg-darkGray">
                    July 2024 - July 2025
                  </span>
                </p>
                <p className="italic text-primary mb-3">
                  StartGear Inc
                </p>
                <p className="italic text-primary mb-3">Remote</p>
                <ul className="list-disc ml-5">
                  <li>
                    I am responsible for developing about 3 kinds of web apps by using Reactjs, Redux toolkit, Tailwind css and MUI.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="flex justify-center pt-1 relative">
                <div className="w-[15px] h-[15px] bg-secondary rounded-full z-10"></div>
                <div className="w-[2px] h-full bg-darkGray absolute "></div>
              </div>
              <div className="content ml-2 pb-6">
                <h3 className="text-secondary text-xl uppercase font-bold mb-3">
                  Senior Engineer
                </h3>
                <p className="my-4">
                  <span className="p-2 mt-3 text-sm bg-darkGray">
                    November 2020 - March 2024
                  </span>
                </p>
                <p className="italic text-primary mb-3">
                  AcePlus Solutions Company Limited
                </p>
                <p className="italic text-primary mb-3">On-Site</p>
                <ul className="list-disc ml-5">
                  <li>
                    I am responsible for developing unity game app, internal web
                    apps and teaching react class for OJT members.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="flex justify-center pt-1 relative">
                <div className="w-[15px] h-[15px] bg-secondary rounded-full z-10"></div>
                <div className="w-[2px] h-full bg-darkGray absolute "></div>
              </div>
              <div className="content ml-2">
                <h3 className="text-secondary text-xl uppercase font-bold mb-3">
                  Junior Web Developer
                </h3>
                <p className="my-4">
                  <span className="p-2 mt-3 text-sm bg-darkGray">
                    March 2019 - October 2020
                  </span>
                </p>
                <p className="italic text-primary mb-3">
                  METATEAM MYANMAR Co.,Ltd
                </p>
                <p className="italic text-primary mb-3">On-Site</p>
                <ul className="list-disc ml-5">
                  <li>
                    I am responsible for developing responsive templates, web
                    app design using Html, CSS, SCSS, Bootstrap, Javascript,
                    Jquery and develope wordpress themes. I also responsible for
                    guiding the junior developers.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-lg mb-6">
        Download my resume to know details about me
      </p>
      <div className="text-center">
        <a
          className="bg-secondary py-2 px-3 rounded-md transition all hover:bg-primary hover:text-black"
          target="_blank"
          href="https://drive.google.com/file/d/1tS5CHSaR5CPwpYriKWeQNdTKvU7pfPOc/view?usp=sharing"
        >
          Download
        </a>
      </div>
    </MainLayout>
  );
};

export default Resume;
