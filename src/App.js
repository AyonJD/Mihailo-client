import { Route, Routes } from 'react-router-dom';
import './App.css';
import Event from './Components/Event/Event';
import Landing from './Pages/Landing/Landing';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create" element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
