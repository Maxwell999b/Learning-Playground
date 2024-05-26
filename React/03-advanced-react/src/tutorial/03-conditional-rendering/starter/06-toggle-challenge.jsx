import { useState } from "react";
const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(0);
  function ToggleButton() {
    setShowAlert(showAlert ? 0 : 1);
  }
  return (
    <div>
      <button className="btn" onClick={() => ToggleButton()}>
        Show the Alert
      </button>
      {showAlert === 1 && <Alert />}
    </div>
  );
};
const Alert = () => {
  return <div className="alert alert-danger">Hello,This is Alert Message "Have A good Day"</div>;
};

export default ToggleChallenge;
