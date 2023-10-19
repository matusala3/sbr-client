import "./App.css";
import Home from "./Home";
import StudentsView from "./components/student/StudentsView";
import AddStudent from "./components/student/AddStudent";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavBar } from "./components/common/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditStudent from "./components/student/EditStudent";
import StudentProfile from "./components/student/StudentProfile";

function App() {
  return (
    <main>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view-students" element={<StudentsView />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/edit-student/:id" element={<EditStudent />} />
          <Route path="/student-profile/:id" element={<StudentProfile />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
