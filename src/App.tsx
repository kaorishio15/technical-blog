import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Post from "./pages/Post";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:slug" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;