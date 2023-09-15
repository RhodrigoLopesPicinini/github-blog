import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import { BlogContextProvider } from './context/BlogContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BlogContextProvider>
        <RouterProvider router={router} />
      </BlogContextProvider>
    </ThemeProvider>
  )
}
