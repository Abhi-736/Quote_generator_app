import React from 'react'
import {Box, Text, VStack} from '@chakra-ui/react'
import { useSelector } from "react-redux"
const Card = ({index}) => {
    const { bookmark } = useSelector(state => state.third)
    return (<VStack>
            <Box
                display="flex"
                flexDirection="column"
                borderRadius="20px"
                alignItems="center"
                bg={'#D05252'}
                w="60%"
                h="auto"
                mt={6}
                py={3} >

            <Text textAlign={['left', 'center']}
                px={'2.5rem'}
                py={'1.4rem'}
                fontFamily="Poppins, serif"
                fontWeight={'400'}
                color={'whiteAlpha.900'}
                lineHeight={'60px'}
                fontSize={'40px'} >{bookmark[index].content}
            </Text>
            <Text textAlign='center'
                px={6}
                color={'whiteAlpha.900'}
                position="relative"
                fontWeight={'700'}
                fontFamily="Poppins, serif" >-{bookmark[index].author}
            </Text>

        </Box>
        </VStack>
    )
}

export default Card