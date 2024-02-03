import { BrowserRouter ,Routes,Route } from 'react-router-dom';

import './App.css';
import TestPage from './Pages/TestPage';
import MainLayout from './Layouts/MainLayout';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout><TestPage /></MainLayout>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
