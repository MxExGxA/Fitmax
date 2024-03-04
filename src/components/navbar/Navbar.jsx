import { useState } from "react";
import "./navbar.scss";
import { useLenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggleScroll, setToggleScroll] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const lenis = useLenis(({ scroll }) => {
    scroll >= 50 ? setToggleScroll(true) : setToggleScroll(false);
  });

  const Home = () => {
    lenis.scrollTo("#home");
    setToggleMenu(false);
  };
  const gallery = () => {
    lenis.scrollTo("#gallery");
    setToggleMenu(false);
  };
  const plans = () => {
    lenis.scrollTo("#plans");
    setToggleMenu(false);
  };
  const contact = () => {
    lenis.scrollTo("#contact");
    setToggleMenu(false);
  };

  const handleSmallMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const variants = {
    closed: { opacity: 1 },
    open: { opactiy: 0, x: 500, transition: { duration: 1 } },
    rotateUp: { rotateZ: 45, y: 12 },
    rotateDown: { rotateZ: -45, y: -10.5 },
  };

  const linksVariants = {
    hide: {
      x: 2000,
      opacity: 0,
      transition: { duration: 1, type: "spring" },
    },
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, type: "spring", staggerChildren: 0.2 },
    },
  };

  const listItem = {
    hide: { opacity: 0, x: 200 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <div className={`nav-container ${toggleScroll && "scrolled-color"}`}>
      <div className={`wrapper ${toggleScroll && "scrolled-border"}`}>
        <div className="logo">
          <img src="fitmax.png" alt="logo" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <motion.a onClick={Home} href="#home">
                Home
              </motion.a>
            </li>
            <li>
              <motion.a onClick={gallery} href="#gallery">
                Gallery
              </motion.a>
            </li>
            <li>
              <motion.a onClick={plans} href="#plans">
                Plans
              </motion.a>
            </li>
            <li>
              <motion.a onClick={contact} href="#contact">
                Contact us
              </motion.a>
            </li>
          </ul>
        </div>
        <div className="small-menu">
          <motion.div
            animate={toggleMenu ? "open" : "closed"}
            className={`btn-menu ${toggleMenu ? "toggled" : ""}`}
            onClick={handleSmallMenu}
          >
            <motion.span
              variants={variants}
              animate={toggleMenu ? "rotateUp" : ""}
            ></motion.span>
            <motion.span variants={variants}></motion.span>
            <motion.span
              variants={variants}
              animate={toggleMenu ? "rotateDown" : ""}
            ></motion.span>
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={linksVariants}
        initial="hide"
        animate={toggleMenu ? "show" : "hide"}
        className="links"
      >
        <ul>
          <motion.li variants={listItem}>
            <a onClick={Home} href="#home">
              Home
            </a>
          </motion.li>
          <motion.li variants={listItem}>
            <a onClick={gallery} href="#gallery">
              Gallery
            </a>
          </motion.li>
          <motion.li variants={listItem}>
            <a onClick={plans} href="#plans">
              Plans
            </a>
          </motion.li>
          <motion.li variants={listItem}>
            <a onClick={contact} href="#contact">
              Contact us
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
