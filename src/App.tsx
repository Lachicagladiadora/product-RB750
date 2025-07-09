import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClinicMedical } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <div className="flex flex-col text-9xl text-orange-500">
        <FontAwesomeIcon className="" icon={faClinicMedical} />
        Click on the Vite and React logos to learn more
      </div>
    </>
  );
}

export default App;
