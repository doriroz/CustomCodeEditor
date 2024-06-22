import React from "react";
import { Link } from "react-router-dom";
import Stars from "../components/js/Stars";
// Client ID : Ov23liK7UdhCRnN0yJDt

function LandingPage() {
  const loginHandler = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  return (
    <div className="landing-page" style={styles.container}>
      <h1 style={styles.heading}>Welcome</h1>
      <Stars />
      <Link to="/editor" style={styles.link}>
        <button style={styles.button} onClick={loginHandler}>
          Login with GitHub
        </button>
        {/* Click Here to Proceed */}
      </Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
  },
  heading: {
    fontSize: "4em",
    color: "#333",
  },
  link: {
    display: "block",
    marginTop: "20px",
    textDecoration: "none",
    color: "#007bff",
    fontSize: "1.2em",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#252525",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "1.2em",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
};

export default LandingPage;
