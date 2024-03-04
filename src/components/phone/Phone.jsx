import "./phone.scss";
import { FaPhone } from "react-icons/fa";

const Phone = () => {
  return (
    <div className="phone-container">
      <div className="wrapper">
        <div className="phone">
          <div className="icon">
            <FaPhone />
          </div>
          <div className="number">+012-345-6789</div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
