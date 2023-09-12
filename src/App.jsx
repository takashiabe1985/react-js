import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert("push!");
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };

  return (
    <>
      <h1 style={contentStyle}>Good morning</h1>
      <ColorfulMessage color="green" message="whassup?" />
      <ColorfulMessage color="red" message="nothing much." />
      <button onClick={onClickButton}>push!</button>
    </>
  );
};

export default App;
