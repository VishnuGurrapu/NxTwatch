// components/Home/index.js
import {useContext, useState} from 'react'
import {IoMdClose} from 'react-icons/io'

import ThemeContext from '../ThemeContext'
import Sidebar from '../Sidebar'

import {
  HomeContainer,
  HomeContent,
  Banner,
  BannerText,
  BannerLogo,
  BannerCloseBtn,
  VideosContainer,
} from './styledComponents'

const Home = () => {
  const {isDarkTheme} = useContext(ThemeContext)
  const [showBanner, setShowBanner] = useState(true)
  console.log("home");

  const onCloseBanner = () => setShowBanner(false)

  return (
    <HomeContainer isDarkTheme={isDarkTheme}>
      <Sidebar />
      <HomeContent>
        {showBanner && (
          <Banner data-testid="banner">
            <div>
              <BannerLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
              />
              <BannerText>
                Buy Nxt Watch Premium prepaid plans with UPI
              </BannerText>
              <button type="button">GET IT NOW</button>
            </div>
            <BannerCloseBtn
              data-testid="close"
              onClick={onCloseBanner}
              aria-label="close"
            >
              <IoMdClose />
            </BannerCloseBtn>
          </Banner>
        )}
        <VideosContainer>
          {/* Video cards list will go here */}
          <p>Videos loading...</p>
        </VideosContainer>
      </HomeContent>
    </HomeContainer>
  )
}

export default Home
