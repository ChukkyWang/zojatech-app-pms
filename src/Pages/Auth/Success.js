import { useNavigate } from "react-router-dom";
import { DASHBOARD } from "../../utils/routes";
import "../Dashboard/Style/Style.css";

export default function Success() {
  const navigate = useNavigate();
  return (
    <div className="success_home" style={{}}>
      <div className="card-successful">
        <div className="tick-section">
          <div className="ellipse"></div>
          <div className="tick">
            <svg
              fill="white"
              height="44"
              width="64"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 490 490"
            >
              <polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 " />
            </svg>
          </div>
        </div>
        <div className="successful-section">
          <p className="awesome">Awesome!</p>
          <p className="info">
            Your organization has been successfully created.
          </p>
          <div className="goto">
            <button className="link1" onClick={() => navigate(DASHBOARD)}>
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
