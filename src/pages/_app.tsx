import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { LayoutTree } from '@moxy/next-layout'
import theme from '../styles/theme'
import GlobalStyle from '../styles/Global'

interface CustomAppProps extends AppProps {}

const CustomApp: React.FC<CustomAppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <LayoutTree Component={Component} pageProps={pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default CustomApp