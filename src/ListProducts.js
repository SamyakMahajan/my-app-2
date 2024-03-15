import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ListProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://ph726.azurewebsites.net/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
                // Handle error
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        <strong>{product.name}</strong> - {product.description} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListProducts;
