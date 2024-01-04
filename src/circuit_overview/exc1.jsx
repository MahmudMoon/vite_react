import { useState } from "react";
import loading from "../assets/rocket.gif";

const DisplayUser = () => {
  let [user, setUser] = useState(null);
  setTimeout(() => {
    setUser({ name: "Moon" });
  }, 5000);

  let userStatus = user || "No user found";
  console.log(userStatus);

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.name}</h1>
        </div>
      ) : (
        <div>
          <img src={loading} alt="loading " />
        </div>
      )}

      {/* {!user && (
        <div>
          <img src={loading} alt="loading " />
        </div>
      )}
      {user && (
        <div>
          <h1>{user.name}</h1>
        </div>
      )} */}
    </div>
  );
};

export default DisplayUser;
