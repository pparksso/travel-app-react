import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import Tours from '@/pages/Tours';
import Info from '@/pages/Info';
import Edit from '@/pages/Edit';
import Create from '@/pages/Create';
import DefaultLayout from '@/layout/DefaultLayout';

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/mytour" element={<Tours />} />
        <Route path="/mypage" element={<Info />} />
      </Route>
      <Route path="/edit" element={<Edit />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
}

export default App;
