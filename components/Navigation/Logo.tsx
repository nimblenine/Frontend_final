import React from "react"
import { Box, Text, useColorModeValue, Image } from "@chakra-ui/react"

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold" color={useColorModeValue('white', 'white')} px={4}>
        <Image borderRadius='full' boxSize='50px' src='./dp.jpg' alt='Aron Mendoza' />
      </Text>
    </Box>
  )
}