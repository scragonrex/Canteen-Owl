import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import HomeSF from './components/HomeSF';
import HomeO from './components/HomeO';
import FoodItemState from './components/context/FoodItemState';

function App() {
  return (
    <FoodItemState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/HomeO" element={<HomeO />} />
          <Route path="/HomeSF" element={<HomeSF />} />   
        </Routes>
      </BrowserRouter>
    </FoodItemState>
  );
}

export default App;
