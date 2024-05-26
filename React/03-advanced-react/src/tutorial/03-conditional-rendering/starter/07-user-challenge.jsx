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
  return (
    <div>
      {user ? (
        <div>
          <h3>Hello there, {user.name}</h3>
          <button className="btn" onClick={() => logout()}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h3>Please Login</h3>
          <button className="btn" onClick={() => login()}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
