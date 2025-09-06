import MainLayout from "../layout/MainLayout";
import { FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { IoShareSocial } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <MainLayout title="Contact me" headPath="contact">
      <div className="contact-cards grid sm:grid-cols-2 gap-4">
        <div className="contact-dard bg-darkGray/60 p-7 ">
          <div className="icon-box flex">
            <div className="icon w-[55px] h-[55px] rounded-full flex justify-center items-center bg-black">
              <FaLocationDot className="text-secondary" />
            </div>
            <div className="ml-3">
              <h3 className="text-gray text-xl">My Address</h3>
              <p className="text-sm">Bang Lamung district, Chon Buri, Thailand</p>
            </div>
          </div>
        </div>
        <div className="contact-dard bg-darkGray/60 p-7 ">
          <div className="icon-box flex">
            <div className="icon w-[55px] h-[55px] rounded-full flex justify-center items-center bg-black">
              <IoShareSocial className="text-secondary text-xl" />
            </div>
            <div className="ml-3">
              <h3 className="text-gray text-xl">Social Profile</h3>
              <div className="flex items-center mt-2">
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
        </div>
        <div className="contact-dard bg-darkGray/60 p-7 ">
          <div className="icon-box flex">
            <div className="icon w-[55px] h-[55px] rounded-full flex justify-center items-center bg-black">
              <CiMail className="text-secondary text-xl" />
            </div>
            <div className="ml-3">
              <h3 className="text-gray text-xl">Email Me</h3>
              <p className="text-sm">
                <a href="mailto:nunuaung942@gmail.com">nunuaung942@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="contact-dard bg-darkGray/60 p-7 ">
          <div className="icon-box flex">
            <div className="icon w-[55px] h-[55px] rounded-full flex justify-center items-center bg-black">
              <FaPhoneVolume className="text-secondary text-md" />
            </div>
            <div className="ml-3">
              <h3 className="text-gray text-xl">Call Me</h3>
              <p className="text-sm">
                <a href="tel:0660892964">0660892964</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
