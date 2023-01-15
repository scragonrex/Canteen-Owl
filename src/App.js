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
import { AuthContextProvider } from './components/context/AuthContext';
import Protected from './components/Protected';

function App() {
  return (
    <>
      <AuthContextProvider>
        <FoodItemState>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/HomeO" element={<HomeO />} />
              <Route path="/HomeSF" element={<Protected><HomeSF /></Protected>} />
            </Routes>
          </BrowserRouter>
        </FoodItemState>
      </AuthContextProvider>
    </>
  );
}

export default App;
