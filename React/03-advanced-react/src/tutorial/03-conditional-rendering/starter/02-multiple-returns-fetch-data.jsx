import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  // const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);
  // here we will get an error As well
  // const { avatar_url, name, company, bio } = user;

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
  // here we will get an error As well
  // const { avatar_url, name, company, bio } = user;

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }
  const { avatar_url, name, company, bio } = user;

  return (
    <div>
      <img style={{ width: "250px", borderRadius: "25px" }} src={avatar_url} alt={name} />
      <h1>{name}</h1>
      <h3>Work At {company}</h3>
      <h4>{bio}</h4>
    </div>
  );
};
export default MultipleReturnsFetchData;
