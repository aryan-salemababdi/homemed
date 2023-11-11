import React from 'react'
import Banner from '@/components/module/Banner/Banner';
import { Box } from '@mui/material';
import Content from '@/components/module/Content/Content';
import AboutUs from '@/components/module/AboutUs/AboutUs';


const LandingPage = () => {
  return (
    <div style={{height:"100%"}}>
      <Box>
        <Banner />
      </Box>
      <Content />
      <AboutUs />
    </div>
  )
}

export default LandingPage;