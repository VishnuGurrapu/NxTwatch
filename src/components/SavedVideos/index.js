// src/components/SavedVideos/index.js
import {Component} from 'react'
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

class SavedVideos extends Component {
  renderVideos = savedVideos => {
    if (savedVideos.length === 0) {
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
        {savedVideos.map(video => (
          <SavedVideoItem key={video.id}>
            <Thumbnail src={video.thumbnailUrl} alt="video thumbnail" />
            <VideoInfo>
              <Title>{video.title}</Title>
              <Channel>{video.channel.name}</Channel>
            </VideoInfo>
          </SavedVideoItem>
        ))}
      </SavedVideoList>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, savedVideos} = value

          return (
            <>
              <Header />
              <SavedVideosContainer isDarkTheme={isDarkTheme}>
                <Sidebar />
                <SavedVideosContent isDarkTheme={isDarkTheme}>
                  {this.renderVideos(savedVideos)}
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
