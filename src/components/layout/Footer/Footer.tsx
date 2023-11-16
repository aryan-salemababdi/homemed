"use client"
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';



const Footer = () => {

  const scroller = (value: number) => {
    window.scrollTo({
      top: value,
      behavior: "smooth",
    });
  };

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
              Tebfarda&copy;
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Box position="fixed" bottom={10} left={10}>
        <Button onClick={() => { scroller(0) }} sx={{borderRadius:"25px"}}>
          <ArrowCircleUpIcon sx={{ fontSize: "3rem", color: "#1E73BE" }} />
        </Button>
      </Box>

    </>
  )
}

export default Footer;