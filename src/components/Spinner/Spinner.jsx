import React from 'react'
import { useSelector } from 'react-redux';
import { ClimbingBoxLoader, RingLoader, RiseLoader } from "react-spinners"

// todo: style spinner 
const styleSpinner = {
  width: "100vw",
  height: "100vh",
  background: "black",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export default function Spinner() {
  let { isLoading } = useSelector((state) => state.spinnerSlice);

  // use ternary operator to render spinner 
  // if isLoading = true => spinner will be rendered 
  return (
    isLoading ? (
      <div style={styleSpinner}>
        <RingLoader color="#3B82F6" size={100} />
      </div>
    ) : (<></>)
  );
}