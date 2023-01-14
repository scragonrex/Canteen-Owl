import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import HomeSF from './components/HomeSF';
import HomeO from './components/HomeO';

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/HomeSF" element={<HomeSF/>} />
        <Route path="/HomeO" element={<HomeO/>} />
      </Routes>
</BrowserRouter>
  );
}

export default App;
