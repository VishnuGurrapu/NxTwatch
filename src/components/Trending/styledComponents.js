// components/Trending/styledComponents.js
import styled from 'styled-components'

export const TrendingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`

export const TrendingHeading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`

export const TrendingVideosList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

export const VideoItem = styled.li`
  display: flex;
  margin-bottom: 20px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f1f1f1')};
  border-radius: 8px;
  overflow: hidden;
`

export const Thumbnail = styled.img`
  width: 250px;
  height: 140px;
  object-fit: cover;
`

export const VideoInfo = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
`

export const Channel = styled.p`
  margin: 5px 0 0;
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#606060')};
`
