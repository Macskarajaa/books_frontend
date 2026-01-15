import { Button, Menu, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

export const MyMenu = () => {
    const [value, setValue] = useState('')
    const navigate = useNavigate()
     const [opened, { toggle }] = useDisclosure();

    return (
        <Menu>
            <Menu.Target>
                <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Item onClick={() => navigate('/')}>Kategóriák</Menu.Item>
                <Menu.Item onClick={() => navigate('/books')}>Összes könyv</Menu.Item>
                <TextInput
                    value={value}
                    onChange={(event) => setValue(event.currentTarget.value)}
                    placeholder='keresés a címben...'
                    leftSection={<IconSearch size={14} 
                    style={{cursor:'pointer'}}
                    onClick={()=>navigate("/books/search/"+value)}
                    />}
                />
            </Menu.Dropdown>
        </Menu>
    );
}

