import { ChakraProvider } from '@chakra-ui/react';
import { Global } from "@emotion/react"
// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react"
import myTheme from "../constants/theme"
import fonts from "../constants/font-face"
// 2. Extend the theme to include custom colors, fonts, etc

const theme = extendTheme(myTheme)

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={fonts} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;