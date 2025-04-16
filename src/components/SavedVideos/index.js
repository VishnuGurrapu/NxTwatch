// src/components/SavedVideos/index.js
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ThemeContext from '../ThemeContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  SavedVideosContainer,
  SavedVideosContent,
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosDescription,
  SavedVideoList,
  SavedVideoItem,
  Thumbnail,
  VideoInfo,
  Title,
  Channel,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
console.log("saved loaded");


class SavedVideos extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/all'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedVideos = data.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        channel: video.channel.name,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        videosList: updatedVideos,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderVideos = savedVideosIds => {
    const {videosList} = this.state
    const saved = videosList.filter(video => savedVideosIds.includes(video.id))

    if (saved.length === 0) {
      return (
        <NoVideosContainer>
          <NoVideosImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoVideosHeading>No saved videos found</NoVideosHeading>
          <NoVideosDescription>
            You can save your videos while watching them
          </NoVideosDescription>
        </NoVideosContainer>
      )
    }

    return (
      <SavedVideoList>
        {saved.map(video => (
          <SavedVideoItem key={video.id}>
            <Thumbnail src={video.thumbnailUrl} alt="video thumbnail" />
            <VideoInfo>
              <Title>{video.title}</Title>
              <Channel>{video.channel}</Channel>
            </VideoInfo>
          </SavedVideoItem>
        ))}
      </SavedVideoList>
    )
  }

  renderLoader = () => (
    <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
  )

  render() {
    const {apiStatus} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, savedVideos} = value

          return (
            <>
              <Header />
              <SavedVideosContainer>
                <Sidebar />
                <SavedVideosContent darkTheme={isDarkTheme}>
                  {apiStatus === apiStatusConstants.inProgress &&
                    this.renderLoader()}
                  {apiStatus === apiStatusConstants.success &&
                    this.renderVideos(savedVideos)}
                  {apiStatus === apiStatusConstants.failure && (
                    <NoVideosContainer>
                      <NoVideosImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                        alt="failure view"
                      />
                      <NoVideosHeading>
                        Oops! Something Went Wrong
                      </NoVideosHeading>
                      <NoVideosDescription>
                        Please try again later
                      </NoVideosDescription>
                    </NoVideosContainer>
                  )}
                </SavedVideosContent>
              </SavedVideosContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
