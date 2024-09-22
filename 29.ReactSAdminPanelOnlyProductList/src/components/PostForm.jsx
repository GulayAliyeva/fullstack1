import React, { useState, useEffect } from 'react';
import { Input, Button } from '@chakra-ui/react';
import axios from 'axios';

function PostForm({ data, setData, editProduct, setEditProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    unitPrice: '',
    discontinued: false,
    unitsInStock: ''
  });

  useEffect(() => {
    if (editProduct) {
      setFormData({
        name: editProduct.name,
        unitPrice: editProduct.unitPrice,
        discontinued: editProduct.discontinued,
        unitsInStock: editProduct.unitsInStock
      });
    } else {
      setFormData({
        name: '',
        unitPrice: '',
        discontinued: false,
        unitsInStock: ''
      });
    }
  }, [editProduct]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      name: formData.name,
      unitPrice: parseFloat(formData.unitPrice),
      discontinued: formData.discontinued,
      unitsInStock: parseInt(formData.unitsInStock)
    };

    if (editProduct) {
   
      await axios.put(`https://northwind.vercel.app/api/products/${editProduct.id}`, newProduct);
      setData(data.map(item => item.id === editProduct.id ? { ...item, ...newProduct } : item));
      setEditProduct(null);
    } else {
    
      const response = await axios.post('https://northwind.vercel.app/api/products', newProduct);
      setData([...data, response.data]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        mb="2"
        required
      />
      <Input
        name="unitPrice"
        placeholder="Price"
        type="number"
        value={formData.unitPrice}
        onChange={(e) => setFormData({ ...formData, unitPrice: e.target.value })}
        mb="2"
        required
      />
      <Input
        name="unitsInStock"
        placeholder="Units in Stock"
        type="number"
        value={formData.unitsInStock}
        onChange={(e) => setFormData({ ...formData, unitsInStock: e.target.value })}
        mb="2"
        required
      />
      <label>
        Discontinued:
        <input
          name="discontinued"
          type="checkbox"
          checked={formData.discontinued}
          onChange={(e) => setFormData({ ...formData, discontinued: e.target.checked })}
        />
      </label>
      <Button type="submit" colorScheme="teal" mt="2">
        {editProduct ? 'Update Product' : 'Add Product'}
      </Button>
   
    </form>
  );
}

export default PostForm;
