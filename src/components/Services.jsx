import React from "react";
import MainLayout from "../layout/MainLayout";
import { TbWorld } from "react-icons/tb";
import { MdOutlineWeb } from "react-icons/md";
import { FaTabletAlt } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    icon: TbWorld,
    title: "Website Development",
    description: "Landing page",
  },
  {
    id: 2,
    icon: MdOutlineWeb,
    title: "Web App Development",
    description:
      "Content Management System(CMS), E-commerce System, Management System",
  },
  {
    id: 3,
    icon: FaTabletAlt,
    title: "Responsive Web Design Development",
    description: "Creating web pages that look good on all devices",
  },
];

const Services = () => {
  return (
    <MainLayout title="My Services" headPath="services">
      <div className="cards grid sm:grid-cols-3 gap-4 ">
        {servicesData?.map((data) => (
          <div
            key={data.id}
            className="group card text-center bg-darkGray/60 py-20 px-7 hover:bg-secondary transition-all"
          >
            <div className="bg-box flex items-center justify-center relative">
              <div className="p-4 rounded-md group-hover:bg-primary bg-secondary z-10">
                <data.icon className="text-primary group-hover:text-black text-2xl " />
              </div>
              <div className="w-[55px] h-[55px] rounded-md bg-[#201c1c] absolute top-[-12%] right-[45%]"></div>
            </div>
            <h2 className="md:text-xl lg:text-2xl text-primary mt-4">
              {data.title}
            </h2>
            <p className="text-md mt-3">{data.description}</p>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default Services;
