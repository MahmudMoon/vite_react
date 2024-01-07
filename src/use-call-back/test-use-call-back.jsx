import { useCallback, useMemo, useState } from "react";

const UseCallBackDemo = () => {
  let [count, setCount] = useState(0);
  let res = useMemo(() => {
    console.log("render");
    return SlowFunc();
  }, []);
  console.log(res);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {" "}
        Count {count}
      </button>
    </div>
  );
};

const SlowFunc = () => {
  let data = 0;
  for (let i = 0; i < 1000000000; i++) {
    data += i;
  }
  console.log("..", data);
  return data;
};

export default UseCallBackDemo;
