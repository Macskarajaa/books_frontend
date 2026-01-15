import { useParams } from 'react-router-dom'
import { getBooks, getBooksByCateg } from '../../utils'
import { Box, Flex, Loader, Paper, Title } from '@mantine/core'
import { useQuery } from '@tanstack/react-query';
import { IconX } from '@tabler/icons-react';
import { Notification } from '@mantine/core';
import './Categories.css'
import { MyCard } from './MyCard';


export const Books = () => {
      const { isLoading, status, data, error, isError} = useQuery({ queryKey: ['books'], queryFn: getBooks })
      const xIcon = <IconX size={20} />;
  return (
    <Flex 
                mt="5rem"
                direction="column"
                justify="flex-start"
                gap="md"
                align="center"
                > {isError &&<Notification icon={xIcon} color="red" title="Bummer!">
                                {error.message}
                            </Notification>}
                {isLoading && <Loader color="blue" type="dots"/> }
                {data && <Title>Összes könyv</Title> }
                
    
                {(data && data.data.length>0)? data.data.map(obj=>
                                            <Box  key={obj.id}>
                                                <MyCard {...obj}/>
                                            </Box>
                                        ) 
                                        :
    
                     <Notification icon={xIcon} color='indigo' title="Bummer!" >
                        A keresés nem eredményezett találatot
                     </Notification>
                     }
               </Flex>
  )
}

