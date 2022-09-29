
import './App.css';
import Bookmark from './pages/Bookmark';
import Home from './pages/Home';
import Index from './pages/Index';


import { Routes, Route} from 'react-router-dom'
import Profile from './pages/Profile';
import AddJourney from './pages/AddJourney';
import Detail from './pages/Detail';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Index />}/>
      <Route path="/bookmark" element={<Bookmark />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/add-journey" element={<AddJourney />}/>
      <Route path="/detail" element={<Detail />}/>
    </Routes>
  );
}

export default App;
