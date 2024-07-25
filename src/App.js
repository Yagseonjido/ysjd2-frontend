import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import QuestionnairePage from "./pages/QuestionnairePage";
import SimulationPage from "./pages/SimulationPage";
import PatientResultPage from "./pages/PatientResultPage";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questionnaire" element={<QuestionnairePage />} />
          <Route path="/simulation/:patientId" element={<SimulationPage />} />
          <Route path="/result" element={<PatientResultPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
