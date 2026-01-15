import { useParams } from 'react-router-dom'
import { getBooksByCateg } from '../../utils'
import { Box, Flex, Loader, Paper, Title } from '@mantine/core'
import { useQuery } from '@tanstack/react-query';
import { IconX } from '@tabler/icons-react';
import { Notification } from '@mantine/core';
import './Categories.css'
import { MyCard } from './MyCard';

export const BooksByCateg = () => {
    const { categId } = useParams()
    const { isLoading, status, data, error, isError} = useQuery({ queryKey: ['booksbycateg', categId], queryFn: getBooksByCateg })
    const xIcon = <IconX size={20} />;
    data && console.log(data.data);

    return (
        <Flex
            mt="5rem"
            direction="column"
            justify="flex-start"
            gap="md"
            align="center"
        >
            {isLoading && <Loader color="blue" type="dots" />}
            {isError && <Notification icon={xIcon} color="red" title="Bummer!">
                {error.message}
            </Notification>}


            {data && <Title>{data.data[0].category}</Title>}
            {console.log(data)}
            
            {data && data.data.map(obj =>
                <Box key={obj.id}>
                    <MyCard {...obj} />
                </Box>
            )
             
            }
        </Flex>
    )
}

