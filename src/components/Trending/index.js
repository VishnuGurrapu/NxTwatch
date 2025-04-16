// components/Trending/index.js
import {useContext} from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../ThemeContext'

import {
  TrendingContainer,
  ContentContainer,
  TrendingHeading,
  TrendingVideosList,
} from './styledComponents'

const Trending = () => {
  const {isDarkTheme} = useContext(ThemeContext)
  console.log("trend loaded");

  return (
    <>
      <Header />
      <TrendingContainer>
        <Sidebar />
        <ContentContainer isDarkTheme={isDarkTheme}>
          <TrendingHeading>Trending</TrendingHeading>
          <TrendingVideosList>
            {/* Video list items will be rendered here in future */}
          </TrendingVideosList>
        </ContentContainer>
      </TrendingContainer>
    </>
  )
}

export default Trending
