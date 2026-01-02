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

const VideoItem = ({videoDetails, isGaming}) => {
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    channel,
  } = videoDetails

  if (isGaming) {
    return (
      <VideoItemContainer>
        <Link to={`/videos/${id}`}>
          <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
          <VideoDetails>
            <VideoTitle>{title}</VideoTitle>
            <ViewsAndDate>{viewCount} Watching Worldwide</ViewsAndDate>
          </VideoDetails>
        </Link>
      </VideoItemContainer>
    )
  }

  return (
    <VideoItemContainer>
      <Link to={`/videos/${id}`}>
        <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
        <VideoDetails>
          {channel && (
            <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
          )}
          <div>
            <VideoTitle>{title}</VideoTitle>
            {channel && <ChannelName>{channel.name}</ChannelName>}
            <ViewsAndDate>
              {viewCount} views {publishedAt && `• ${publishedAt}`}
            </ViewsAndDate>
          </div>
        </VideoDetails>
      </Link>
    </VideoItemContainer>
  )
}

export default VideoItem
