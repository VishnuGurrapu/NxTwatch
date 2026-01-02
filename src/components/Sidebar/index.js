// components/Sidebar/index.js
import {useContext} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import ThemeContext from '../ThemeContext'
import {
  SidebarWrapper,
  NavLinksList,
  NavLinkItem,
  NavLink,
  ContactSection,
  ContactHeading,
  SocialIconsContainer,
  SocialIcon,
  ContactNote,
} from './styledComponents'

const Sidebar = () => {
  const {isDarkTheme} = useContext(ThemeContext)

  return (
    <SidebarWrapper isDarkTheme={isDarkTheme}>
      <NavLinksList>
        <NavLinkItem>
          <NavLink to="/" isDarkTheme={isDarkTheme}>
            <AiFillHome size={20} />
            &nbsp; Home
          </NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/trending" isDarkTheme={isDarkTheme}>
            <HiFire size={20} />
            &nbsp; Trending
          </NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/gaming" isDarkTheme={isDarkTheme}>
            <SiYoutubegaming size={20} />
            &nbsp; Gaming
          </NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/saved-videos" isDarkTheme={isDarkTheme}>
            <MdPlaylistAdd size={20} />
            &nbsp; Saved Videos
          </NavLink>
        </NavLinkItem>
      </NavLinksList>

      <ContactSection>
        <ContactHeading isDarkTheme={isDarkTheme}>CONTACT US</ContactHeading>
        <SocialIconsContainer>
          <SocialIcon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <SocialIcon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <SocialIcon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linkedin logo"
          />
        </SocialIconsContainer>
        <ContactNote isDarkTheme={isDarkTheme}>
          Enjoy! Now to see your channels and recommendations!
        </ContactNote>
      </ContactSection>
    </SidebarWrapper>
  )
}

export default Sidebar
