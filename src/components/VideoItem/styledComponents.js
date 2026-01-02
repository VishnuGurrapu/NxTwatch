// components/VideoItem/styledComponents.js
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  min-width: 280px;

  @media screen and (min-width: 576px) {
    width: 45%;
    margin-right: 10px;
  }

  @media screen and (min-width: 768px) {
    width: 30%;
    margin-right: 15px;
  }
`

export const VideoThumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`

export const VideoDetails = styled.div`
  display: flex;
  margin-top: 10px;
`

export const ChannelLogo = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 10px;
`

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 5px 0;
  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
`

export const ChannelName = styled.p`
  font-size: 14px;
  color: ${props => (props.isDark ? '#d7dfe9' : '#475569')};
  margin: 0;
`

export const ViewsAndDate = styled.p`
  display: flex;
  font-size: 12px;
  color: ${props => (props.isDark ? '#d7dfe9' : '#475569')};
  margin: 0;

  & > span {
    margin: 0 5px;
  }
`

export const VideoLink = styled(Link)`
  text-decoration: none;
`
