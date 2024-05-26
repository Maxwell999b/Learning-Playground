import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState([]);
  // const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const Fetching = async () => {
      const response = await fetch(url);
      // console.log(response);
      const user = await response.json();
      console.log(user);
      setUser(user);
    };
    Fetching();
  }, []);
  return (
    <div>
      <img style={{ width: "250px", borderRadius: "25px" }} src={user.avatar_url} alt={user.name} />
      <h1>{user.name}</h1>
      <h3>Work At {user.company}</h3>
      <h4>{user.bio}</h4>
    </div>
  );
};
export default MultipleReturnsFetchData;
