import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './Pages/Landing/Landing';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
