import React from 'react'
import Banner from '@/components/module/Banner/Banner';
import { Box } from '@mui/material';
import Content from '@/components/module/Content/Content';


const LandingPage = () => {
  return (
    <div style={{height:"100%"}}>
      <Box>
        <Banner />
      </Box>
      <Content />
    </div>
  )
}

export default LandingPage;