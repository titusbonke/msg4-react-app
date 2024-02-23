import { BrowserRouter ,Routes,Route } from 'react-router-dom';

import './App.css';
import TestPage from './Pages/TestPage';
import MainLayout from './Layouts/MainLayout';
import EntryLayout from './Layouts/EntryLayout';
import ErrorLayout from './Layouts/ErrorLayout';
import Dashboard from './Pages/Dashboard';
import AddGroup from './Pages/AddGroup';
import ManageGroup from './Pages/ManageGroup';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout><Dashboard /></MainLayout>} />
      <Route path='/dashboard' element={<MainLayout><Dashboard /></MainLayout>} />
      <Route path='/Master/AddGroup/:id?' element={<EntryLayout><AddGroup /></EntryLayout>} />
      <Route path='/Master/ManageGroup' element={<MainLayout><ManageGroup /></MainLayout>} />
      <Route path='/test' element={<MainLayout><TestPage /></MainLayout>} />
      <Route path='*' element={<MainLayout><ErrorLayout /></MainLayout>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
