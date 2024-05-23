import { useState, useEffect } from "react";
const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const FetchingFunc = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          const msg = console.log(`OK_ERROR : ${resp.status} + ${resp.statusText}`);
          throw new Error(msg);
        }
        const data = await resp.json();
        setUsers(data);
      } catch (error) {
        console.log(`CATCH_ERROR : ${error}`);
      }
    };
    FetchingFunc();
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
                <h3>{login}</h3>
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
