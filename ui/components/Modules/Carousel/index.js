import {
  Flex,
  Box,
  Heading,
  Text,
  Container,
  Img,
  Link,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import ImgHero from './Image.svg';
import ImgWave from './wave.svg';

const Carousel = () => {
  return (
    <Box
      backgroundColor="white"
      as="section"
      pos="relative"
      className="section"
    >
      <Container maxW="container.lg" color="white" zIndex="2" pos="relative">
        <Flex alignItems="center" flexDirection={{ base: 'column', md: 'row' }}>
          <Box w={{ base: '100%', md: '50%' }} py={{ base: 5, md: 10 }} px={20}>
            <ImgHero className="presentation" />
          </Box>
          <Box
            w={{ base: '100%', md: '50%' }}
            py={{ base: 10, md: 20 }}
            pb={{ base: 36, md: 20 }}
            px={10}
          >
            <Text color="orange.50" as="h4" fontSize="20" fontWeight="semibold">
              Hey, wanna know something?
            </Text>
            <Heading as="h1" size="lg" fontSize="40px" mb={3}>
              You are a winner
            </Heading>
            <Text fontSize="18px" as="p">
              You will code great things that are released into the wild to help
              companies make the world a better place. The quality of your work
              will put a dent in the universe, and your name will become
              legendary.
            </Text>
            <Box w="50%" py={4} mb="10">
              <Link color="blue.500">
                Let’s get started <ArrowForwardIcon width={8} />
              </Link>
            </Box>
          </Box>
        </Flex>
      </Container>
      <Box pos="absolute" top={0} bottom={0} left={0} zIndex="1" width="100%">
        <ImgWave className="wave" />
      </Box>
    </Box>
  );
};

export default Carousel;
