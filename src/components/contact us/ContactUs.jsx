import "./contactUs.scss";
import { motion } from "framer-motion";

const ContactUs = () => {
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className="contactus-container">
      <div className="header">CONTACT US</div>
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        className="wrapper"
      >
        <div className="left">
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Email" />
          <textarea
            className="message"
            cols="30"
            rows="10"
            placeholder="Message..."
          ></textarea>
          <button className="btn-send">Send</button>
        </div>
        <div className="right"></div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
