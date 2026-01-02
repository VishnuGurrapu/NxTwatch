import {Link} from 'react-router-dom'
import {
  VideoItemContainer,
  VideoThumbnail,
  VideoDetails,
  ChannelLogo,
  VideoTitle,
  ChannelName,
  ViewsAndDate,
  VideoLink,
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
        <VideoLink to={`/videos/${id}`}>
          <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
          <VideoDetails>
            <VideoTitle>{title}</VideoTitle>
            <ViewsAndDate>{viewCount} Watching Worldwide</ViewsAndDate>
          </VideoDetails>
        </VideoLink>
      </VideoItemContainer>
    )
  }

  return (
    <VideoItemContainer>
      <VideoLink to={`/videos/${id}`}>
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
      </VideoLink>
    </VideoItemContainer>
  )
}

export default VideoItem
