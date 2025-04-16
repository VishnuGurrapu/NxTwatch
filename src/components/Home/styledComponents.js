// components/Home/styledComponents.js
import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
`

export const HomeContent = styled.div`
  flex-grow: 1;
  padding: 20px;
`

export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: #000;
`

export const BannerText = styled.p`
  font-size: 18px;
  margin-top: 10px;
`

export const BannerLogo = styled.img`
  width: 150px;
`

export const BannerCloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`

export const VideosContainer = styled.div`
  margin-top: 20px;
`
