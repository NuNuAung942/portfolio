import { useState } from "react";
import Navbar from "./Navbar";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Header = ({ page }) => {
  const [isToggle, setIsToggle] = useState(false);

  const menuToggle = () => {
    setIsToggle((pre) => !pre);
  };
  return (
    <div className="header flex justify-between">
      <div
        className={`${
          page !== "home" ? "bg-black" : ""
        } w-full sticky relative top-0`}
      >
        <div
          className={`container h-[70px] ${isToggle?'hidden':'flex'} ${
            page !== "home" ? "justify-between" : "justify-end"
          } items-center mx-auto`}
        >
          {page !== "home" && (
            <div className="logo text-3xl font-bold">
              <NavLink to="/">Nu Nu Aung</NavLink>
            </div>
          )}
          <div className="hidden md:block">
            <Navbar />
          </div>
          <FaBars
            className="md:hidden text-2xl cursor-pointer"
            onClick={menuToggle}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 700 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`${
            isToggle
              ? "md:hidden sticky top-0 w-full h-screen bg-black/90 z-[20]"
              : "hidden"
          }`}
        >
          <Navbar isToggle={isToggle} menuToggle={menuToggle} />
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
