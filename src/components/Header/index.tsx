import { Flex, Icon, Img } from "@chakra-ui/react";

export function Header (){
    return(
        <Flex
        as='header' 
        mx='auto'
        my={'7'}
        w='100%'
        align={'center'}
        justify='center'
        >
         <Img w={'50'} src="/images/logo.svg" alt="" />
        </Flex>
    )
}