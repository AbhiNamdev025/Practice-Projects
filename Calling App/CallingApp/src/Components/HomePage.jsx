import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [input, setInput] = React.useState("");

  const navigate = useNavigate();
  const submithandler = () => {
    navigate(`/room/${input}`);
  };
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)"
    }}>
      <div style={{
        background: "rgba(255,255,255,0.1)",
        padding: "40px 32px",
        borderRadius: "16px",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(8px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <h1 style={{
          color: "#fff",
          marginBottom: "24px",
          fontWeight: 700,
          letterSpacing: "1px"
        }}>
          Welcome to SnapMeet
        </h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            padding: "12px 16px",
            borderRadius: "8px",
            border: "none",
            marginBottom: "20px",
            width: "220px",
            fontSize: "16px",
            outline: "none",
            boxShadow: "0 2px 8px rgba(30,60,114,0.1)"
          }}
        />
        <button
          onClick={submithandler}
          style={{
            padding: "12px 32px",
            borderRadius: "8px",
            border: "none",
            background: "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)",
            color: "#fff",
            fontWeight: 600,
            fontSize: "16px",
            cursor: "pointer",
            transition: "background 0.3s"
          }}
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default HomePage;
