import {useContext, useState, useEffect} from 'react'
import {IoMdClose, IoMdSearch} from 'react-icons/io'
import Cookies from 'js-cookie'

import ThemeContext from '../ThemeContext'
import Layout from '../Layout'
import VideoItem from '../VideoItem'

import {
  HomeContent,
  Banner,
  BannerText,
  BannerLogo,
  BannerCloseBtn,
  VideosContainer,
  VideosListContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
} from './styledComponents'

const apiStatusConstants = {
  INITIAL: 'INITIAL',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
}

const Home = () => {
  const {isDarkTheme} = useContext(ThemeContext)
  const [showBanner, setShowBanner] = useState(true)
  const [videosList, setVideosList] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.INITIAL)
  const [searchInput, setSearchInput] = useState('')

  const onCloseBanner = () => setShowBanner(false)

  const fetchVideos = async () => {
    setApiStatus(apiStatusConstants.LOADING)
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        viewCount: video.view_count,
        publishedAt: video.published_at,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
      }))
      setVideosList(updatedData)
      setApiStatus(apiStatusConstants.SUCCESS)
    } else {
      setApiStatus(apiStatusConstants.FAILURE)
    }
  }

  useEffect(() => {
    fetchVideos()
  }, [])

  const onChangeSearchInput = event => {
    setSearchInput(event.target.value)
  }

  const onClickSearch = () => {
    fetchVideos()
  }

  const renderVideos = () => {
    switch (apiStatus) {
      case apiStatusConstants.LOADING:
        return <p>Loading...</p>
      case apiStatusConstants.SUCCESS:
        return videosList.length > 0 ? (
          <VideosListContainer>
            {videosList.map(video => (
              <VideoItem key={video.id} videoDetails={video} />
            ))}
          </VideosListContainer>
        ) : (
          <p>No videos found</p>
        )
      case apiStatusConstants.FAILURE:
        return <p>Something went wrong. Please try again.</p>
      default:
        return null
    }
  }

  return (
    <Layout>
      <HomeContent isDarkTheme={isDarkTheme}>
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
        <SearchContainer>
          <SearchInput
            type="search"
            value={searchInput}
            onChange={onChangeSearchInput}
            placeholder="Search"
          />
          <SearchButton
            type="button"
            onClick={onClickSearch}
            data-testid="searchButton"
          >
            <IoMdSearch size={20} />
          </SearchButton>
        </SearchContainer>
        <VideosContainer>{renderVideos()}</VideosContainer>
      </HomeContent>
    </Layout>
  )
}

export default Home
