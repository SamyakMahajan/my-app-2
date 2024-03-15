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
                            <Link to="https://ph726.azurewebsites.net/add-product">Add Product</Link>
                        </li>
                        <li>
                            <Link to="https://ph726.azurewebsites.net/list-products">List Products</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="https://ph726.azurewebsites.net/add-product" element={<AddProduct />} />
                    <Route path="https://ph726.azurewebsites.net/list-products" element={<ListProducts />} />
                    <Route path="https://ph726.azurewebsites.net/" element={<div>Welcome to the Product Management System</div>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
