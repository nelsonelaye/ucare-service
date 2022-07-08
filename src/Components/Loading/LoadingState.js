import React from "react";
import GridLoader from "react-spinners/GridLoader";
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
        <GridLoader color="#fff" />
      </div>
    </div>
  );
};

export default LoadingState;
