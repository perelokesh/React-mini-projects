import { Container, Paper, TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const  [userData, setUserData] = useState({username: '', password:''});
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
     const response = await axios.post('http://localhost:3000/api/signup', userData);
     if(response.status === 200) {
      setUserData({username:'', password:''})
     }
    } catch (error) {
      console.log(error)
    }
  }
  const  handleChange = async(e) => {
    const  {name, value} = e.target;
    setUserData({...userData, [name]: value});
  }
  return (
    <Container maxWidth="sm" style={{ justifyContent:'center'}}>
      <center>
      <Typography variant="h6" gutterBottom>
         Welcome to Signup Page
        </Typography>
        </center>
      <Paper elevation={3} style={{width:400, padding:40,display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          type="username"
          variant="outlined"
          margin="normal"
          fullWidth
          name='username'
          onChange={handleChange}
          value={userData.username}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          name="password"
          onChange={handleChange}
          value={userData.password}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: '20px' }}
          type='submit'
        >
          Signup
        </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Signup;
