import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import {Select, Link, Box} from "@chakra-ui/react";



const Tag = () => {
  const dispatch=useDispatch();
  const {tag}= useSelector(state=>state.fourth)
          
  return (
   <Box>
    <Link to="/tags">
  <Select variant='filled'
  focusBorderColor="white"
  bg='white'
  size='md'
    value={tag}
    onChange={e => dispatch({type:"selectedTag", payload:e.target.value})}
  > 
  <option value="random">Random</option>
    <option value="random?tags=famous-quotes">Famous-quotes</option>
    <option value="random?tags=inspirational">Inspirational</option>
    <option value="random?tags=wisdom">Wisdom</option>
    <option value="random?tags=friendship">Friendship</option>
  </Select></Link>
  </Box>
  
  )
  }
  

export default Tag