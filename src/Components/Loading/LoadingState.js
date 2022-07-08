import React from "react";
import RingLoader from "react-spinners/RingLoader";
const LoadingState = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: "rgba(0,0,0,0.5)",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        zIndex: 1000,
        top: 0,
      }}
    >
      <div>
        <RingLoader color="#fff" />
      </div>
    </div>
  );
};

export default LoadingState;
