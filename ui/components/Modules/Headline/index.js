import { Flex, Heading } from '@chakra-ui/react';

const Headline = () => {
  return (
    <Flex alignItems="center" justifyContent="center" py="14" color="white">
      <Heading
        as="h2"
        fontSize="40px"
        textAlign="center"
        maxWidth="container.lg"
        fontWeight="normal"
      >
        When it comes to building beautiful user interfaces, think about the
        user - how will they feel?
      </Heading>
    </Flex>
  );
};

export default Headline;
