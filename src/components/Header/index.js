// components/Header/index.js
import {useContext} from 'react'
import {FaMoon, FaSun} from 'react-icons/fa'

import ThemeContext from '../ThemeContext'

import {
  HeaderContainer,
  WebsiteLogo,
  HeaderRightContainer,
  ThemeButton,
  ProfileImage,
  LogoutButton,
} from './styledComponents'

const Header = () => {
  const {isDarkTheme, toggleTheme} = useContext(ThemeContext)
  console.log('header')

  const websiteLogoUrl = isDarkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

  return (
    <HeaderContainer isDarkTheme={isDarkTheme}>
      <WebsiteLogo src={websiteLogoUrl} alt="website logo" />
      <HeaderRightContainer>
        <ThemeButton onClick={toggleTheme} data-testid="theme">
          {isDarkTheme ? (
            <FaSun size={20} color="#ffffff" />
          ) : (
            <FaMoon size={20} color="#181818" />
          )}
        </ThemeButton>
        <ProfileImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />
        <LogoutButton isDarkTheme={isDarkTheme}>Logout</LogoutButton>
      </HeaderRightContainer>
    </HeaderContainer>
  )
}

export default Header
