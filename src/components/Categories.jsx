import { Box, Loader, Paper } from '@mantine/core'
import React from 'react'
import { Text } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../../utils';
import { IconX } from '@tabler/icons-react';
import { Notification } from '@mantine/core';



export const Categories = () => {

    const{ isLoading, status, data, error, isError } = useQuery({queryKey: ['categories'], queryFn:getCategories})
    data && console.log(data)
    isLoading && console.log("loading...")
    isError && console.log(error)

     const xIcon = <IconX size={20} />;


  return (
    <>
    {isLoading && <Loader color="blue" type="dots"/> } 
    {isError &&<Notification icon={xIcon} color="red" title="Bummer!">
                    {error.message}
                </Notification>}
    {data && data.data.map(obj=>
    <Box key={obj.id}>
        <Paper shadow="md" radius="xl" withBorder p="xl" style={{width:"300px"}}>
           <Text>{obj.name}</Text>
         </Paper>
    </Box>
    )
    

   
         }
    </>
  )
}

