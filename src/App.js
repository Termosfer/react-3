import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/anaSehife/HomePage";
import Contact from "./pages/contact/Contact";
import Movies from "./pages/filmler/Movies";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
