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
`
