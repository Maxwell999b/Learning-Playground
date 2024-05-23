import { useState, useEffect } from "react";
const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchFunc = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          const msg = `OK_ERROR : ${resp.status} + ${resp.statusText}`;
          throw new Error(msg);
        }
        const data = await resp.json();
        // console.log(data);
        setUsers(data);
      } catch (error) {
        console.log(`CATCH_ERROR : ${error}`);
      }
    };
    fetchFunc();
  }, []);
  return (
    <>
      <h1>GitHub Users List</h1>
      <ul className="users">
        {users.map((user) => {
          const { login, id, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default FetchData;
