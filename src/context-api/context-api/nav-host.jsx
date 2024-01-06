import { useContext } from "react";
import { NavBarContext } from "./nav-bar";

const NavHostCmp = () => {
  let { user, setUser } = useContext(NavBarContext);
  return (
    <div>
      {user && (
        <button
          onClick={() => {
            setUser(null);
          }}
        >
          Logout
        </button>
      )}
      {user && <p>{user.name}</p>}
      {!user && (
        <button
          onClick={() => {
            setUser({ name: "Moon" });
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default NavHostCmp;
