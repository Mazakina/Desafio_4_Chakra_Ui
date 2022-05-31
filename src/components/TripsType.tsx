import { Text, Flex, Img, useBreakpointValue, Icon } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { IoEllipse } from "react-icons/io5";

interface TripsTypeProps{
    src: string,
    children: string
}

export  function TripsType<TripsTypeProps>({src,children}){
    const isWideVersion = useBreakpointValue({
        base:false,
        lg:true
      })
   return(
    <Flex flexFlow={isWideVersion?'column':'row'} mt={['1.5rem','2rem']} mr={['1rem']}alignItems='center'>
        <Img display={['none','block']} mx={'auto'} width={'5rem'} src={ src }/> <Icon color={'#FFBA08'} display={['block','none']} ml='1rem' fontSize='.8rem' as={IoEllipse}/>
        <Text mt={isWideVersion?'1.5rem': ''} fontSize={[`1.125rem`, `1.5rem`]} fontWeight={[`medium`,`semibold`]} ml={[`.5rem`,'.5rem', 0]}>{children}</Text>
     </Flex>
   )
}