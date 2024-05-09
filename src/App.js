import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ProjectsPage from './components/ProjectsPage';
import ExperiencePage from './components/ExperiencePage';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <Router>
    <body>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </body>
    </Router>
  );
}

export default App;
