// components/NotFound/index.js
import {useContext} from 'react'
import ThemeContext from '../ThemeContext'
import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => {
  const {isDarkTheme} = useContext(ThemeContext)
  console.log('notfound')

  const notFoundImageUrl = isDarkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

  return (
    <NotFoundContainer isDarkTheme={isDarkTheme}>
      <NotFoundImage src={notFoundImageUrl} alt="not found" />
      <NotFoundHeading isDarkTheme={isDarkTheme}>
        Page Not Found
      </NotFoundHeading>
      <NotFoundDescription>
        We are sorry, the page you requested could not be found.
      </NotFoundDescription>
    </NotFoundContainer>
  )
}

export default NotFound
