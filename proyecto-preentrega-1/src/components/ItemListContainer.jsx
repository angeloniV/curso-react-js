import React from 'react'
import { Flex, Text, Container } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
    return (
        <Container maxW="100rem" border="solid" borderColor="yellow.500" borderRadius="5px" maxH="30rem" height="30rem" centerContent>
            <Flex alignContent="center" gap="2">
                <Text fontSize='25px' color='tomato'>{greeting}</Text>
            </Flex>
        </Container>
    )
}

export default ItemListContainer
