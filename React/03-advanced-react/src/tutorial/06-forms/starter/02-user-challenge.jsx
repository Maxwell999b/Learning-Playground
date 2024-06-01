import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [users, setUsers] = useState(data);
  const [name, setName] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    if (!name) return;
    const fakeId = Date.now();
    // console.log(fakeId);
    const newUser = { id: fakeId, name: name };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setName("");
  };
  const removeUser = (id) => {
    const updatedUsers = users.filter((person) => person.id !== id);
    setUsers(updatedUsers);
  };
  return (
    <div>
      <form className="form" onSubmit={HandleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {users.map((user) => {
        // console.log(people);
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button
              className="btn"
              onClick={() => {
                removeUser(user.id);
              }}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
