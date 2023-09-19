import { Box, Button, HStack, Heading, Input, Stack, VStack ,Text} from '@chakra-ui/react'
import {AiOutlineSend,AiFillInstagram, AiFillGithub,AiFillLinkedin} from "react-icons/ai"
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column','row']}>
            <VStack alignItems={'strech'} w={'full'} px={'4'}>
                <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
                    Subscribe for more updates 
                </Heading>
                <HStack borderBottom={'2px solid white'} py={'2'}>
                    <Input placeholder='Enter Email Here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none'/>
                    <Button p={'0'} colorScheme='purple' variant={'ghost'} borderRadius={'0 20px 20px 0'}> 
                        <AiOutlineSend size={20}/>
                    </Button>
                </HStack>
            </VStack>
            <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
                <Heading textTransform={'uppercase'} textAlign={'center'}>VIDEO HUB</Heading>
                <Text>All Rights Reserved</Text>
            </VStack>
            <VStack w={'full'} >
                <Heading size={'md'} textTransform={'uppercase'}>
                    Social Media
                </Heading>
                <HStack>
                    <Button variant={'link'} colorScheme={'whiteAlpha'}>
                        <a href="https://www.instagram.com/yash.chandrawat/" target='blank'><AiFillInstagram size={'30'}/></a>
                    </Button>
                    <Button variant={'link'} colorScheme={'whiteAlpha'}>
                        <a href="https://github.com/YashChandrawat" target='blank'><AiFillGithub size={'30'}/></a>
                    </Button>
                    <Button variant={'link'} colorScheme={'whiteAlpha'}>
                        <a href="https://www.linkedin.com/in/yash-chandrawat-1y1/" target='blank'><AiFillLinkedin size={'30'}/></a>
                    </Button>
                </HStack>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer