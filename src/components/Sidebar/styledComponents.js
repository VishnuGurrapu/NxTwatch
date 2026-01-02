// components/Sidebar/styledComponents.js
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarWrapper = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#f9f9f9')};
  width: 250px;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 0;
  height: 100vh; /* Full screen height */
  flex-shrink: 0; /* Sidebar doesn't shrink when screen is small */
  overflow-y: auto; /* If sidebar content is large, it scrolls inside itself */
`

export const NavLinksList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const NavLinkItem = styled.li`
  margin-bottom: 20px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
`

export const ContactSection = styled.div`
  margin-top: auto;
`

export const ContactHeading = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-weight: 600;
  margin-bottom: 10px;
`

export const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
`

export const ContactNote = styled.p`
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#475569')};
  margin-top: 10px;
`
