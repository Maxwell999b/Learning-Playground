import { data } from "../../../data";
import { useState } from "react";
const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    // console.log(data);
    if (!name) return;
    const fakeId = Date.now();
    console.log(fakeId);
    const newUser = { id: fakeId, name: name };
    setUsers([...users, newUser]);
    setName("");
  };
  const handleRemove = (id) => {
    const removeUser = users.filter((person) => person.id !== id);
    setUsers(removeUser);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
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
      {users.map(({ id, name }) => {
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button className="btn" onClick={() => handleRemove(id)}>
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
