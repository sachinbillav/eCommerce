import './App.css'
import Home from './Home.jsx'
import Searcher from './home/Searcher.jsx';
import NoPage from './NoPage.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/Home" element={<Home/>} />
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage/>} />

          </Routes>
        </BrowserRouter>
      );
}

export default App
