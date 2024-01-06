import { useState } from "react";
import NavLinkCmp from "./nav-link";

const NavBarCmp = () => {
  let [user, setUser] = useState({ name: "Moon" });
  return <NavLinkCmp user={user} setUser={setUser} />;
};

export default NavBarCmp;
