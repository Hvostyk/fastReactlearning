import Homepage from "./pages/Homepage.jsx";
import Signup from "./pages/Signup.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App
