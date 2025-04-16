// components/NotFound/styledComponents.js
import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const NotFoundImage = styled.img`
  width: 300px;
  max-width: 80%;
`

export const NotFoundHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  font-size: 24px;
  margin-top: 24px;
`

export const NotFoundDescription = styled.p`
  color: #64748b;
  font-size: 16px;
  text-align: center;
  max-width: 400px;
  margin-top: 8px;
`
