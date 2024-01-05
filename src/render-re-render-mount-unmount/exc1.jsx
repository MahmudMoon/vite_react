import { useEffect, useState } from "react";

const Component_1 = () => {
  let [data, setData] = useState(false);
  console.log("rendered cmp 1");
  useEffect(() => {
    console.log("cmp 1 use effect");
  }, []);
  return (
    <div>
      <h1>Hello</h1>
      <button
        onClick={() => {
          setData(!data);
        }}
      >
        Click Cmp1
      </button>
      {data}
      <Component_2 />
    </div>
  );
};

const Component_2 = () => {
  useEffect(() => {
    console.log("cmp 2 use effect");
  }, []);
  console.log("component 2");
  return <h1>I am component 2</h1>;
};

export default Component_1;
