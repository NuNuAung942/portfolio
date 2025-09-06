import { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "Interview Management System",
    language: "Reactjs (Client Project)",
    catId: 2,
  },
  {
    id: 2,
    title: "Ticket Management System",
    language: "Reactjs (Client Project)",
    catId: 2,
  },
  {
    id: 3,
    title: "Taniguchi",
    language: "Wordpress (Client Project)",
    catId: 3,
  },
  {
    id: 4,
    title: "Sparkling Lights",
    language: "Wordpress (Client Project)",
    catId: 3,
  },
  {
    id: 5,
    title: "Sunny Side International School",
    language: "Wordpress (Client Project)",
    catId: 3,
  },
  {
    id: 6,
    title: "Sar Mal (food delivery web app)",
    language: "Reactjs (1 month group Project)",
    catId: 3,
  },
];

const categories = [
  {
    id: 1,
    cat: "all",
  },
  {
    id: 2,
    cat: "app",
  },
  {
    id: 3,
    cat: "web",
  },
];
const Portfolio = () => {
  const [activeCat, setActiveCat] = useState(1);
  const [data, setData] = useState([]);

  const categoryHandler = (cat) => {
    cat === 1 ? setActiveCat(1) : setActiveCat(cat);
    console.log(cat);
  };

  useEffect(() => {
    let filterCards = cards.filter((card) => card.catId == activeCat);
    activeCat === 1 ? setData([...cards]) : setData(filterCards);
  }, [activeCat]);

  return (
    <MainLayout title="My Works" headPath="portfolio">
      <div className="btn-gp flex justify-center items-center">
        {categories?.map((category) => (
          <button
            key={category.id}
            className={`${
              category.id === activeCat ? "bg-secondary" : "bg-darkGray"
            } hover:bg-secondary py-1 px-4 mx-1 mb-6 rounded-md transition-all`}
            onClick={() => categoryHandler(category.id)}
          >
            {category.cat}
          </button>
        ))}
      </div>
      <div className="contact-cards grid sm:grid-cols-3 gap-6">
        {data?.map((card) => (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}
            key={card.id}
            className="card flex justify-center flex-col items-center text-center p-3 bg-darkGray rounded-lg min-h-[300px]"
          >
            <h3 className="text-2xl mb-3">{card.title}</h3>
            <p>{card.language}</p>
          </motion.div>
        ))}
      </div>
    </MainLayout>
  );
};

export default Portfolio;
