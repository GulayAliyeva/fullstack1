import React, { useEffect, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Input,
  Box
} from "@chakra-ui/react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { color } from 'framer-motion';

function Products({ user }) {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', stockCount: '', sale: false });
  const [editingProduct, setEditingProduct] = useState(null);
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  

  const handleAddProduct = () => {
    const product = { ...newProduct, id: uuidv4() };
    axios.post('http://localhost:5000/products', product)
      .then(response => setProducts([...products, response.data]));
  };

  const handleEdit = (product) => {
    setEditingProduct(product); 
  };
  
  const handleSaveEdit = () => {
    axios.put(`http://localhost:5000/products/${editingProduct.id}`, editingProduct)
      .then(response => {
        setProducts(products.map(prod => prod.id === editingProduct.id ? response.data : prod));
        setEditingProduct(null); 
      })
      .catch(error => {
        console.error("There was an error updating the product!", error);
      });
  };

  return (
    
      
      <Box>
      <h1>Product List</h1>
      
   
      <Box mb={5}>
        <Input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
          mb={3}
        />
        <Input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={e => setNewProduct({ ...newProduct, price: e.target.value })}
          mb={3}
        />
        <Input
          type="number"
          placeholder="Stock Count"
          value={newProduct.stockCount}
          onChange={e => setNewProduct({ ...newProduct, stockCount: e.target.value })}
          mb={3}
        />
        <label>
          <input
            type="checkbox"
            checked={newProduct.sale}
            onChange={e => setNewProduct({ ...newProduct, sale: e.target.checked })}
          />
          On Sale
        </label>
        <Button onClick={handleAddProduct}>Add Product</Button>
      </Box>

   
      {editingProduct && (
        <Box mb={5}>
          <Input
            type="text"
            placeholder="Product Name"
            value={editingProduct.name}
            onChange={e => setEditingProduct({ ...editingProduct, name: e.target.value })}
            mb={3}
          />
          <Input
            type="number"
            placeholder="Price"
            value={editingProduct.price}
            onChange={e => setEditingProduct({ ...editingProduct, price: e.target.value })}
            mb={3}
          />
          <Input
            type="number"
            placeholder="Stock Count"
            value={editingProduct.stockCount}
            onChange={e => setEditingProduct({ ...editingProduct, stockCount: e.target.value })}
            mb={3}
          />
          <label>
            <input
              type="checkbox"
              checked={editingProduct.sale}
              onChange={e => setEditingProduct({ ...editingProduct, sale: e.target.checked })}
            />
            On Sale
          </label>
          <Button onClick={handleSaveEdit}>Save</Button>
         
        </Box>
      )}

      <TableContainer>
        <Table variant="striped" colorScheme="blue">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>Stock</Th>
              <Th>Sale</Th>
              {user.isAdmin && <Th>Edit</Th>}
              {user.isAdmin && <Th>Delete</Th>}
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product) => (
              <Tr key={uuidv4()}>
                <Td>{product.id}</Td>
                <Td>{product.name}</Td>
                <Td>{product.price}</Td>
                <Td style={{ color: product.stockCount < 10 ? 'red' : product.sale === true ? 'green' : 'inherit' }}
                >
                  {product.stockCount}
                </Td>
                <Td>{product.sale ? 'Yes' : 'No'}</Td>
                {user.isAdmin && (
                  <Td>
                    <Button colorScheme="blue" onClick={() => handleEdit(product)}>Edit</Button>
                  </Td>
                )}
                {user.isAdmin && (
                  <Td>
          <Button
  colorScheme="red"
  onClick={() => {
    let arr = products.filter(item => item.id !== product.id);
    setProducts(arr); 
    axios.delete(`http://localhost:5000/products/${product.id}`);
     
    
  }}
>
  Delete
</Button>

                  </Td>
                )}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Products;
