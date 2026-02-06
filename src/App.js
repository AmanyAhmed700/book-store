import Header from "./components/header/header";
import "./App.css";

import Footer from "./components/footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import About from "./pages/about/About";
import Authors from "./pages/authors/authors";
import Cart from "./pages/cart/Cart";
import Login from "./pages/form/Login";
import Register from "./pages/form/Register";
import Book from "./pages/Book/Book";
import Contact from "./pages/contact/Contact";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/authors" element={<Authors/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/Book/:id" element={<Book/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
