import {useContext, useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ThemeContext from '../ThemeContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoItem from '../VideoItem'

import {
  TrendingContainer,
  ContentContainer,
  TrendingHeading,
  TrendingVideosList,
} from './styledComponents'

const apiStatusConstants = {
  INITIAL: 'INITIAL',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
}

const Trending = () => {
  const {isDarkTheme} = useContext(ThemeContext)
  const [videos, setVideos] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.INITIAL)

  const fetchTrendingVideos = async () => {
    setApiStatus(apiStatusConstants.LOADING)
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
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
      setVideos(updatedData)
      setApiStatus(apiStatusConstants.SUCCESS)
    } else {
      setApiStatus(apiStatusConstants.FAILURE)
    }
  }

  useEffect(() => {
    fetchTrendingVideos()
  }, [])

  const onRetry = () => {
    fetchTrendingVideos()
  }

  const renderVideos = () => {
    switch (apiStatus) {
      case apiStatusConstants.LOADING:
        return (
          <div className="loader-container" data-testid="loader">
            <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
          </div>
        )
      case apiStatusConstants.SUCCESS:
        return (
          <TrendingVideosList>
            {videos.map(video => (
              <VideoItem key={video.id} videoDetails={video} />
            ))}
          </TrendingVideosList>
        )
      case apiStatusConstants.FAILURE:
        return (
          <div>
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <h1>Oops! Something Went Wrong</h1>
            <p>
              We are having some trouble to complete your request. Please try
              again.
            </p>
            <button type="button" onClick={onRetry}>
              Retry
            </button>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <>
      <Header />
      <TrendingContainer>
        <Sidebar />
        <ContentContainer isDarkTheme={isDarkTheme} data-testid="trending">
          <TrendingHeading>Trending</TrendingHeading>
          {renderVideos()}
        </ContentContainer>
      </TrendingContainer>
    </>
  )
}

export default Trending
