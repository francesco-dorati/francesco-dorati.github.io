import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Films from './pages/Films';
import Learning from './pages/Learning';
import EducationDetail from './pages/EducationDetail';
import ProgramDetail from './pages/ProgramDetail';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetail />} />
          <Route path="films" element={<Films />} />
          <Route path="learning" element={<Learning />} />
          <Route path="education/:id" element={<EducationDetail />} />
          <Route path="programs/:id" element={<ProgramDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
