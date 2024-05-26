import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  // const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const Fetching = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          const msg = "There was an error 400-500";
          throw new Error(msg);
        }
        // console.log(response);
        const user = await response.json();
        // console.log(user);
        setUser(user);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    Fetching();
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }
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
