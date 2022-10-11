import './App.css';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
// import Dashboard from './pages/Dashboard';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Home />
      <Dashboard />
    </>
      // <Header />
    //   <BrowserRouter>
    //   <Routes>
    //     {/* <Route path="/" element={<Header />} /> */}
    //     <Route path="/dashboard" element={<Dashboard />} />
    //     {/* <Route path="/search" element={<Search />} /> */}
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
