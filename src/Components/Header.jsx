import React from 'react'
import {Drawer,DrawerBody,DrawerOverlay,DrawerContent,DrawerHeader,Button, useDisclosure, VStack, HStack} from "@chakra-ui/react"
import {Link } from "react-router-dom"
import {BiMenuAltLeft} from "react-icons/bi";

function Header() {

    const {isOpen,onOpen,onClose} = useDisclosure()

  return (
    <>
        <Button colorScheme='purple' zIndex={'overlay'} pos={"fixed"} top={"4"} left={"4"} p={'0'} w={'10'} h={'10'} borderRadius={"full"} onClick={onOpen}>
            <BiMenuAltLeft size={"20"} />
        </Button>

        <Drawer isOpen={isOpen} placement='left' onClose={onClose} >
            <DrawerOverlay/>
            <DrawerContent>
                <DrawerHeader>VIDEO HUB</DrawerHeader>
                <DrawerBody>

                    <VStack alignItems="flex-start">
                        <Button colorScheme='purple' variant="ghost" onClick={onClose}>
                            <Link to="/">Home</Link>
                        </Button>
                        <Button colorScheme='purple' variant="ghost" onClick={onClose}>
                            <Link to="/videos">Videos</Link>
                        </Button>
                        <Button colorScheme='purple' variant="ghost" onClick={onClose}>
                            <Link to="/videos?category=free">Free Videos</Link>
                        </Button>
                        <Button colorScheme='purple' variant="ghost" onClick={onClose}>
                            <Link to="/upload">Upload Video</Link>
                        </Button>
                    </VStack>

                    <HStack pos="absolute" bottom="10" left="0" w="full" justifyContent="space-evenly"> 
                        <Button colorScheme='purple' onClick={onClose}>
                            <Link to="/login">Login</Link>
                        </Button>
                        <Button colorScheme='purple' variant="outline" onClick={onClose}>
                            <Link to="/signup">SignUp</Link>
                        </Button>
                    </HStack>

                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
)
}

export default Header

/*
    Stack in Chakra ui is known as div which has display already flex 
    and if we want the flex direction already set to column then we will use VStack in chakra ui

    and same is for the HStack in this HStack we dont have to set the display as flex and the display is already flex and flex direction is already aligned to row
*/