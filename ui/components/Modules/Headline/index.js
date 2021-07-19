import { Flex, Heading, Text } from '@chakra-ui/react';

const Headline = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      py="14"
      px={{ base: '10', md: '5' }}
      color="white"
      as="section"
      zIndex="2"
      pos="relative"
    >
      <Heading
        as="h2"
        fontSize="40px"
        textAlign="center"
        maxWidth="container.lg"
        fontWeight="normal"
      >
        When it comes to building beautiful user interfaces,
        <br />{' '}
        <Text as="span" color="orange.50">
          think about the user
        </Text>{' '}
        - how will they feel?
      </Heading>
    </Flex>
  );
};

export default Headline;
