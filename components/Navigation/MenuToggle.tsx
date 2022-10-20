import React from "react"
import { Box, Flex, Heading, Button, ButtonGroup, Spacer } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

function MenuToggle({ toggle, isOpen }) {
    return (
        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
                <Button colorScheme='teal'>Sign Up</Button>
                <Button colorScheme='teal'>Log in</Button>
            </ButtonGroup>
        </Flex>
    )
}

export default MenuToggle