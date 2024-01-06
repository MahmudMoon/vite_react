const NavHostCmp = (props) => {
  let user = props.user;
  let setUser = props.setUser;
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
