// components/Header/styledComponents.js
import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`

export const WebsiteLogo = styled.img`
  width: 100px;
`

export const HeaderRightContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 15px;
`

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 15px;
`

export const LogoutButton = styled.button`
  background-color: transparent;
  border: 1px solid ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  padding: 6px 12px;
  border-radius: 5px;
  cursor: pointer;
`
