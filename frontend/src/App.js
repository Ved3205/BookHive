import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AddBooks from './pages/AddBooks';
import Books from './pages/Books';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/AddBooks" element={<AddBooks />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
