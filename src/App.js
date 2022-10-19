import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Item from './pages/Item';
import Join from './pages/Join';
import Login from './pages/Login';
import Signup1 from './pages/Signup1';
import AlbumOG from './components/AlbumOg';
import SignUp2 from './pages/SignUp2';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/item" element={<Item />} />
      <Route path="/album" element={<AlbumOG />} />
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />

      <Route path="/signup1" element={<Signup1 />} />

      <Route path="/signup2" element={<SignUp2 />} />

    </Routes>
  );
}

export default App;
