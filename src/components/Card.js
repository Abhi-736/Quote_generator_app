import React from 'react'
import { Box, HStack, Text, VStack, Button, } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'

const Card = ({ index }) => {
    const dispatch = useDispatch()

    const remove = () => {
        dispatch({ type: 'toremove', payload: index })
    }
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
            <HStack><Button onClick={remove} varient='ghost '>Remove</Button></HStack>
            <Text textAlign={['left', 'center']}
                px={'2.5rem'}
                py={'1.4rem'}
                fontFamily="Poppins, serif"
                fontWeight={'400'}
                color={'whiteAlpha.900'}
                lineHeight={'60px'}
                fontSize={'40px'} >{JSON.parse(localStorage.getItem("Array"))[index].content}
            </Text>
            <Text textAlign='center'
                px={6}
                color={'whiteAlpha.900'}
                position="relative"
                fontWeight={'700'}
                fontFamily="Poppins, serif" >-{JSON.parse(localStorage.getItem("Array"))[index].author}
            </Text>

        </Box>
    </VStack>
    )
}

export default Card