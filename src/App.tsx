import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./pages/Post";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-cream text-ink">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts/:slug" element={<Post />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
