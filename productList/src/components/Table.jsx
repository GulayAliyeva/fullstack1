import React, { useState, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Input
} from "@chakra-ui/react";
import axios from "axios";
import PostForm from './PostForm';
import Buttons from "./Buttons";
import { Button } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

function Tablex({ data, setData, name, setName, price, setPrice, discontinued, setdiscontinued, unitslnStock, setunitslnStock }) {
    
    const [sortByName, setSortByName] = useState('asc'); 
    const [sortByPrice, setSortByPrice] = useState('asc'); 
    const [showDiscontinued, setShowDiscontinued] = useState(false);
    const [searchQuery, setSearchQuery] = useState(""); 
    const [filteredData, setFilteredData] = useState(data);
    const [editProduct, setEditProduct] = useState(null); 

    useEffect(() => {
        const result = data
            .filter(item => 
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .filter(item => 
                showDiscontinued ? item.discontinued : true
            );
        setFilteredData(result);
    }, [searchQuery, showDiscontinued, data]);

    const handleEdit = (product) => {
        setEditProduct(product);
    };

    return (
        <div>
            <Input
                placeholder="Search by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                mb="10"
            />
            <h1>Form</h1>
            <PostForm mb="10"
                data={data}
                setData={setData}
                name={name}
                setName={setName}
                price={price}
                setPrice={setPrice}
                unitslnStock={unitslnStock}
                setunitslnStock={setunitslnStock}
                editProduct={editProduct} 
                setEditProduct={setEditProduct} 
            />
            <Buttons 
                sortByName={sortByName} 
                setSortByName={setSortByName} 
                sortByPrice={sortByPrice} 
                setSortByPrice={setSortByPrice} 
                setData={setData} 
                data={filteredData}
                showDiscontinued={showDiscontinued} 
                setShowDiscontinued={setShowDiscontinued}
            />
            <TableContainer>
                <Table variant="striped" colorScheme="blue">
                    <Thead>
                        <Tr>
                            <Th>Id</Th>
                            <Th>Name</Th>
                            <Th>Price</Th>
                            <Th>Discontinued</Th>
                            <Th>Units in Stock</Th>
                            <Th>Delete</Th>
                            <Th>Edit</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
               {filteredData.map((elem) => (
                            <Tr key={uuidv4()}>
                                <Td>{elem.id}</Td>
                                <Td>{elem.name}</Td>
                                <Td>{elem.unitPrice}</Td>
                                <Td>{elem.discontinued ? 'Yes' : 'No'}</Td>
                                <Td style={{ color: elem.unitsInStock < 20 ? 'red' : 'inherit' }}>
                                    {elem.unitsInStock}
                                </Td>
                                <Td>
                                    <Button
                                        colorScheme="red"
                                        data-id={elem.id}
                                onClick={(e) => {
                                     let arr = [...filteredData];
                                           arr = arr.filter(item => item.id !== e.target.getAttribute("data-id"));
                                            setData(arr);
                                            axios.delete("https://northwind.vercel.app/api/products/" + e.target.getAttribute("data-id"));
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </Td>
                         <Td>
                                    <Button
                                        colorScheme="blue"
                                        onClick={() => handleEdit(elem)}
                                    >
                                        Edit
                                    </Button>
                 </Td>
                  </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Tablex;
