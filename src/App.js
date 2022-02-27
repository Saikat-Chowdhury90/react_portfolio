import './App.css';

import HomeScreen from './screens/HomeScreen';
import SkillScreen from './screens/SkillScreen';
import BlogScreen from './screens/BlogScreen';
import ContactScreen from './screens/ContactScreen';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      
        <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" element = {<HomeScreen/>} ></Route>
        <Route path="/Skills" element={<SkillScreen/>} ></Route>
        <Route path="/Blog" element={<BlogScreen/>} ></Route>
        <Route path="/Contact" element={<ContactScreen/>} ></Route>
        

        </Routes>
      </Router>
    </div>
  );
}

export default App;
