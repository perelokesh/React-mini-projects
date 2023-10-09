import { Typography, Button } from '@mui/material'
export default function AppBar() {
  return (
    <div style={{display:'flex', justifyContent: 'space-between'}}>
      <div>
        <Typography variant="h6" >TODO APP</Typography>
      </div>
      <div style={{display:'flex'}}>
        <div style={{marginRight: '3px'}}>
          <Button 
              variant={"contained"} onClick={() => {
               window.location = '/signin'
          }
          }
          >SignIn
          </Button>
        </div>
        <div>
        <Button 
            variant={"contained"} onClick={() => {
               window.location = '/signup'
            }}>
          Signup</Button>
        </div>
      </div>
    </div>
  )
}

