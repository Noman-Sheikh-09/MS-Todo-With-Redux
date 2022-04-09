import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import MyDay from "./pages/myDay/MyDay";
import Important from "./pages/important/Important";
import Assigned from "./pages/assigned/Assigned";
import Tasks from './pages/tasks/Tasks'
import Planning from "./pages/planning/Planning";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyDay />} />
          <Route path="/important" element={<Important />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/asigned_to_me" element={<Assigned />} />
          <Route path="/mytasks" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
