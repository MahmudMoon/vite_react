import NavHostCmp from "./nav-host";

const NavLinkCmp = (props) => {
  let user = props.user;
  let setUser = props.setUser;
  return <NavHostCmp user={user} setUser={setUser} />;
};

export default NavLinkCmp;
