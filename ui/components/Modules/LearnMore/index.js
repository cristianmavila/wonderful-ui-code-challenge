import { Flex, Heading, Text, Box, Button } from '@chakra-ui/react';
import ImgBackground from './background.png';

const LearnMore = () => {
  return (
    <Box
      backgroundColor="white"
      backgroundImage={ImgBackground.src}
      backgroundPosition="center 65%"
      backgroundRepeat="no-repeat"
      backgroundSize="737px"
      as="section"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        py="14"
        color="brand.100"
        minHeight="350px"
      >
        <Heading
          as="h2"
          fontSize="32px"
          textAlign="center"
          maxWidth="container.lg"
          fontWeight="semibold"
          px={16}
        >
          We can tell how much{' '}
          <Text as="span" color="orange.50">
            you love to code,
          </Text>{' '}
          because it speaks to us through our user experience.
        </Heading>
        <Button
          my="5"
          fontWeight="semibold"
          color="white"
          borderColor="blue.200"
          borderWidth="thin"
          bg="blue.200"
          rounded={4}
          _hover={{ bg: 'white', color: 'blue.200', borderColor: 'blue.200' }}
          _active={{ bg: 'white', color: 'blue.500', borderColor: 'blue.500' }}
        >
          Learn More
        </Button>
      </Flex>
    </Box>
  );
};

export default LearnMore;
