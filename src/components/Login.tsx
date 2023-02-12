import { FaDiscord } from "react-icons/fa";
import "../styles/Login.css";
import { useEffect, useRef, useState } from "react";

export const Login = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (logRef.current) {
      const { width, height } = logRef.current.getBoundingClientRect();

      logRef.current.style.transform = `translate(${
        (mouseX - width / 2) / -70
      }px, ${(mouseY - height / 2) / -70}px)`;
    }
  }, [mouseX, mouseY]);
  return (
    <div ref={logRef} className="Login">
      <div className="login-container">
        <div className="login-box">
          <div className="login-box-header">
            <FaDiscord size={40} />
          </div>
          <div className="login-box-body">
            <h2>Start using Compass</h2>
            <div style={{ height: "20px" }} />
            <button
              className="login-button"
              onClick={() => {
                window.location.href = `${process.env
                  .REACT_APP_DISCORD_LOGIN_URL!}`;
              }}
            >
              Login with Discord
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
