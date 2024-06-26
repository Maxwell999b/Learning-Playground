import { useAppContext } from "./Navbar";

const UserContainer = () => {
  const { user, logout, login } = useAppContext();
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There,{user.name.toUpperCase()}</p>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <p>Please Login</p>
          <button className="btn" onClick={login}>
            Login
          </button>
        </>
      )}
    </div>
  );
};
export default UserContainer;
