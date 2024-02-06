import { BrowserRouter ,Routes,Route } from 'react-router-dom';

import './App.css';
import TestPage from './Pages/TestPage';
import MainLayout from './Layouts/MainLayout';
import ErrorLayout from './Layouts/ErrorLayout';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout><Dashboard /></MainLayout>} />
      <Route path='/dashboard' element={<MainLayout><Dashboard /></MainLayout>} />
      <Route path='/test' element={<MainLayout><TestPage /></MainLayout>} />
      <Route path='*' element={<MainLayout><ErrorLayout /></MainLayout>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
