import React, { useEffect, useState } from 'react';
import styles from './AdminPage.module.css'; 


const EditProductModal = ({ product, onClose, onSave }) => {
    const [title, setTitle] = useState(product.title);
    const [image, setImage] = useState(product.image);

    const handleSave = () => {
        onSave({ ...product, title, image });
        onClose();
    };

    return (
        <div className={styles.modal}>
            <h3>Edit Product</h3>
            <label>Title:</label>
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
            />
            <label>Image URL:</label>
            <input 
                type="text" 
                value={image} 
                onChange={(e) => setImage(e.target.value)} 
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={onClose}>Cancel</button>
        </div>
    );
};

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('http://localhost:5000/products'); 
            const data = await response.json();
            setProducts(data);
            setLoading(false);
        };

        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        await fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
        });
        setProducts(products.filter(product => product.id !== id));
    };

    const handleEdit = (product) => {
        setSelectedProduct(product);
        setIsEditing(true);
    };

    const handleSave = async (updatedProduct) => {
        await fetch(`http://localhost:5000/products/${updatedProduct.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProduct),
        });
        setProducts(products.map(p => (p.id === updatedProduct.id ? updatedProduct : p)));
        setIsEditing(false);
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className={styles.dashboard}>
            <h2>Admin Dashboard</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td><img src={product.image} alt={product.title} width={50} /></td>
                            <td>
                                <button  className={styles.edit} onClick={() => handleEdit(product)}>Edit</button>
                                <button  className={styles.delete} onClick={() => handleDelete(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isEditing && (
                <EditProductModal 
                    product={selectedProduct} 
                    onClose={() => setIsEditing(false)} 
                    onSave={handleSave} 
                />
            )}
        </div>
    );
};

export default AdminDashboard;
