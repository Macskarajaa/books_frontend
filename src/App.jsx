import { useState } from 'react'
import './App.css'
import { Flex, Button, Affix, Paper, Title } from '@mantine/core';
import { Text } from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import { Categories } from './components/Categories';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { BooksByCateg } from './components/BooksByCateg';
import { Books } from './components/Books';
import { SearchResult } from './components/SearchResult';
import { MyMenu } from './components/MyMenu';



function App() {
  const { height, width } = useViewportSize()
  const isMobile = useMediaQuery('(max-width:425px)')

  return (
    <BrowserRouter>
      <Flex
        bg={"var(--mantine-color-blue-light)"}
        mih={height}
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Affix position={{ top: 0 }} style={{ width: width, backgroundColor:"blue", height:"70px", alignContent:"center"}}>
          <Title order={3}  style={{ textAlign: "center" , color:"#7AD1DD"}}>Válogass a könyvtárban</Title>
        </Affix>
        <Affix position={{ top: isMobile ? 50 : 20, right:10}}>
          <MyMenu/>
        </Affix>
    

      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/books" element={<Books/>} />
        <Route path="/books/categ/:categId" element={<BooksByCateg/>} />
        <Route path="/books/search/:txt" element={<SearchResult/>} />

      </Routes>
      </Flex>
    </BrowserRouter>
  );
}


export default App
