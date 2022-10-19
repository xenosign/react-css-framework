import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Item from './pages/Item';
import Join from './pages/Join';
import Login from './pages/Login';
import AlbumOG from './components/AlbumOg';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/item" element={<Item />} />
      <Route path="/album" element={<AlbumOG />} />
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
