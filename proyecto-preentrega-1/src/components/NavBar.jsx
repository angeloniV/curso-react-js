//snippets rafce

import { Container, Flex, Spacer, Box, Heading } from '@chakra-ui/react';
import React from 'react'
import CartsWidget from './CartsWidget'
import { Link } from '@chakra-ui/react'

const NavBar = () => {
    return (
        <>
            <Container maxW="100rem" backgroundColor="yellow.500" color="#262626">
                <Flex alignContent="center" gap="2">
                    <Box p="2" color="black">
                        <Heading size="md">E-Commerce</Heading>
                    </Box>
                    <Spacer/>
                    <Box p="2" color="black">
                        <Link>Chakra UI</Link>
                        <Link>Chakra UI</Link>
                        <Link>Chakra UI</Link>
                    </Box>
                    <Spacer/>
                    <Box p="2" color="black">
                        <CartsWidget/>
                    </Box>
                </Flex>
            </Container>
        </>
    );
};

export default NavBar;
