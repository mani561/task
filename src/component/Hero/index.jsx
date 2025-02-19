import React from 'react'
import { Box, Stack } from '@mui/material'
import Heroimage from './heroimage'
import Herosection from './herosection'


const Hero = () => {
  return (
    <div>
      <Stack direction="row">
        <Box>
          <Heroimage />
        </Box>
        <Box>
          <Herosection/>
        </Box>
      </Stack>
    </div>
  )
}

export default Hero
