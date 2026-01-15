import React from 'react'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export const MyCard = ({title,author,cover,description,rating,category}) => {

  return (
   <Card shadow="sm" padding="lg" radius="md" withBorder style={{width:"300px"}}>
      <Card.Section>
        <Image
          mah={220}
          src={cover}
          alt={title}
          fit='contain'
          w="100%"
        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
        <Badge color="pink">{rating}⭐</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {description}
      </Text>

      <Text size='sm' >
        szerző: {author}
      </Text>
    </Card>
  )
}

