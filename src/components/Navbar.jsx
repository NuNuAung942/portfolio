import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const Navbar = ({ isToggle, menuToggle }) => {
  return (
    <nav className="opacity-100 z-20 transition ease-in-out flex justify-center flex-col md:flex-row py-6 px-6">
      {isToggle ? (
        <div className="flex justify-end">
          <AiOutlineClose
            className="text-2xl font-bold cursor-pointer mr-4 mb-4"
            onClick={menuToggle}
          />
        </div>
      ) : (
        <></>
      )}
      <ul className="flex flex-col p-7 md:p-0 md:border-none border border-darkGray md:flex-row">
        <li className={`${isToggle ? "mb-3" : ""} relative`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary after:absolute after:h-[3px] after:bottom-[-5px] after:left-3 after:w-[30px] after:rounded-md after:bg-secondary after:transition-all after:duration-500 text-md text-gray font-bold px-3 pb-2"
                : "after:absolute after:h-[3px] after:w-0 after:bottom-[-5px] after:left-3 hover:after:w-[30px] after:rounded-md hover:after:bg-secondary after:transition-all after:duration-500 text-md text-gray font-bold px-3 pb-2"
            }
          >
            Home
          </NavLink>
        </li>
        <li className={`${isToggle ? "mb-3" : ""} relative`}>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-primary after:absolute after:h-[3px] after:bottom-[-5px] after:left-3 after:w-[30px] after:bg-secondary after:rounded-md after:transition-all after:duration-500 text-md text-gray font-bold px-3 pb-2"
                : "after:absolute after:h-[3px] after:w-0 after:bottom-[-5px] after:left-3 hover:after:w-[30px] after:rounded-md hover:after:bg-secondary after:transition-all after:duration-500 text-md text-gray font-bold px-3 pb-2"
            }
          >
            About
          </NavLink>
        </li>
        <li className={`${isToggle ? "mb-3" : ""} relative`}>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive
                ? "text-primary after:absolute after:h-[3px] after:bottom-[-5px] after:left-3 after:w-[30px] after:bg-secondary after:rounded-md after:transition-all after:duration-500 text-md text-gray font-bold px-3 pb-2"
                : "after:absolute after:h-[3px] after:w-0 after:bottom-[-5px] after:left-3 hover:after:w-[30px] after:rounded-md hover:after:bg-secondary after:transition-all after:duration-500 text-md text-gray font-bold px-3 pb-2"
            }
          >
            Resume
          </NavLink>
        </li>
        <li className={`${isToggle ? "mb-3" : ""} relative`}>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive
                ? "text-primary after:absolute after:h-[3px] after:bottom-[-5px] after:left-3 after:w-[30px] after:bg-secondary after:rounded-md after:transition-all after:duration-500 text-md text-gray font-bold px-3 pb-2"
                : "after:absolute after:h-[3px] after:w-0 after:bottom-[-5px] after:left-3 hover:after:w-[30px] after:rounded-md hover:after:bg-secondary after:transition-all after:duration-500 text-md text-gray font-bold px-3 pb-2"
            }
          >
            Service
          </NavLink>
        </li>
        <li className={`${isToggle ? "mb-3" : ""} relative`}>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive
                ? "text-primary after:absolute after:h-[3px] after:bottom-[-5px] after:left-3 after:w-[30px] after:bg-secondary after:rounded-md after:transition-all after:duration-500 text-md text-gray font-bold px-3 pb-2"
                : "after:absolute after:h-[3px] after:w-0 after:bottom-[-5px] after:left-3 hover:after:w-[30px] after:rounded-md hover:after:bg-secondary after:transition-all after:duration-500 text-md text-gray font-bold px-3 pb-2"
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li className={`${isToggle ? "mb-3" : ""} relative`}>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-primary after:absolute after:h-[3px] after:bottom-[-5px] after:left-3 after:w-[30px] after:bg-secondary after:rounded-md after:transition-all after:duration-500 text-md text-gray font-bold px-3 pb-2"
                : "after:absolute after:h-[3px] after:w-0 after:bottom-[-5px] after:left-3 hover:after:w-[30px] after:rounded-md hover:after:bg-secondary after:transition-all after:duration-500 text-md text-gray font-bold px-3 pb-2"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
