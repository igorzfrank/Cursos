import React from "react";
import Produto from "./Produto";
import Button from "./Button";

const App = () => {
  const [item, setItem] = React.useState(null);

  React.useEffect(() => {
    const itemLocal = window.localStorage.getItem("produto");
    if (itemLocal !== "null") setItem(itemLocal);
  }, []);

  // React.useEffect(() => {
  //   if (item !== null) {
  //     window.localStorage.setItem("produto", item);
  //   }
  // }, [item]);

  // function handleClick({ target }) {
  //   setItem(target.innerText);
  // }

  return (
    <div>
      <Button label="notebook" setItem={setItem} />
      <Button label="smartphone" setItem={setItem} />
      <Produto item={item} />
    </div>
  );
};

export default App;
