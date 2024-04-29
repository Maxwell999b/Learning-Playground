const ErrorExample = () => {
  let counter = 0;
  const handleLog = () => {
    counter++;
    console.log(counter);
  };
  return (
    <>
      <h1>{counter}</h1>
      <button type="button" onClick={handleLog} className="btn">
        Button
      </button>
    </>
  );
};

export default ErrorExample;
