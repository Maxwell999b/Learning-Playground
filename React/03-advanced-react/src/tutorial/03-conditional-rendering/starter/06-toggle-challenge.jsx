import { useState } from "react";
const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);
  const ToggleAlert = () => {
    if (showAlert) {
      setShowAlert(false);
      return;
    }
    setShowAlert(true);
  };
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          ToggleAlert();
        }}>
        Show Alert
      </button>
      {showAlert && <Alert />}
    </div>
  );
};
const Alert = () => {
  return <div className="alert alert-danger">hello world</div>;
};

export default ToggleChallenge;
