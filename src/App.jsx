import './App.css'
import Home from './Home'
import DevOverview from './DevOverview';
import {HashRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/developer" element={<DevOverview />} />
      </Routes>
    </HashRouter>
    );
}

export default App
