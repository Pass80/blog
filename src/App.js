import './App.css';
import NavBar from './components/NavBar/NavBar';
import BlogsPage from './pages/BlogsPage/BlogsPage';
import BlogPage from './pages/BlogPage/BlogPage';
import HomePage from './pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/blogs/:id" element={<BlogPage />} />
            </Routes>
        </div>
    );
}

export default App;
