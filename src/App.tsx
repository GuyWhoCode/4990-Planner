import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ConfigurationProvider } from "./components/ConfigurationProvider";

function App() {
    return (
        <ConfigurationProvider>
            <main>
                <BrowserRouter basename="/">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </main>
        </ConfigurationProvider>
    );
}

export default App;
