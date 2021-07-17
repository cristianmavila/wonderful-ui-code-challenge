import { Box, Text, Flex, Img } from '@chakra-ui/react';
import ImgGoogle from './images/google.png';
import ImgHP from './images/HP.png';
import ImgAmazon from './images/amazon.png';
import ImgShopify from './images/shopify.png';
import ImgSamsung from './images/samsung.png';

const Logos = () => {
  return (
    <Flex justifyContent="center" color="white" alignItems="center">
      <Box py="16">
        <Text as="p" align="center">
          Here are some logos of companies who agree:
        </Text>
        <Flex
          justifyContent="center"
          color="white"
          alignItems="center"
          flexWrap="wrap"
        >
          <Img m="4" src={ImgGoogle.src} width={ImgGoogle.width / 2} />
          <Img m="4" src={ImgHP.src} width={ImgHP.width / 2} />
          <Img m="4" src={ImgAmazon.src} width={ImgAmazon.width / 2} />
          <Img m="4" src={ImgShopify.src} width={ImgShopify.width / 2} />
          <Img m="4" src={ImgSamsung.src} width={ImgSamsung.width / 2} />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Logos;
