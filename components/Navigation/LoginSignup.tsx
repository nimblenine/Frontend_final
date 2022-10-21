import React from "react"
import {
    Box,
    Flex,
    Heading,
    Button,
    ButtonGroup,
    Spacer,
    Divider,
    Input,
    List,
    ListItem,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
    VStack,
    FormControl,
    FormLabel,
} from "@chakra-ui/react"
import type {
    GetServerSideProps,
    InferGetServerSidePropsType,
    NextPage,
} from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "../../types";


function LoginSignup() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    return (
        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
                <Button colorScheme='purple'>Sign Up</Button>
                <>
                    <Button colorScheme='purple' onClick={onOpen}>Log in</Button>
                    <Modal
                        initialFocusRef={initialRef}
                        finalFocusRef={finalRef}
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>LOGIN</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <FormControl>
                                    <FormLabel>Username:</FormLabel>
                                    <Input ref={initialRef} placeholder='Username' />
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel>Password:</FormLabel>
                                    <Input placeholder='Password' />
                                </FormControl>
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='purple' mr={3}>
                                    Login
                                </Button>
                                <Button onClick={onClose} colorScheme='gray'>Cancel</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </>
            </ButtonGroup>
        </Flex>



    );
};

export default LoginSignup