import { Swiper, SwiperSlide,  } from 'swiper/react';
import {Navigation, Scrollbar, Pagination } from 'swiper';

import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
type HomeSlideProps ={
    props:{
        id:string,
        name:string,
        banner:string,
        bannerDesc:string,
        content:{
            ladingImg:string,
            description:string,
            cities:{
                ladingImg:string,
                description:string,
                cities:{
                    name:string,
                    img:string,
                    homeCountry:string,
                }[]
            }[]
        }
    }[];
}
export function HomeSlide({props}:HomeSlideProps){
    return(
        <Box 
            maxWidth={1240}
            w='100%'
            height={['250px','350px','450px']}
            mx='auto'
            >
                
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            scrollbar={{ draggable: true }}
            modules=    {[Navigation,Scrollbar,Pagination]}
            >
                {props.map((value)=>{
                    let cHover= false;
                    return(
                        <SwiperSlide >
                            <Link passHref href={`/continentes/${value.id}`}>
                                <Box as='a'
                                
                                display={`flex`}
                                height={['250px','350px','450px']}
                                overflow={`hidden`} 
                                w={`100%`} 
                                bgSize='cover'
                                backgroundImage={value.banner}
                                backgroundPosition="center"
                                backgroundRepeat="no-repeat">
                                    <Box 
                                    _hover={{
                                        bg:'#1c140151'
                                    }}
                                    transition={[`ease-in-out`, `0.5s`]}
                                    display={`flex`}
                                    width={'inherit'}
                                    height={'inherit'} 
                                    flexFlow='column'
                                    justifyContent='center'
                                    alignItems={`center`}
                                    bg='#1c140121'
                                    >
                                        <Text  fontSize={['1.5rem',`3rem`]} fontWeight='bold' color='white' >{value.name}</Text>
                                        <Text  fontSize={['0.875rem',`1rem`]} fontWeight='bold' color='white' >{value.bannerDesc}</Text>
                                    </Box>
                                </Box>
                            </Link>
                        </SwiperSlide>
                    )
                })
                }
            </Swiper>
        </Box>
    )
}