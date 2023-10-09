import React from 'react';
import axios from 'axios';
import { Container, Paper, TextField, Button, Typography } from '@mui/material';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function onSubmit(e){
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/signup', {
       username, password
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container maxWidth="xs" style={{ justifyContent:'center'}}>
      <center>
      <Typography variant="h6" gutterBottom>
         Welcome to SignIn Page
        </Typography>
        </center>
      <Paper elevation={3} style={{width:400, padding:40,display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      
        <TextField
          label="Email"s
          type="email"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: '20px' }}
          onClick={onSubmit}
        >
          Signin
        </Button>
      </Paper>
    </Container>
  );
}

export default Signin;
