import { useState } from "react";
import NavLinkCmp from "./nav-link";
import { createContext } from "react";

export const NavBarContext = createContext();

const NavBarCmp = () => {
  let [user, setUser] = useState({ name: "Moon" });
  return (
    <NavBarContext.Provider value={{ user, setUser }}>
      <NavLinkCmp />;
    </NavBarContext.Provider>
  );
};

export default NavBarCmp;
