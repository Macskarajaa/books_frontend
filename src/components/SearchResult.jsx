import { Flex, Loader, Notification, Title } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { getBooksBySearchedText } from '../../utils'
import { IconX } from '@tabler/icons-react'

export const SearchResult = () => {
    const {txt} = useParams()
    const{ isLoading, status, data, error, isError} = useQuery({queryKey: ['booksbytitle',txt], queryFn:getBooksBySearchedText})
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
            {data && <Title>A keresett könyvcím/könyvcím részlet: {txt}</Title> }
            

            {data && data.data.lenght>0 ? data.data.map(obj=>
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

