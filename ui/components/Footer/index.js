import { Img } from '@chakra-ui/image';
import { Flex } from '@chakra-ui/react';
import ImgLogo from './logo.png';

const Footer = () => (
  <Flex
    justifyContent="center"
    as="footer"
    py={10}
    minHeight="150px"
    backgroundColor="white"
  >
    <Img
      src={ImgLogo.src}
      width={ImgLogo.width}
      height={ImgLogo.height}
      alt="Stars"
    />
  </Flex>
);

export default Footer;
