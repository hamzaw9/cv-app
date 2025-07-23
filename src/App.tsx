import EducationalExperience from "./components/EducationalExperience";
import GeneralInfo from "./components/GeneralInfo";
import PracticalExperience from "./components/PracticalExperience";

function App() {
  return (
    <div className="bg-base h-screen p-3">
      <GeneralInfo />
      <EducationalExperience />
      <PracticalExperience />
    </div>
  );
}

export default App;
