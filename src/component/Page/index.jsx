import React from 'react'
import { Box, Container } from '@mui/material'
import Navebar from '../Navebar';
import Hero from '../Hero';

const Page = () => {
  return (
    <Container>
      <Box>
        <Navebar/>
        <Hero />
      </Box>
      </Container>
  )
}

export default Page
