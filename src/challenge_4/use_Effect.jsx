import { useState, useEffect } from "react";

const UseEffectDemo = () => {
  let [data, setData] = useState(0);

  useEffect(() => {
    console.log("re-rendered");
  }, [data]);

  return (
    <div>
      <p>{data}</p>
      <button
        onClick={() => {
          console.log("button clicked");
          setData((currentStatus) => {
            return (currentStatus += 1);
          });
        }}
      >
        Click
      </button>
    </div>
  );
};

export default UseEffectDemo;
