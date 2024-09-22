import { useState } from 'react';
import { ChakraProvider, Button, Input, Box } from "@chakra-ui/react";
import Products from './components/Products';
import './App.css';

function App() {
  const [user, setUser] = useState(null); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
   
    const users = [
      { id: 1, name: "Gulay Aliyeva", email: "gulayliyeva22@gmail.com", password: "admin123", isAdmin: true },
      { id: 2, name: "Jane User", email: "user@example.com", password: "user123", isAdmin: false }
    ];

    const foundUser = users.find(u => u.email === email && u.password === password);

    if (foundUser) {
      setUser(foundUser);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <ChakraProvider>
      {user ? (
        <Products user={user} />
      ) : (
        <Box>
         
          <Input 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            mb={3}
          />
          <Input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            mb={3}
          />
          <Button onClick={handleLogin}>Login</Button>
        </Box>
      )}
    </ChakraProvider>
  );
}

export default App;
