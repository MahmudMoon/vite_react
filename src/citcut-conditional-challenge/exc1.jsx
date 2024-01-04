import rocket from "../assets/rocket.gif";
import reactImg from "../assets/react.svg";
import { useEffect, useState } from "react";

const ToggleComp = () => {
  let [status, setStatus] = useState(false);
  return (
    <div>
      <div>
        <img src={status ? rocket : reactImg} alt="" />
      </div>
      <button
        onClick={() => {
          setStatus(!status);
        }}
      >
        {status ? "Rocket" : "React"}
      </button>
    </div>
  );
};

const LoginLogoutComp = () => {
  let [user, setUser] = useState(null);

  const login = () => {
    console.log("login");
    return (
      <div>
        <h1>Currently no user logged in</h1>
        <button
          onClick={() => {
            setUser((currentStatus) => {
              return { ...currentStatus, name: "moon" };
            });
          }}
        >
          Login
        </button>
      </div>
    );
  };

  const logout = () => {
    console.log("logout");
    return (
      <div>
        <h1>{"cuurent user " + user.name}</h1>
        <button
          onClick={() => {
            setUser(null);
          }}
        >
          Logout
        </button>
      </div>
    );
  };

  return user ? logout() : login();
};

const ThirdToggle = () => {
  let [loading, setLoading] = useState(false);
  return (
    <div>
      {loading && <FourthComp />}
      {!loading && <button onClick={() => setLoading(!loading)}>Toggle</button>}
    </div>
  );
};

const FourthComp = () => {
  let [data, setData] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, []);
  return data ? <h1>Hi There, i am on</h1> : <h1>Hello there</h1>;
};

export { LoginLogoutComp, ToggleComp, ThirdToggle };
