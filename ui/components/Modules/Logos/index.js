import { Box, Text, Flex, Img } from '@chakra-ui/react';
import ImgGoogle from './images/google.svg';
import ImgHP from './images/HP.svg';
import ImgAmazon from './images/amazon.svg';
import ImgShopify from './images/shopify.svg';
import ImgSamsung from './images/samsung.svg';
import ImgCircles from './circles.svg';

const Logos = () => {
  return (
    <Flex
      justifyContent="center"
      color="white"
      alignItems="center"
      as="section"
      position="relative"
    >
      <Box py="16" position="relative" zIndex={1}>
        <Text as="p" align="center" fontWeight="semibold">
          Here are some logos of companies who agree:
        </Text>
        <Flex
          justifyContent="center"
          color="white"
          alignItems="center"
          flexWrap="wrap"
          px={{ base: '10', md: '5' }}
        >
          <Box m={5}>
            <ImgGoogle />
          </Box>
          <Box m={5}>
            <ImgHP />
          </Box>
          <Box m={5}>
            <ImgAmazon />
          </Box>
          <Box m={5}>
            <ImgShopify />
          </Box>
          <Box m={5}>
            <ImgSamsung />
          </Box>
        </Flex>
      </Box>
      <Box
        position="absolute"
        top={0}
        right={100}
        bottom={0}
        left={100}
        zIndex={1}
      >
        <ImgCircles className="circles" />
      </Box>
    </Flex>
  );
};

export default Logos;
