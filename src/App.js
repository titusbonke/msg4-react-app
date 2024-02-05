import { BrowserRouter ,Routes,Route } from 'react-router-dom';

import './App.css';
import TestPage from './Pages/TestPage';
import MainLayout from './Layouts/MainLayout';
import ErrorLayout from './Layouts/ErrorLayout';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout><TestPage /></MainLayout>} />
      <Route path='*' element={<ErrorLayout></ErrorLayout>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
