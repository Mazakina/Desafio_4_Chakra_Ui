import { Flex, Icon, Img , Text} from "@chakra-ui/react";
import { IoEarth } from 'react-icons/io5'

interface citiesProps{
    cityArray:{
        name:string,
        img:string,
        homeCountry:string,
        icon:string
    }[]
  
}
export default function Cities({cityArray}:citiesProps){

   return(
   <Flex flexFlow={['column',null,'wrap']} align='center' justifyContent='space-between'>
    {cityArray.map((city)=>{
        return(
            <Flex bg={'white'} mb={'3rem'} overflow={'hidden'} key={city.name} border='2px solid #FFBA0851' borderRadius={'10px'} flexFlow={'column'} width={['18rem','256px']} ml='10px' >
                <Img height={['13rem','173px']} objectFit={'cover'} width={['18rem','256px']}  src={city.img} />
                <Flex  px={'2rem'} lineHeight='1.5' justifyContent={'space-between'} w={'100%'} alignItems={'center'}>
                    <Text fontSize={'1.25rem'} fontWeight='semibold' my={'1.5rem'} color={'gray.700'}> 
                        {city.name} <br />
                        <Text fontSize={'1rem'} fontWeight='normal' color={'gray.500'} as='span'>{city.homeCountry}</Text>
                    </Text>
                    <Icon as={IoEarth} fontSize='2rem'/>
                </Flex>
            </Flex>
        )

    })}
   </Flex>
   )
}
   
