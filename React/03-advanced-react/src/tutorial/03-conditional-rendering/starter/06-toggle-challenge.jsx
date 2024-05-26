import { useState } from "react";
const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(0);
  const ToggleButton = () => {
    if (showAlert) {
      setShowAlert(0);
      return;
    }
    setShowAlert(1);
  };
  return (
    <div>
      <button className="btn" onClick={() => ToggleButton()}>
        Show Alert
      </button>
      {showAlert === 1 && <Alert />}
    </div>
  );
};
const Alert = () => {
  return <div className="alert alert-danger">This Alert </div>;
};

export default ToggleChallenge;
