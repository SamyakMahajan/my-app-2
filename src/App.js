import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddProduct from './AddProduct';
import ListProducts from './ListProducts';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/add-product">Add Product</Link>
                        </li>
                        <li>
                            <Link to="/list-products">List Products</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/add-product" element={<AddProduct />} />
                    <Route path="/list-products" element={<ListProducts />} />
                    <Route path="/" element={<div>Welcome to the Product Management System</div>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
