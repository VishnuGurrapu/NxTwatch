// components/NotFound/index.js
import {useContext} from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../ThemeContext'
import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => {
  const {isDarkTheme} = useContext(ThemeContext)

  const notFoundImageUrl = isDarkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

  return (
    <>
      <Header />
      <div style={{display: 'flex'}}>
        <Sidebar />
        <NotFoundContainer isDarkTheme={isDarkTheme}>
          <NotFoundImage src={notFoundImageUrl} alt="not found" />
          <NotFoundHeading isDarkTheme={isDarkTheme}>
            Page Not Found
          </NotFoundHeading>
          <NotFoundDescription>
            We are sorry, the page you requested could not be found.
          </NotFoundDescription>
        </NotFoundContainer>
      </div>
    </>
  )
}

export default NotFound
