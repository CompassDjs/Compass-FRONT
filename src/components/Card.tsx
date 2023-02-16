import { ICard } from "src/utils/interfaces/ICard";
import "../styles/Card.scss";

export const Card = ({ front = {} as ICard, back = {} as ICard }) => {
  return (
    <div className="parallax-card">
      <div className="parallax-card__holder">
        <div
          className="parallax-card__front"
          style={{ background: front.color }}
        >
          <div className="parallax-card__content">
            <div className="parallax-card__icon">
              <front.icon />
            </div>
            <div className="parallax-card__front-text">
              <span className="parallax-card__front-value">{front.value}</span>
              <div style={{ height: "10px" }}></div>
              <span className="parallax-card__front-title">{front.title}</span>
            </div>
          </div>
        </div>
        <div
          className="parallax-card__back"
          style={{
            background: back.color,
          }}
        >
          <div className="parallax-card__content">
            <div
              className="parallax-card__icon"
              style={{
                background: typeof back.icon === "string" ? "none" : "#202225",
              }}
            >
              {typeof back.icon === "string" ? (
                <img
                  src={back.icon}
                  alt="icon"
                  className="parallax-card__icon-avatar"
                />
              ) : (
                <back.icon />
              )}
            </div>
            <div className="parallax-card__front-text">
              <span className="parallax-card__back-value">{back.value}</span>
              <div style={{ height: "10px" }}></div>
              <span className="parallax-card__back-title">{back.title}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
