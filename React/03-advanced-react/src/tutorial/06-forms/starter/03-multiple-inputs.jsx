import { useState } from "react";

const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [submittedUser, setSubmittedUser] = useState(null);

  const handleChange = (e) => {
    // console.log(e);
    // console.log(e.target.name);
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(user);
    const submittedUserData = {
      name: user.name || "N/A",
      email: user.email || "N/A",
      password: user.password || "N/A",
    };
    setSubmittedUser(submittedUserData);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Multiple Inputs</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            autoComplete="name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            autoComplete="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            autoComplete="current-password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {submittedUser && (
        <div>
          <h4>Submitted Data</h4>
          <p>
            <strong>Name:</strong> {submittedUser.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedUser.email}
          </p>
          <p>
            <strong>Password:</strong> {submittedUser.password}
          </p>
        </div>
      )}
    </div>
  );
};
export default MultipleInputs;
