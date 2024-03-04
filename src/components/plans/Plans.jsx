import PlanCard from "../plan card/PlanCard";
import "./plans.scss";
import { motion } from "framer-motion";

const plans = {
  basic: {
    title: "Basic Plan",
    advantages: [
      `Access to Cardio and Weightlifting Area Group Fitness Classes (limited).`,
      `Locker Room Access.`,
      `Standard Gym Hours Access.`,
    ],
    price: 29.99,
  },
  premium: {
    title: "Premium Plan",
    advantages: [
      `Full Access to Cardio and Weightlifting Area.`,
      `Unlimited Group Fitness Classes.`,
      `Locker Room Access with Towel Service.`,
      `Extended Gym Hours Access.`,
      `Access to Sauna and Steam Room.`,
    ],
    price: 49.99,
  },
  ultimate: {
    title: "Ultimate Plan",
    advantages: [
      `VIP Access to Cardio and Weightlifting Area.`,
      `Unlimited Group Fitness Classes, including Specialty Classes.`,
      `Premium Locker Room Access with Towel and Toiletry Service.`,
      `24/7 Gym Access.`,
      `Priority Scheduling for Personal Training Sessions.`,
    ],
    price: 79.99,
  },
};

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="header">PLANS</div>
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        className="wrapper"
      >
        <PlanCard data={plans.basic} />
        <PlanCard data={plans.premium} middle />
        <PlanCard data={plans.ultimate} />
      </motion.div>
    </div>
  );
};

export default Plans;
