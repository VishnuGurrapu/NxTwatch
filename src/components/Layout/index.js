import {useContext} from 'react'
import {LayoutContainer, LayoutMain, ContentContainer} from './styledComponents'
import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../ThemeContext'

const Layout = ({children}) => {
  const {isDarkTheme} = useContext(ThemeContext)

  return (
    <LayoutContainer isDarkTheme={isDarkTheme}>
      <Header />
      <LayoutMain>
        <Sidebar />
        <ContentContainer>{children}</ContentContainer>
      </LayoutMain>
    </LayoutContainer>
  )
}

export default Layout
