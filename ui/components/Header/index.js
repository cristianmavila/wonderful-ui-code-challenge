import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  useDisclosure,
  useColorModeValue,
  Img,
} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const NavLink = ({ children }) => (
  <Link
    px={3}
    py={2}
    fontWeight="semibold"
    rounded={4}
    color="white"
    _hover={{
      textDecoration: 'none',
      bg: 'blue.500',
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Links = ['About Us', 'Do This'];
  return (
    <header>
      <Box px={5} py={2}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={'center'}
            flex={{ base: 'inherit', md: '1' }}
          >
            <Box>
              <Img
                boxSize="38px"
                objectFit="contain"
                src="/images/logo.png"
                alt="Wondeful stars"
              />
            </Box>
          </HStack>
          <Flex
            alignItems={'center'}
            flex={1}
            display={{ base: 'none', md: 'flex' }}
          >
            <HStack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </Flex>
          <Flex alignItems={'center'} display={{ base: 'none', md: 'flex' }}>
            <Menu>
              <Link
                px={3}
                py={2}
                mr={5}
                fontWeight="semibold"
                rounded={4}
                color="white"
                _hover={{
                  textDecoration: 'none',
                  bg: 'blue.500',
                }}
                href={'#'}
              >
                Login
              </Link>
              <Button
                fontWeight="semibold"
                colorScheme="blue"
                borderColor="blue.500"
                borderWidth="thin"
                rounded={4}
                _hover={{ bg: 'brand.100', borderColor: 'blue.500' }}
              >
                Sign up
              </Button>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </header>
  );
}
