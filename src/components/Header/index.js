import {useContext, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FaMoon, FaSun} from 'react-icons/fa'
import Cookies from 'js-cookie'

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
  const [showLogoutPopup, setShowLogoutPopup] = useState(false)
  const history = useHistory()

  const websiteLogoUrl = isDarkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

  const onClickLogout = () => {
    setShowLogoutPopup(true)
  }

  const onConfirmLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const onCancelLogout = () => {
    setShowLogoutPopup(false)
  }

  return (
    <HeaderContainer isDarkTheme={isDarkTheme}>
      <Link to="/">
        <WebsiteLogo src={websiteLogoUrl} alt="website logo" />
      </Link>
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
        <LogoutButton onClick={onClickLogout} isDarkTheme={isDarkTheme}>
          Logout
        </LogoutButton>
      </HeaderRightContainer>

      {showLogoutPopup && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: isDarkTheme ? '#212121' : '#ffffff',
              padding: '30px',
              borderRadius: '8px',
              textAlign: 'center',
            }}
          >
            <p style={{color: isDarkTheme ? '#ffffff' : '#000000'}}>
              Are you sure, you want to logout?
            </p>
            <div style={{marginTop: '20px'}}>
              <button
                onClick={onCancelLogout}
                style={{
                  marginRight: '10px',
                  padding: '8px 20px',
                  border: '1px solid #909090',
                  backgroundColor: 'transparent',
                  color: isDarkTheme ? '#ffffff' : '#000000',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
              <button
                onClick={onConfirmLogout}
                style={{
                  padding: '8px 20px',
                  border: 'none',
                  backgroundColor: '#3b82f6',
                  color: '#ffffff',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </HeaderContainer>
  )
}

export default Header
