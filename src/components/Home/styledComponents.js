// components/Home/styledComponents.js
import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column; /* Header at top */
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
`

export const MainContainer = styled.div`
  display: flex; /* Sidebar and HomeContent side-by-side */
  flex-grow: 1;
`

export const HomeContent = styled.div`
  flex-grow: 1;
  padding: 20px;

  overflow-y: auto;
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
  display: flex;
`
export const VideosListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  width: 100%;
  max-width: 600px;
  background-color: transparent;
  border: 1px solid #d7dfe9;
  border-radius: 4px;
`

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 8px;
  background-color: transparent;
  border: none;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 16px;
  outline: none;
`

export const SearchButton = styled.button`
  background-color: #ebebeb;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`
