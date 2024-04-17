import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Planner from './pages/Planner';

function App() {
    return (
        <main>
            <BrowserRouter basename="/">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/planner" element={<Planner />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;
