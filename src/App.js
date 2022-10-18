import { Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import Item from './components/Item';
import Item2 from './components/Item2';
import Join from './components/Join';
import Login from './components/Login';
import Item3 from './components/Item3';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/item" element={<Item />} />
      <Route path="/item2" element={<Item2 />} />
      <Route path="/item3" element={<Item3 />} />
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
