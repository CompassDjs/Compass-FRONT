import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/App";
import { Sidebar } from "./components/Sidebar";
import { Login } from "./components/Login";

import { useFetchUser } from "./utils/hooks/useFetchUser";

import { SyncLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

function Index() {
  const [sidebarState, changeSidebarState] = useState(true);
  const { user, error, loading } = useFetchUser();

  if (error?.response?.status === 403) {
    toast("👤 Please login to continue", {
      theme: "dark",
      toastId: "403",
    });
  } else if (error) {
    toast.error(error.message, {
      theme: "dark",
      toastId: "fetchUserError",
    });
  }

  const handleSidebarOpen = () => {
    changeSidebarState(!sidebarState);
  };

  const smoothResize = {
    width: sidebarState ? "calc(100% - 250px)" : "calc(100% - 100px)",
    marginLeft: sidebarState ? "300px" : "100px",
    transition: "all 0.3s ease 0s",
  };

  const handleUser = (user: any) => {
    if (user) {
      return user;
    } else {
      return null;
    }
  };

  return (
    <Router>
      <ToastContainer />
      <div
        className="spinner-container"
        style={{ display: loading ? "flex" : "none" }}
      >
        <SyncLoader
          color={"#7289da"}
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      <div
        className={"app-container " + (loading ? "fade-in" : "fade-in.loaded")}
      >
        <Sidebar
          user={handleUser(user)}
          sidebarState={sidebarState}
          changeSidebarState={handleSidebarOpen}
        />
        <div style={smoothResize}>
          {user ? (
            <App user={user} />
          ) : (
            <div
              className="login-container"
              style={{
                width: window.innerWidth - (sidebarState ? 290 : 100),
                overflow: "hidden",
              }}
            >
              <Login />
            </div>
          )}
        </div>
      </div>
    </Router>
  );
}

root.render(<Index />);
