import { useState } from "react";

const useToggle = (defaultValue) => {
  let [toggle, setToggle] = useState(defaultValue);
  const changeToggle = () => {
    setToggle(!toggle);
  };
  return { toggle, changeToggle };
};

export default useToggle;
