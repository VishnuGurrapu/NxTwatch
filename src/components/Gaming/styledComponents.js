// components/Gaming/styledComponents.js
import styled from 'styled-components'

export const GamingContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const GamingContentContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`

export const GamingHeading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`

export const GamingVideosList = styled.ul`
  list-style-type: none;
  padding: 0;
`
