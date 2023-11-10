import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <>
      <Box>
      <AppBar position="static" sx={{ background: "#3AA76D", boxShadow: "none" }}>
        <Toolbar>
          <Typography 
          variant="h6"
          component="div" 
          sx={{ flexGrow: 1 }}
          textAlign="center"
          color="#fff"
          >
            &copy; 2020-Now Home Medical
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
        
        </>
  )
}

export default Footer;