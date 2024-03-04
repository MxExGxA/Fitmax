import "./banner.scss";
import model from "../../images/fitnessModel.png";
import bars from "../../images/barsGroup.png";
import { useLenis } from "@studio-freight/react-lenis";
import { motion, useScroll } from "framer-motion";

const Banner = () => {
  const { scrollYProgress } = useScroll();
  const lenis = useLenis(({ scroll }) => {});

  const plans = () => {
    lenis.scrollTo("#plans");
  };

  return (
    <div className="banner-container">
      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="left"
        >
          <div className="top">WE CREATE</div>
          <div className="bottom">CHAMPIONS</div>
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2 }}
            className="buttons"
          >
            <input
              onClick={plans}
              className="join"
              type="button"
              value={"JOIN NOW"}
            />
            <input
              onClick={plans}
              className="view"
              type="button"
              value={"View Our Plans"}
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="right"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bars"
          >
            <img src={bars} alt="bars" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="model"
          >
            <img src={model} alt="model" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
