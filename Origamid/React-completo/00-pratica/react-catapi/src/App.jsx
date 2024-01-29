import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

const notificationStyle = {
  width: "100px",
  height: "50px",
  position: "fixed",
  top: "0px",
  right: "0px",
  padding: '10px',
  background: 'darkgray'
};

function App() {
  const [notification, setNotification] = React.useState(false);

  const PopUp = () => {
    if (notification) {
      return (
        <div style={notificationStyle}>
          <p>Notificação</p>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <PopUp />
      <Header />
      <Body setNotification={setNotification} />
      <Footer />
    </>
  );
}

export default App;
