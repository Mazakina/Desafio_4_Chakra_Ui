import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors:{
        gray:{
            700: '#47585B'
        }
    },
    styles:{
        global:{
            body:{
                fontFamily:'poppins,sans-serif',
                bg: 'gray.100'
            }
        }
    }
})