import { data } from "../../../data";
import { useState } from "react";

const UserChallenge = () => {
  const [users, setUsers] = useState(data);
  const [name, setName] = useState(" ");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) return;
    const newId = Date.now();
    const newUsers = { id: newId, name: name };
    setUsers([...users, newUsers]);
    setName("");
  };
  const removeUser = (id) => {
    const selectUser = users.filter((person) => person.id !== id);
    setUsers(selectUser);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="name"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {users.map(({ id, name }) => {
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeUser(id)}>
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
