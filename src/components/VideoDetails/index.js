import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineLike, AiOutlineDislike, AiOutlineSave} from 'react-icons/ai'
import {formatDistanceToNow} from 'date-fns'

import {
  VideoDetailsContainer,
  VideoBody,
  VideoContent,
  Title,
  InfoRow,
  Views,
  DateText,
  ActionRow,
  ActionButton,
  ChannelInfo,
  ChannelLogo,
  ChannelName,
  Description,
  LoaderContainer,
  FailureContainer,
  FailureHeading,
  FailureText,
} from './styledComponents'

import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../ThemeContext'

class VideoDetails extends Component {
  state = {
    videoData: null,
    isLoading: true,
    isError: false,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.fetchVideoDetails()
  }

  fetchVideoDetails = async () => {
    this.setState({isLoading: true, isError: false})
    const {match} = this.props
    const {id} = match.params
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const video = data.video_details
      const updatedVideo = {
        id: video.id,
        title: video.title,
        videoUrl: video.video_url,
        thumbnailUrl: video.thumbnail_url,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
          subscriberCount: video.channel.subscriber_count,
        },
        viewCount: video.view_count,
        publishedAt: video.published_at,
        description: video.description,
      }

      this.setState({videoData: updatedVideo, isLoading: false})
    } else {
      this.setState({isError: true, isLoading: false})
    }
  }

  toggleLike = () => {
    this.setState(prev => ({isLiked: !prev.isLiked, isDisliked: false}))
  }

  toggleDislike = () => {
    this.setState(prev => ({isDisliked: !prev.isDisliked, isLiked: false}))
  }

  render() {
    const {videoData, isLoading, isError, isLiked, isDisliked} = this.state

    return (
      <ThemeContext.Consumer>
        {({isDarkTheme, savedVideos, toggleSaveVideo}) => {
          const isSaved = savedVideos.some(each => each.id === videoData?.id)

          const onToggleSave = () => {
            toggleSaveVideo(videoData)
          }

          const renderLoader = () => (
            <LoaderContainer data-testid="loader">
              <Loader type="ThreeDots" color="#0b69ff" height={50} width={50} />
            </LoaderContainer>
          )

          const renderFailure = () => (
            <FailureContainer>
              <img
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure view"
              />
              <FailureHeading dark={isDarkTheme}>
                Oops! Something Went Wrong
              </FailureHeading>
              <FailureText dark={isDarkTheme}>
                We are having some trouble to complete your request. Please try
                again.
              </FailureText>
              <button type="button" onClick={this.fetchVideoDetails}>
                Retry
              </button>
            </FailureContainer>
          )

          const renderVideo = () => {
            const {
              title,
              videoUrl,
              channel,
              viewCount,
              publishedAt,
              description,
            } = videoData

            return (
              <VideoContent dark={isDarkTheme}>
                <ReactPlayer url={videoUrl} width="100%" controls />
                <Title dark={isDarkTheme}>{title}</Title>
                <InfoRow>
                  <Views>{viewCount} views</Views>
                  <DateText>
                    {formatDistanceToNow(new Date(publishedAt))} ago
                  </DateText>
                </InfoRow>
                <ActionRow>
                  <ActionButton active={isLiked} onClick={this.toggleLike}>
                    <AiOutlineLike /> Like
                  </ActionButton>
                  <ActionButton
                    active={isDisliked}
                    onClick={this.toggleDislike}
                  >
                    <AiOutlineDislike /> Dislike
                  </ActionButton>
                  <ActionButton active={isSaved} onClick={onToggleSave}>
                    <AiOutlineSave /> {isSaved ? 'Saved' : 'Save'}
                  </ActionButton>
                </ActionRow>
                <hr />
                <ChannelInfo>
                  <ChannelLogo
                    src={channel.profileImageUrl}
                    alt="channel logo"
                  />
                  <div>
                    <ChannelName dark={isDarkTheme}>{channel.name}</ChannelName>
                    <p>{channel.subscriberCount} subscribers</p>
                    <Description dark={isDarkTheme}>{description}</Description>
                  </div>
                </ChannelInfo>
              </VideoContent>
            )
          }

          return (
            <VideoDetailsContainer
              dark={isDarkTheme}
              data-testid="videoItemDetails"
            >
              <Header />
              <VideoBody>
                <Sidebar />
                {isLoading && renderLoader()}
                {isError && !isLoading && renderFailure()}
                {!isLoading && !isError && renderVideo()}
              </VideoBody>
            </VideoDetailsContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoDetails
