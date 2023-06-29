import React from 'react'
import { Box} from '@chakra-ui/react'
import { SlideData } from './SlideData';
import CarouselTop from './CarouselTop';
import Body from './Body';
const Home = () => {
   
  return (
    <Box   >
                <CarouselTop slides={SlideData} />
        
           <Body/>
        
    </Box>
  )
}

export default Home