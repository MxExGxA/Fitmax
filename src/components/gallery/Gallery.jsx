import { useEffect, useState } from "react";
import "./gallery.scss";
import { motion } from "framer-motion";

const Gallery = () => {
  const [mousePos, setMousePos] = useState({});
  const [toggleText, setToggleText] = useState(false);
  const [hoverText, setHoverText] = useState("");

  const hoverTexts = [
    `Gym life pulsates with energy as individuals pursue their fitness goals through dedication and hard work.`,
    `It's a mental battleground where individuals challenge themselves to overcome strength and endurance obstacles.`,
    `Carefully planned workout routines target specific muscle groups, incorporate cardio, and track progress over time.`,
    `The clanging of weights and rhythmic beats create a motivating symphony, making the gym a dynamic and inspiring environment.`,
    `Post-workout rituals, like protein shakes and stretching, complete the experience, leaving participants revitalized.`,
    `The gym fosters a sense of community, with people sharing equipment, offering support, and exchanging fitness tips.`,
    `Gym attire is a statement of commitment, with fashionable leggings, high-performance sneakers, and moisture-wicking shirts.`,
  ];

  const getMousePos = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", getMousePos);

    return () => {
      window.removeEventListener("mousemove", getMousePos);
    };
  }, []);

  const variants = {
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  const hoverTextVariants = {
    initial: { opacity: 0 },
    animate: {
      x: mousePos.x,
      y: mousePos.y,
      opacity: 1,
      transition: { duration: 0.3, type: "spring", stiff: 100 },
    },
  };

  return (
    <div className="gallery-container">
      <div className="header">GALLERY</div>
      <div onMouseLeave={() => setToggleText(false)} className="wrapper">
        <motion.div
          variants={hoverTextVariants}
          initial="initial"
          animate="animate"
          className={`hover-text ${toggleText ? "" : "hidden"}`}
        >
          {hoverText}
        </motion.div>
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          className="grid"
        >
          {(() => {
            let divs = [];
            for (let x = 0; x < 7; x++) {
              divs.push(
                <motion.div
                  key={x}
                  variants={variants}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  onHoverStart={(e) => {
                    setToggleText(true);
                    setHoverText(e.target.attributes["data-attr"].value);
                  }}
                  data-attr={hoverTexts[x]}
                ></motion.div>
              );
            }
            return divs;
          })()}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
