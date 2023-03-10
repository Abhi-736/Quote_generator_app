import React from 'react'
import Card from './Card'
import { useSelector } from "react-redux"
const Bookmarks = () => {
  const { bookmark } = useSelector(state => state.third)
  return (
    <div className='bodyy'>{bookmark.map((value,key)=><Card index={key} key={value.id} />)}</div> //mapping over the bookmark array and passing card component over each of its element.
  )
}

export default Bookmarks