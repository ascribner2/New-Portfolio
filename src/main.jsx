import { createRoot } from 'react-dom/client';
import './index.css';
import Homepage from './Pages/Homepage.jsx';
import ViewProject from './Pages/ViewProject.jsx';
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/view-project" element={<ViewProject />} />
    </Routes>
  </BrowserRouter>
  ,
)
