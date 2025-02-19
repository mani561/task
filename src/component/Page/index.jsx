import React from 'react'
import { Box, Container } from '@mui/material'
import Navebar from '../Navebar';
import Hero from '../Hero';
import AccordionSection from '../Accordin/Accordin';
import Carddisplay from '../Card/Carddisplay';
import Tabs from '../Tabs/Tabs';
import Tabs2 from '../Tabs/Tabe2';

const Page = () => {
  return (
    <Container>
      <Box>
        <Navebar/>
        </Box>
        <Box>
        <Hero />
        </Box>
        <Box>
        <AccordionSection/>
      </Box>
      <Box>
        <Carddisplay/>
      </Box>
      <Box>
        <Tabs/>
        <Tabs2/>
      </Box>
      </Container>
  )
}

export default Page
