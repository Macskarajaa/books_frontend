import React from 'react'
import { Button, Flex, Modal, ScrollArea, Table } from '@mantine/core';
import { useState } from 'react';
import { useEffect } from 'react';
import { createBook, deleteBook, readBooks } from '../../utils';
import { FaTrashAlt } from "react-icons/fa";
import { TiPencil } from "react-icons/ti";
import { TextInput} from '@mantine/core';

export const Dashboard = () => {

 const [books, setBooks] = useState([])
 const [showForm, setShowForm] =useState(false)
 const [newBook, setNewBook] = useState({title:'', author:'', description:''})
 const [editingBook, setEditingBook] = useState(null)


 useEffect(()=>{
    readBooks(setBooks)
 },[])

 console.log(books);

 const handleDelete= async(id)=>{
  console.log(id);
  
  try {
    const response=await deleteBook(id)
    alert(response?.msg)
    setBooks(prev=>prev.filter(obj=>obj.id!=id))
  } catch (error) {
    console.log(error);
    alert(error.message)
    
  }
  
 }

 const handleEdit = (book)=>{
    setEditingBook(book)
    setNewBook(book)
    setShowForm(true)
 }
 

 const rows = books.map((obj) => (
    <Table.Tr key={obj.id}>
      <Table.Td>{obj.title}</Table.Td>
      <Table.Td>{obj.author}</Table.Td>
      <Table.Td>{obj.description}</Table.Td>
      <Table.Td>{obj.rating}⭐</Table.Td>
      <Table.Td>
        <FaTrashAlt size="20px" color='red' style={{cursor:"pointer"}} onClick={()=>handleDelete(obj.id)}/>
        <TiPencil size="20px" color='blue' style={{cursor:"pointer"}} onClick={()=>handleEdit(obj.id)}/>
        </Table.Td>
    </Table.Tr>

    
  ));
  const handleChange=(e)=>{
    setNewBook({...newBook,[e.target.name]:e.target.value})      
    }
    const handleSave=async()=>{
            try {
              if(editingBook){
                console.log("change");
                
              }
                const booktoSave={...newBook,category_id:1}
                const savedBook=await createBook(booktoSave)
                setBooks((prev)=>[...prev,savedBook])
                setShowForm(false)
                setNewBook({title:'', author:'', description:''})
            } catch (error) {
                console.log(error);
            }
    }

  return (
  <>
    <Flex direction='column' gap='md' justify='flex-start' align='center'>
    <ScrollArea h={500} scrollbarSize={2}>
    <Table stickyHeader withTableBorder withRowBorders withColumnBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Cím</Table.Th>
          <Table.Th>Szerő</Table.Th>
          <Table.Th>Leírás</Table.Th>
          <Table.Th>Szerkesztés</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
      <Table.Caption>összes könyv: {books.length}</Table.Caption>
    </Table>
    </ScrollArea>
    <Button onClick={()=>setShowForm(true)}></Button>
    </Flex>

     <Modal opened={showForm} onClose={()=>setShowForm(false)} title="Focus demo">
        <TextInput label="Cím" name="title" value={newBook.title} onChange={handleChange} required />
        <TextInput label="Szerző" name="author" value={newBook.author} onChange={handleChange} required />
        <TextInput label="Leírás" name="description" value={newBook.description} onChange={handleChange} required />
    <Button onClick={handleSave}>Mentés</Button>
      </Modal>
      </>
  );
  
}

