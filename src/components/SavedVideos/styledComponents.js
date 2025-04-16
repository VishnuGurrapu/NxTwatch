// components/SavedVideos/styledComponents.js
import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const SavedVideosContent = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`

export const SavedVideosHeading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`

export const SavedVideoList = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const SavedVideoItem = styled.li`
  display: flex;
  margin-bottom: 20px;
`

export const Thumbnail = styled.img`
  width: 240px;
  margin-right: 16px;
`

export const VideoInfo = styled.div``

export const Title = styled.h3`
  margin: 0 0 8px 0;
`

export const Channel = styled.p`
  margin: 0;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#606060')};
`

export const ViewsAndDate = styled.p`
  margin: 4px 0;
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#aaaaaa' : '#888888')};
`
// Add these to styledComponents.js

export const NoVideosContainer = styled.div`
  text-align: center;
  padding: 40px;
`

export const NoVideosImage = styled.img`
  width: 300px;
  margin-bottom: 20px;
`

export const NoVideosHeading = styled.h2`
  font-size: 22px;
  margin-bottom: 12px;
`

export const NoVideosDescription = styled.p`
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#606060')};
`
