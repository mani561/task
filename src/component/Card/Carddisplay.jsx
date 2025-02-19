import { Stack } from '@mui/material'
import React from 'react'
import FirstCard from './FirstCard'
import SecondCard from './SecondCard'
import ThirdCard from './ThirdCard'

const Carddisplay = () => {
  return (
     <Stack direction='row' gap={4} m={5}>
       <FirstCard/>
       <SecondCard/>
       <ThirdCard/>
     </Stack>
  )
}

export default Carddisplay
