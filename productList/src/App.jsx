import { useState, useEffect } from 'react';
import './App.css';
import Tablex from './components/Table';
import { ChakraProvider } from "@chakra-ui/react";
import axios from 'axios';

function App( ) {

  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
 const [discontinued,setdiscontinued]=useState('');
 const [unitslnStock,setunitslnStock] = useState(false);
 
  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/products')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <ChakraProvider>
      <Tablex   
        data={data} 
        setData={setData} 
        name={name} 
        setName={setName} 
        price={price} 
        setPrice={setPrice} 
        discontinued={discontinued}
        setdiscontinued={setdiscontinued}
        unitslnStock={unitslnStock}
        setunitslnStock={setunitslnStock}
        
      />
    </ChakraProvider>
  );
}

export default App;



