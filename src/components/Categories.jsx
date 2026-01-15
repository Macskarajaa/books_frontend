import { Box, Flex, Loader, Paper, Title } from '@mantine/core'
import React from 'react'
import { Text } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../../utils';
import { IconX } from '@tabler/icons-react';
import { Notification } from '@mantine/core';
import './Categories.css'
import { useNavigate } from 'react-router-dom';




export const Categories = () => {
  const navigate = useNavigate()

    const{ isLoading, status, data, error, isError } = useQuery({queryKey: ['categories'], queryFn:getCategories})
    data && console.log(data)
    isLoading && console.log("loading...")
    isError && console.log(error)

     const xIcon = <IconX size={20} />;


  return (
    <Flex 
    direction="column"
    justify="flex-start"
    gap="md"
    align="center"
    >
    {isLoading && <Loader color="blue" type="dots"/> } 
    {isError &&<Notification icon={xIcon} color="red" title="Bummer!">
                    {error.message}
                </Notification>}
    {data && data.data.map(obj=>
    <Box  key={obj.id}>
        <Paper className='category' shadow="md" radius="xl" withBorder p="xl" 
        style={{
          width:"300px",
         cursor:"pointer",

         transition:"all 150ms ease",
           "&:hover":{
            boxShadow:'md',
            backgroundColor:"blue"

           },

           }}>

          <Title order={3} style={{ textAlign: "center" }} onClick={()=>navigate('/books/categ/'+obj.id)}>{obj.name}</Title>
         </Paper>
    </Box>
    )
    

   
         }
   </Flex>
  )
}

