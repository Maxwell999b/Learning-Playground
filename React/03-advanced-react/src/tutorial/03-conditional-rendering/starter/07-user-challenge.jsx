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
          <h1>Hello there {user.name}</h1>
          <button className="btn" onClick={() => login()}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please Login</h4>
          <button className="btn" onClick={() => logout()}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
