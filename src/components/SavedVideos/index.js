// src/components/SavedVideos/index.js
import {Component} from 'react'
import {Link} from 'react-router-dom'
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
            <Link
              to={`/videos/${video.id}`}
              style={{textDecoration: 'none', display: 'flex', width: '100%'}}
            >
              <Thumbnail src={video.thumbnailUrl} alt="video thumbnail" />
              <VideoInfo>
                <Title>{video.title}</Title>
                <Channel>{video.channel.name}</Channel>
                <p>{video.viewCount} views</p>
                <p>{video.publishedAt}</p>
              </VideoInfo>
            </Link>
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
                <SavedVideosContent
                  isDarkTheme={isDarkTheme}
                  data-testid="savedVideos"
                >
                  {savedVideos.length > 0 && <h1>Saved Videos</h1>}
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
