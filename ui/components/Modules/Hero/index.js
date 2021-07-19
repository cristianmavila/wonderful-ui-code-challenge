import {
  Flex,
  Box,
  Heading,
  Text,
  Container,
  Button,
  Link,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Dots from './Dot.svg';
import ImgHero from './characters.svg';
import ImgTimeline from './timeline.svg';

const Hero = () => {
  return (
    <Box as="section" pos="relative" minHeight={{ base: '870px', md: '620px' }}>
      <Container maxW="container.lg" color="white" zIndex="2" pos="relative">
        <Flex
          alignItems="center"
          flexDirection={{ base: 'column', md: 'row' }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Box w={{ base: '100%', md: '50%' }} py={10}>
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
            <Box my={5}>
              <Button
                fontWeight="semibold"
                color="brand.100"
                bg="orange.50"
                borderColor="orange.50"
                borderWidth="thin"
                rounded={4}
                _hover={{
                  bg: 'brand.100',
                  borderColor: 'blue.500',
                  color: 'white',
                }}
                _active={{
                  bg: 'brand.100',
                  borderColor: 'blue.500',
                  color: 'white',
                }}
              >
                Yes, it’s true
              </Button>
              <Link color="blue.500" ml={5}>
                Learn more <ArrowForwardIcon width={8} />
              </Link>
              <Text
                fontWeight="semibold"
                fontSize="20"
                mt={16}
                display={{ base: 'none', md: 'block' }}
              >
                Let’s follow a standard plan of attack:
              </Text>
            </Box>
          </Box>
          <Box w={{ base: '100%', md: '50%' }} py={10} px={10} pos="relative">
            <Box pos="absolute" top="0" right="0" zIndex="1">
              <Dots />
            </Box>
            <Box pos="relative" zIndex="2">
              <ImgHero />
            </Box>
          </Box>
        </Flex>
      </Container>
      <Box
        bottom={0}
        left={0}
        w="100%"
        maxWidth="1285px"
        pos="absolute"
        zIndex="1"
      >
        <ImgTimeline />
      </Box>
    </Box>
  );
};

export default Hero;
