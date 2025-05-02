import {Link} from 'react-router-dom'
import {
  VideoItemContainer,
  VideoThumbnail,
  VideoDetails,
  ChannelLogo,
  VideoTitle,
  ChannelName,
  ViewsAndDate,
} from './styledComponents'

const VideoItem = ({videoDetails}) => {
  const {id, title, thumbnailUrl, viewCount, publishedAt, channel} =
    videoDetails

  return (
    <VideoItemContainer>
      <Link to={`/videos/${id}`}>
        <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
        <VideoDetails>
          <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
          <div>
            <VideoTitle>{title}</VideoTitle>
            <ChannelName>{channel.name}</ChannelName>
            <ViewsAndDate>
              {viewCount} views • {publishedAt}
            </ViewsAndDate>
          </div>
        </VideoDetails>
      </Link>
    </VideoItemContainer>
  )
}

export default VideoItem
