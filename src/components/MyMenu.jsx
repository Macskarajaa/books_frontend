import { Button, Menu, Modal, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

export const MyMenu = ({setIsAdmin}) => {
    const [value, setValue] = useState('')
    const navigate = useNavigate()
    const [opened, { toggle }] = useDisclosure();
    const [modalOpened, { open:openModal, close:closeModal }] = useDisclosure(false);
    const [password, setPassword] = useState("")
    const handleSubmit=()=>{
            console.log(password);
            if(password==import.meta.env.VITE_ADMIN_PW){
                setIsAdmin(true)
                closeModal()
                setPassword('')
                navigate('/dashboard')
            }else{
                alert('hibás admin jelszó!')
            }
    }
    
    


    return (
        <>
        <Menu>
            <Menu.Target>
                <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Item onClick={() => navigate('/')}>Kategóriák</Menu.Item>
                <Menu.Item onClick={() => navigate('/books')}>Összes könyv</Menu.Item>
                <Menu.Item onClick={openModal}>Dashboard</Menu.Item>
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

        <Modal opened={modalOpened} onClose={closeModal} title="Admin belépés">
        <TextInput
          data-autofocus
          type='password'
          label="Admin jelszó"
          placeholder="jelszó..."
          mt="md"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <Button onClick={handleSubmit}>Belépés</Button>
      </Modal>
      </>
    );
}

