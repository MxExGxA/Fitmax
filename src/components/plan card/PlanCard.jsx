import "./planCard.scss";
import PropTypes from "prop-types";

const PlanCard = ({ data, middle }) => {
  return (
    <div className={`plan-card-container ${middle && "middle"}`}>
      <div className="title">{data.title}</div>
      <div className="advantages">
        <ul>
          {data.advantages.map((ele, index) => (
            <li key={index}>{ele}</li>
          ))}
        </ul>
      </div>

      <button className="btn-subscripe">
        Get For <span>${data.price}</span>
      </button>
    </div>
  );
};

PlanCard.propTypes = {
  data: PropTypes.object,
  middle: PropTypes.bool,
};

export default PlanCard;
