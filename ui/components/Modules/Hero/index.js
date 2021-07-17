import { Flex, Box, Heading, Text, Container, Img } from '@chakra-ui/react';
import ImgHero from './illustration.png';
import ImgDots from './Dot.png';

const Hero = () => {
  return (
    <Box
      backgroundImage={ImgDots.src}
      backgroundRepeat="no-repeat"
      backgroundPosition="right center"
      backgroundSize="auto 80%"
    >
      <Container maxW="container.lg" color="white">
        <Flex alignItems="center">
          <Box w="50%" py={10}>
            <Heading as="h1" size="lg" fontSize="40px" mb={3}>
              Development is{' '}
              <Text as="span" color="blue.500">
                80%
              </Text>{' '}
              about fundamentals
            </Heading>
            <Text fontSize="18px">
              Without strong attention to the basics, websites become brittle
              and eventually catch on fire. Therefore, we should always take the
              time to set ourselves up for success.
            </Text>
          </Box>
          <Box w="50%" py={10}>
            <Img
              htmlWidth="478px"
              htmlHeight="280px"
              objectFit="contain"
              src={ImgHero.src}
              alt="Wondeful stars"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;