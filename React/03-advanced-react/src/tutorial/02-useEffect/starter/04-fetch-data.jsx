import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchingFunc = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          const msg = `Try Block : ${resp.status}  ${resp.statusText} `;
          throw new Error(msg);
        }
        const data = await resp.json();
        setUsers(data);
      } catch (error) {
        console.log(`Error from the Catch Block : ${error}`);
      }
    };
    fetchingFunc();
  }, []);
  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
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
