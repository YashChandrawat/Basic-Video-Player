import { Container, Heading, VStack, Input,Button,Text } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'


const Login = () => {
  return (
        <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
            <form>
                <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
                    <Heading>Welcome Back</Heading>
                    <Input placeholder='Email' type='email' required focusBorderColor='purple.500'/>
                    <Input placeholder='Password' type='password' required focusBorderColor='purple.500'/>
                    <Button variant={'link'} alignSelf={'end'}>
                        <Link to={"/signup"} >Forgot Password?</Link>
                    </Button>
                    <Button alignSelf={'center'} colorScheme='purple' w={'full'}>
                        <Link to={"/submit"} >Login</Link>
                    </Button>
                    <Text textAlign={'right'} alignSelf={'center'}>New User?{" "}<Button variant={'link'}  colorScheme='purple' >
                        <Link to={"/signup"} >Signup</Link>
                    </Button></Text>
                    
                </VStack>
            </form>
        </Container>
    )
}

export default Login