import React from "react";
import addNotification from "react-push-notification";
import icon from "./assets/images/icon.jpg";
function App() {
  const clickToNotify = () => {
    addNotification({
      title: "Code with Apurbo",
      message: "Visit my Facebook Page",
      duration: 4000,
      icon: icon,
      native: true,
    });
  };
  return (
    <>
      <button onClick={clickToNotify} style={{ margin: "100px" }}>
        Click to Notify
      </button>
    </>
  );
}

export default App;
