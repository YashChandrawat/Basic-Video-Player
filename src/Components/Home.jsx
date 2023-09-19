import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Assets/1.jpg';
import img2 from '../Assets/2.jpg';
import img3 from '../Assets/3.jpg';
import img4 from '../Assets/4.jpg';
import img5 from '../Assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container minH={'100vh'} maxW={'container.xl'} p={'16'}>
          <Heading textTransform={"uppercase"} py={'2'} w={'fit-content'} borderBottom={"2px solid"} m={'auto'}>
                Services
          </Heading>
          <Stack h={"full"} p={'4'} alignItems={'center'} direction={['column','row']}>
            <Image src={img5} filter={"hue-rotate(-130deg)"} h={['40','400']}></Image>
            <Text letterSpacing={'wideset'} lineHeight={"190%"} p={['4','16']} textAlign={'center'}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae harum reiciendis, itaque ad totam iure vel possimus! Atque dolores pariatur rem, eaque dolor necessitatibus iure suscipit eveniet non saepe vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic tenetur impedit quos praesentium maxime minima fugit voluptatibus, odio corporis officiis. Recusandae quod ipsum culpa magni saepe velit ut. Nesciunt, molestiae!
            </Text>
          </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night life is cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;