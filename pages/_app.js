
import { ChakraProvider, Stack, Button, Container, Input, Text, InputGroup, InputRightElement } from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import theme from '../theme'


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Container maxWidth="container.xl">
        <Stack paddingY={2} borderBottomWidth={1} borderBottomColor="gray.300">

          <Stack alignItems="center" direction="row" justifyContent="space-between">
            <Stack direction="row" spacing={12}>
              <Button leftIcon={<HamburgerIcon width={6} height={6} />} variant='link'>
                Menu
              </Button>
              <InputGroup >
                <InputRightElement
                  pointerEvents='none'

                >
                  <SearchIcon color='gray.300' />
                </InputRightElement>
                <Input type='tel' placeholder='Buscar' />
              </InputGroup>
            </Stack>

            <Text
              color="red.700"
              fontSize='4xl'
              flex={1}
              fontWeight='bold'
              fontFamily='sans'
              lineHeight='normal'
              textAlign='center'
              textTransform='uppercase'
            >
              ahorasalta
            </Text>
            <Stack
              flex={1}
              textAlign='right'
              direction="row"
              justifyContent='flex-end'
            >
              <Button colorScheme="primary">Sucribete</Button>
              <Button>Ingresa</Button>
            </Stack>
          </Stack>
        </Stack>
        <Component {...pageProps} />
        <footer>
          ...
        </footer>

      </Container>

    </ChakraProvider>
  )
}

export default MyApp
