import Navbar from "./Navbar";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Header from "./Header";

const Home = () => {
  return (
    <div className="h-screen">
      <div className="md:hidden">
        <Header page="home" />
      </div>
      <div className="h-screen flex justify-center items-center md:items-start flex-col px-10">
        <div className="headline mb-3 md:text-left sm:text-center">
          <h1 className="text-6xl mb-3 font-bold">Nu Nu Aung</h1>
          <h2 className="text-2xl text-gray">
            I am a passionate{" "}
            <span className="text-primary text-3xl !opacity-100 border-b-2 border-secondary pb-1">
              Web Developer | Frontend Developer
            </span>{" "}
            from Myanmar
          </h2>
        </div>
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="flex items-center mt-7">
          <div className="w-9 h-9 bg-primary bg-opacity-25 rounded-full cursor-pointer flex items-center justify-center hover:bg-secondary transition-all mr-3">
            <FaTwitter className="text-primary z-12" />
          </div>
          <div className="w-9 h-9 bg-primary bg-opacity-25 rounded-full cursor-pointer flex items-center justify-center hover:bg-secondary transition-all mr-3">
            <a href="https://github.com/nunuaung" target="_blank">
              <FaGithub className="text-primary z-12" />
            </a>
          </div>
          <div className="w-9 h-9 bg-primary bg-opacity-25 rounded-full cursor-pointer flex items-center justify-center hover:bg-secondary transition-all mr-3">
            <a
              href="https://www.linkedin.com/in/nunu-aung-1100b4230/"
              target="_blank"
            >
              <FaLinkedin className="text-primary z-12" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
