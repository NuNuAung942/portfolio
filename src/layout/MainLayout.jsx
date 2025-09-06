import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ContentTitle from "../components/ContentTitle";
import { FaBars } from "react-icons/fa";
import Header from "../components/Header";
import { motion } from "framer-motion";

const MainLayout = ({ children, title, headPath }) => {
  return (
    <div className="mainLayout w-full transition-all">
      <Header page="child" />
      <div class="content overflow-scroll h-screen">
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="container bg-black/90 mx-auto mt-10 mb-20 p-8"
        >
          <ContentTitle title={title} headPath={headPath} />
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default MainLayout;
