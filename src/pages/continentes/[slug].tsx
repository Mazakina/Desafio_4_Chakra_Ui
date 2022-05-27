import { Box , Flex, Img, Text, Tooltip} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Cities from "../../components/cities";
import { jsonDb } from "../../services/jsonDb";
import {AiOutlineInfoCircle} from 'react-icons/ai'
type HomeSlideProps ={
    props:{
        name:string,
        continent:string,
        content:object
    }[];
}

export default function continentes({name,continent,content}){
        return(
            <>
             <Head>
                 <title>{name} | WorldTrip</title>
             </Head>
             {(content?
               <Flex flexFlow={'column'} alignItems={'center'}>
                    <Box 
                 bgImage={`${content.landingImg}`} 
                 w={'100%'} 
                 h='500' 
                 backgroundPosition="center"
                 bgSize='cover'
                 bgRepeat={`no-repeat`} 
                >
                    <Box 
                        _hover={{
                            bg:'#1c140111'
                        }}
                        transition={[`ease-in-out`, `0.5s`]}
                        display={`flex`}
                        width={'inherit'}
                        height={'inherit'} 
                        flexFlow='column'
                        justifyContent={`flex-end`}
                        bg='#1c140131'
                        >
                            <Text as={'h1'} 
                            fontSize='3rem' 
                            fontWeight='semibold' 
                            color={'white'} 
                            mb='4rem'
                            ml='14vw'
                            >
                                {continent}
                            </Text>
                        </Box>
                    </Box>
                    <Flex maxW={ `1160px`} mx='1rem' mt={`5rem`} mb='2rem'flexFlow={`column`}>
                        <Flex mb={'5rem'} justifyContent={'space-between'}>
                            <Text fontFamily={'poppins'} fontSize='1.5rem' textAlign='justify' fontWeight='400' color={'gray.600'} maxW={`45%`}>
                                {content.description}
                            </Text>

                            <Flex 
                            w={'45%'}
                            justify={'space-around'}
                            alignItems={'center'}
                            >
                                <Flex alignItems={'center'} flexFlow={'column'}>
                                    <Text color={'#FFBA08'} fontWeight='semibold' fontSize='3rem'>50</Text>                                
                                    <Text color={'gray.500'} fontWeight='semibold' fontSize='1.5rem'>Países</Text>                                
                                </Flex>
                                <Flex alignItems={'center'} flexFlow={'column'}>
                                    <Text color={'#FFBA08'} fontWeight='semibold' fontSize='3rem'>60</Text>                                
                                    <Text color={'gray.500'} fontWeight='semibold' fontSize='1.5rem'>Linguas</Text>                                
                                </Flex>
                                <Flex alignItems={'center'} flexFlow={'column'}>
                                    <Text color={'#FFBA08'} fontWeight='semibold' fontSize='3rem'>27</Text>                                
                                    <Flex align={'center'}> 
                                        <Text mr={'.5rem'} color={'gray.500'} fontWeight='semibold' fontSize='1.5rem'>cidades +100</Text>   
                                        <Tooltip label='As 100 cidades mais visitadas'><a><AiOutlineInfoCircle/></a></Tooltip>
                                    </Flex>                              
                                </Flex>
                            </Flex>
                        </Flex>
                        <Text mb={'2.5rem'} w={'100%'} fontWeight='500' color={'gray.600'} fontSize='2.25rem'>Cidades +100 </Text>

                        <Cities cityArray={content.cities}/>
                    </Flex>

                
               </Flex>
                 : <span>Carregando...</span>)
             }
           
            </>
     
         )
}

export const getStaticPaths:GetStaticPaths = async ()=>{
    let contArray = []
    const cont =  jsonDb.get('/continentes').then(response=>contArray = response.data)
    return{
        paths: contArray.map((post)=>{
            return({
            params:{
                slug: post.id,
            }
            })
        }),
        fallback: true
    }
}

export const getStaticProps:GetStaticProps= async({params})=>{
    const {slug} = params
    const srcs= '/continentes/'+slug
    let dbData 
    const cont = await jsonDb.get(srcs).then(response=>dbData = response.data)
    return{
        props:{
            name:slug,
            continent:dbData.name,
            content: dbData.content
        }
    }

}