import './App.css';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CoinPage from './pages/CoinPage';
import Search from './components/DBComp/Search/Search';

function App() {
  return (
    // <>
    //   <Home />
    //   <Dashboard />
    // </>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coin" element={<CoinPage />} />
        {/* <Route path="/search" element={<Search />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
