import { useState, useEffect } from "react";
const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          const msg = console.log(`OK ERROR : ${resp.status}`);
          throw new Error(msg);
        }
        const data = await resp.json();
        setUsers(data);
      } catch (error) {
        console.log(`Error Block : ${error}`);
      }
    };
    fetching();
  }, []);
  return (
    <>
      <h1>Github Users</h1>
      <ul className="users">
        {users.map((user) => {
          const { id, login, html_url, avatar_url } = user;
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
      <button className="btn">Testing</button>
    </>
  );
};
export default FetchData;
