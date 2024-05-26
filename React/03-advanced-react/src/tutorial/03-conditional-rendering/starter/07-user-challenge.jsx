import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  function login() {
    setUser({ name: "Maxwell999" });
  }
  function logout() {
    setUser(null);
  }
  // function toggleUser() {
  //   setUser((prevUser) => (prevUser ? null : { name: "Maxwell999" }));
  // }
  return <div>{user ? <LogoutForm user={user} logout={logout} /> : <LoginForm login={login} />}</div>;
};

const LogoutForm = ({ user, logout }) => {
  return (
    <div>
      <h3>Hello there, {user.name}</h3>
      <button className="btn" onClick={() => logout()}>
        Logout
      </button>
    </div>
  );
};
const LoginForm = ({ login }) => {
  return (
    <div>
      <h3>Please Login</h3>
      <button className="btn" onClick={() => login()}>
        Login
      </button>
    </div>
  );
};
export default UserChallenge;
