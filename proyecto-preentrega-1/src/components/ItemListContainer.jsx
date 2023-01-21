import React from 'react'
import { Text } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
    return (
        <Text fontSize='25px' color='tomato'>{greeting}</Text>
    )
}

export default ItemListContainer
