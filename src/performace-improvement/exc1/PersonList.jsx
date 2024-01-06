import { useState } from "react";
import ProductList from "./ProductList";

const PersonList = () => {
  return (
    <div>
      <Counter />
      <ProductList />
    </div>
  );
};

const Counter = () => {
  let [count, setCount] = useState(0);
  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      Cliked {count}
    </button>
  );
};

export default PersonList;
