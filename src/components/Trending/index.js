import {useContext, useEffect, useState} from 'react'
import Cookies from 'js-cookie'
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

  const renderVideos = () => {
    switch (apiStatus) {
      case apiStatusConstants.LOADING:
        return <p>Loading...</p>
      case apiStatusConstants.SUCCESS:
        return (
          <TrendingVideosList>
            {videos.map(video => (
              <VideoItem key={video.id} videoDetails={video} />
            ))}
          </TrendingVideosList>
        )
      case apiStatusConstants.FAILURE:
        return <p>Failed to load trending videos.</p>
      default:
        return null
    }
  }

  return (
    <>
      <Header />
      <TrendingContainer>
        <Sidebar />
        <ContentContainer isDarkTheme={isDarkTheme}>
          <TrendingHeading>Trending</TrendingHeading>
          {renderVideos()}
        </ContentContainer>
      </TrendingContainer>
    </>
  )
}

export default Trending
