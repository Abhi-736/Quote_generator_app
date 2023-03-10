import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Bookmarks from "./components/Bookmarks";
import "./styles/App.scss";
import { ChakraProvider, theme } from '@chakra-ui/react';
import Tag from "./components/Tag"
const App = () => {
  return (<ChakraProvider theme={theme}>
     <Router>
      <Header />
      <Routes>
        <Route/>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/tags" element={<Tag />} />
      </Routes>

     {/*  <Footer /> */}
    </Router>
    </ChakraProvider>
  )
}

export default App