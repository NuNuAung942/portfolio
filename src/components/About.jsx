import MainLayout from "../layout/MainLayout";
import profile from "../assets/img/profile.jpg";
import { IoCaretForwardOutline } from "react-icons/io5";

const personalData = {
  age: "29",
  degree: "Bechalor",
  phone: "0660892964",
  email: "nunuaung942@gmail.com",
  country: "Thailand",
  freelance: "Available",
};

const About = () => {
  return (
    <MainLayout title="Learn more about me" headPath="about">
      <div className="flex flex-col md:flex-row">
        <div className="image w-full flex justify-center md:w-1/3">
          <img src={profile} alt="profile" />
        </div>
        <div className="desc xs:w-full md:w-2/3 md:pl-6 pt-6 md:pt-0">
          <h2 className="text-secondary text-3xl">Frontend Developer</h2>
          <span className="headline text-sm italic">
            A developer who love painting, playing games, meditation, reading and coding.{" "}
          </span>
          <div className="grid grid-cols-2 gap-2 mt-6">
            {Object.entries(personalData).map((key, i) => (
              <p className="flex items-center" key={i}>
                <IoCaretForwardOutline className="text-secondary mr-2" />
                <span>
                  {key[0]} : {key[1]}
                </span>
              </p>
            ))}
          </div>
          <p className="mt-6">
            I have over 4 years of experience working in frontend development. Seeking
            a challenging position in a reputable organization to expand and
            utilize my skills and knowledge. Flexible to work in any environment
            as required. I am a quick learner and self motivated. I also very
            good at interpersonal skill and communication skill.
          </p>
        </div>
      </div>
      <div className="skills mt-10">
        <p className="flex items-center text-gray text-sm mb-2 tracking-wide uppercase">
          Skills
          <span className="inline-block w-[40px] h-[1px] bg-secondary ml-2"></span>
        </p>
        <div className="sills-set grid xs:grid-col-1 md:grid-cols-3 gap-3">
          <div className="md:text-center">
            <h2 className="text-2xl mb-4">Languages</h2>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>SASS</p>
            <p>Tailwindcss</p>
            <p>Bootstrap</p>
            <p>Wordpress</p>
          </div>
          <div className="md:text-center">
            <h2 className="text-2xl mb-4">Frameworks & Libraries</h2>
            <p>ReactJs</p>
            <p>NextJs</p>
            <p>Redux Toolkit</p>
            <p>Zustand</p>
            <p>Axios</p>
            <p>React Query</p>
            <p>React Router Dom</p>
            <p>Material UI</p>
          </div>
          <div className="md:text-center">
            <h2 className="text-2xl mb-4">Other Tools</h2>
            <p>Git Workflow</p>
            <p>Docker</p>
            <p>Jira</p>
            <p>Backlog</p>
            <p>Notion</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
