import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        zIndex={'overlay'}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="purple"
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
        zIndex={'overlay'}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Video</DrawerHeader>
            <DrawerBody>
              <VStack alignItems={'flex-start'}>
                <Button
                  variant={'ghost'}
                  colorScheme="purple"
                  onClick={onClose}
                >
                  <Link to={'/'}>Home</Link>
                </Button>

                <Button
                  variant={'ghost'}
                  colorScheme="purple"
                  onClick={onClose}
                >
                  <Link to={'/videos'}>Vedios</Link>
                </Button>

                <Button
                  variant={'ghost'}
                  colorScheme="purple"
                  onClick={onClose}
                >
                  <Link to={'/vedios?category-free'}>Free vedios</Link>
                </Button>

                <Button
                  variant={'ghost'}
                  colorScheme="purple"
                  onClick={onClose}
                >
                  <Link to={'/upload'}>Upload</Link>
                </Button>
              </VStack>
              <HStack pos={'absolute'} bottom={'10'} left={'0'}>
                <Button colorScheme="purple" paddingLeft={'5'} margin={'3'}>
                  <Link to={'/login'}>Login</Link>
                </Button>
                <Button colorScheme="purple" paddingLeft={'5'} margin={'3'}>
                  <Link to={'signup'}>Sign Up</Link>
                </Button>
              </HStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Header;
