import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/home_page/HomePage';
import AddLauncherPage from './pages/add_launcher_page/AddLauncherPage';
import LauncherDetailsPage from './pages/launcher_details_page/LauncherDetailsPage';

import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/add_Launcher_Page">add Launcher</Link> |{" "}
          <Link to="/Launcher_Details_Page">Launcher Details</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/add_Launcher_Page" element={<AddLauncherPage />} />
          <Route path="/Launcher_Details_Page" element={<LauncherDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
