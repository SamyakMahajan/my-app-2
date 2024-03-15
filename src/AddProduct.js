import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: 0,
    });

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/products', product);
            alert('Product added successfully!');
            console.log(response.data);
            // Reset form or handle success
        } catch (error) {
            console.error('There was an error adding the product:', error);
            // Handle error
        }
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Price:
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default AddProduct;
