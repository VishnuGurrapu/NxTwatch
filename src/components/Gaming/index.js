import {useContext, useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../ThemeContext'
import VideoItem from '../VideoItem'

import {
  GamingContainer,
  GamingContentContainer,
  GamingHeading,
  GamingVideosList,
} from './styledComponents'

const apiStatusConstants = {
  INITIAL: 'INITIAL',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
}

const Gaming = () => {
  const {isDarkTheme} = useContext(ThemeContext)
  const [gamingVideos, setGamingVideos] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.INITIAL)

  const fetchGamingVideos = async () => {
    setApiStatus(apiStatusConstants.LOADING)
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedVideos = data.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        viewCount: video.view_count,
      }))
      setGamingVideos(updatedVideos)
      setApiStatus(apiStatusConstants.SUCCESS)
    } else {
      setApiStatus(apiStatusConstants.FAILURE)
    }
  }

  useEffect(() => {
    fetchGamingVideos()
  }, [])

  const renderVideos = () => {
    switch (apiStatus) {
      case apiStatusConstants.LOADING:
        return <p>Loading...</p>
      case apiStatusConstants.SUCCESS:
        return (
          <GamingVideosList>
            {gamingVideos.map(video => (
              <VideoItem key={video.id} videoDetails={video} isGaming />
            ))}
          </GamingVideosList>
        )
      case apiStatusConstants.FAILURE:
        return <p>Something went wrong. Please try again.</p>
      default:
        return null
    }
  }

  return (
    <>
      <Header />
      <GamingContainer>
        <Sidebar />
        <GamingContentContainer isDarkTheme={isDarkTheme}>
          <GamingHeading>Gaming</GamingHeading>
          {renderVideos()}
        </GamingContentContainer>
      </GamingContainer>
    </>
  )
}

export default Gaming
