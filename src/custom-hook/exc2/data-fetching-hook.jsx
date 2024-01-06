import { useState } from "react";

const useFetchHook = (url) => {
  let [data, setData] = useState(null);
  let [error, setError] = useState(null);
  let [isloading, setIsLoading] = useState(false);

  const fetchingData = () => {
    console.log("rendering");
    setIsLoading(true);
    fetch(url)
      .then((result) => {
        console.log(result);
        return result.json();
      })
      .then((result) => {
        console.log(result);
        setData(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setIsLoading(false);
      });
  };

  return { isloading, error, data, fetchingData };
};

export default useFetchHook;
