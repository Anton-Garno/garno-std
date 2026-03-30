import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import Learn from './pages/Learn';
import LearnDetails from './pages/LearnDetails';
import About from './pages/About';

function App() {
    return (
        <BrowserRouter>
            <div className="bg-background min-h-screen text-white font-sans selection:bg-primary selection:text-white">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/learn" element={<Learn />} />
                    <Route path="/learn/:id" element={<LearnDetails />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default App
