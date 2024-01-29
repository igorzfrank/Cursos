import React from "react";
import Photo from "./Photo";
import Button from "./Button";

const bodyStyle = {
  padding: "100px 0px",
};

const container = {
  margin: "0 auto",
  maxWidth: "960px",
  display: "flex",
  justifyContent: "space-between",
  gap: "32px",
  flexWrap: "wrap",
};

const Body = ({ setNotification }) => {
  return (
    <section style={bodyStyle}>
      <div style={container}>
        <Photo setNotification={setNotification}/>
        <Photo setNotification={setNotification}/>
        <Photo setNotification={setNotification}/>
      </div>
      <Button />
    </section>
  );
};

export default Body;
