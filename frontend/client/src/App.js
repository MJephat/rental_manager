import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Analytics from "./pages/Analytics";
import Comment from "./pages/Comment";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Sidebar from "./components/Sidebar";


const App = () => {
  return(
    <div>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/product" element={<Product />} />
            <Route path="/ProductList" element={<ProductList />} />
          </Routes>
        </Sidebar>
      </Router>
    </div>
  )
}

export default App;