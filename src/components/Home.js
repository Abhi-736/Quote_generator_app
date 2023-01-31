import React from 'react'
import { useDispatch } from 'react-redux';//to trigger action
import { Button, HStack, VStack, Box, Text } from "@chakra-ui/react";//importing components from Chakra UI
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";//using useSelector hook we can access any state stored in redux store
import { useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const url = "https://api.quotable.io/random"
  const { quotes } = useSelector(state => state.first);
  const { count } = useSelector(state => state.second);
  const dispatch = useDispatch();

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(url);//using axios to fetch data
        console.log(response.data.content)
        
        dispatch({ type: "randomquote", payload: response.data });
      }
      catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [count]);

const addBookmark=()=>{
dispatch({type:"toBookmark",
payload:quotes})//passing the quote to the builder function of third reducer as payload to push it into bookmark array
}

  const handleClick = () => {
    console.log('work')
    dispatch({ type: 'countInc' })//passing count
  }

  return ( 
    <VStack bgGradient='linear(256.47deg, #5E2AB3 2.64%,#161E6C 140.46%)'
      minWidth="100vw"
      minHeight="100vh" >
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
          fontSize={'40px'} >{quotes.content}
        </Text>
        <HStack >
          <Text
            px={6}
            color={'whiteAlpha.900'}
            position="relative"
            fontWeight={'700'}
            fontFamily="Poppins, serif" >-{quotes.author}
          </Text>
          <Button  _active={{
    bg: '#dddfe2',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',}}
    variant={'ghost'} onClick={addBookmark}>
            <FontAwesomeIcon className='bookmark' icon={faBookmark} />
          </Button>
        </HStack>

      </Box>
      <Box onClick={handleClick}

        textAlign='center'
        display="flex" alignItems="center" justifyContent="center"
        as='button'
        height='70px'
        lineHeight='1.2'
        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
        border='1px'

        px='2rem'
        py='1.5rem'
        top={'40px'}
        position='relative'
        borderRadius='30px'
        fontFamily={'poppins'}
        fontSize='40px'
        fontWeight='400'
        bg='#009C51'
        borderColor='#009C51'
        color='#FFFFFF'
        boxShadow=
        '2px 4px 10px 2px rgba(0, 0, 0, .25)'
        _hover={{ bg: '#ebedf0' }}
        _active={{
          bg: '#dddfe2',
          transform: 'scale(0.98)',
          borderColor: '#bec3c9',
        }}
        _focus={{
          boxShadow:
            '2px 4px 10px 2px rgba(0, 0, 0, .25), 0 1px 1px rgba(0, 0, 0, .15)',
        }}
      >
        Next Quote
      </Box>

    </VStack>
  
  )
}

export default Home