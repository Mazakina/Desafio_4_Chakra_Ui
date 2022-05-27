import {Text,Box, Flex, Img, useBreakpointValue } from '@chakra-ui/react'
import { TripsType } from '../components/TripsType'
import { jsonDb } from '../services/jsonDb'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/virtual';
import { useEffect, useState } from 'react';
import { HomeSlide } from '../components/HomeSlide';
import { wrap } from 'module';



export default function Home() {
  const isWideVersion = useBreakpointValue({
    base:false,
    lg:true
  })
  const [continente,setContinente] = useState([])
  useEffect(()=>{
    jsonDb.get('/continentes').
      then(data=>{
        setContinente(data.data)
        console.log(continente)
      })
    },[])

  return(
    <Flex flexFlow={'column'} mb='2.5rem'>
      <Box //intro      
        height= {["163px","80"]}
      >  
        <Img
          objectPosition='0% 30%'
          src= 'https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1906' 
          objectFit='none'
          position={'absolute'}
          width= {'100vw'}
          height= {["163px","80"]}
          />
        <Flex  
        w={'100%'} 
        mx={`auto`} 
        maxWidth={'1160px'} 
        position='relative' 
        justifyContent='space-between'
        >
          <Flex 
          mx={`1rem`}
          maxWidth='45%'
          mt={['28px','80px']} 
          flexFlow={`column`}>
            <Text 
            as={'h1'} 
            fontSize={['1.25rem',`2.25rem`]} 
            color={'white'}
            >
              5 Continentes,<br/> infinitas possibilidades.
            </Text>
            <Text
            marginTop={['0.5rem','20px']} 
            fontSize={['0.925rem','1.25rem' ]}
            color={'gray.300'}>
              Chegou a hora de tirar do papel a viagem que você  sempre sonhou.
            </Text>
          </Flex>
            <Img
              display={['none','none','block']}
              src='/images/Airplane.svg'
              marginTop={'60px'}
              width={'104'}
            /> 
        </Flex>
      </Box>

      <Flex fontWeight={'semibold'} flexWrap={['nowrap','wrap']} color={'gray.600'} my={['2rem','5rem']} mx={`auto`}
       maxWidth={'1160px'} w={'100%'} justifyContent={'space-around'}>
        <TripsType src='images/cocktail 1.svg'>vida noturna</TripsType>
        <TripsType src='images/surf 1.svg'>Praia</TripsType>
        <TripsType src='images/building 1.svg'>Moderno</TripsType>
        <TripsType src='images/museum 1.svg'>Clássico</TripsType>
        <TripsType src='images/earth 1.svg'>E mais ...</TripsType>
      </Flex>

      <Box display='block'  mb='3rem' mx={'auto'} width={90} borderBottom='2px solid gray'> 
      </Box>

      <Text display={'block'} mx='auto' as='h1' fontSize={['1.25rem','2.25rem']} 
      fontWeight='medium' color='gray.600' textAlign={'center'} mb={[`1rem`,`2rem`,'4.25rem']}>
      Vamos nessa? <br />
      Então escolha seu continente
      </Text>

      <HomeSlide  props={continente}></HomeSlide>
    </Flex>
    )
}
