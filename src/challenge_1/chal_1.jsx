import "./chal_1.css";

import { useState } from "react";

const exc1 = () => {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);

  return (
    <div className="main_container">
      <div className="container_1">
        <button
          onClick={() => {
            setCount((currentStatus) => {
              return (currentStatus += 1);
            });
            console.log(count);
          }}
        >
          Click
        </button>

        <p>{count}</p>
      </div>

      <div className="container_2">
        <button
          onClick={() => {
            setCount2((currentStatus) => {
              return (currentStatus += 1);
            });
            console.log(count2);
          }}
        >
          Click
        </button>

        <p>{count2}</p>
      </div>
    </div>
  );
};

export default exc1;
