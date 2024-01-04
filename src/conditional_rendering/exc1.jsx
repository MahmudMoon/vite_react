import { useState, useEffect } from "react";
const url = "https://api.github.com/users/defunkt";

const FetchConditionalRendering = () => {
  let [isFetching, setIsLoading] = useState(true);
  let [user, setUser] = useState(undefined);
  let [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let response = await fetch(url);
        if (response.ok) {
          let userInfo = await response.json();
          console.log(userInfo);
          setUser(userInfo);
        } else {
          console.log("response not found");
          setIsError(true);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      }
    };
    fetchUser();
  }, []);
  if (isFetching) {
    return <h1>Data fetching...</h1>;
  }

  if (isError) {
    return <h1>Error fetching data</h1>;
  }

  if (user) {
    let { avatar_url, name } = user;
    return (
      <>
        <div>
          <img src={avatar_url} alt="" />
        </div>
        <div>
          <h2>{name}</h2>
        </div>
      </>
    );
  }
};

export default FetchConditionalRendering;
