
import { ChakraProvider, Stack, Button, Input, Text, InputGroup, InputRightElement } from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Stack padding={4} borderBottomWidth={1} borderBottomColor="gray.300">
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" spacing={12}>
            <Button leftIcon={<HamburgerIcon width={6} height={6} />} variant='link'>
              Menu
            </Button>
            <InputGroup>
              <InputRightElement
                pointerEvents='none'

              >
                <SearchIcon color='gray.300' />
              </InputRightElement>
              <Input type='tel' placeholder='Buscar' />
            </InputGroup>
          </Stack>

          <Text
            color="linkedin.500"
            fontSize='4xl'
            fontWeight='bold'
            fontFamily='sans'
            lineHeight='normal'
          >
            NOASOFTFACT
          </Text>
          <div>seccion derecha</div>
        </Stack>
      </Stack>
      <Component {...pageProps} />
      <footer>
        ...adios
      </footer>
    </ChakraProvider>
  )
}

export default MyApp
