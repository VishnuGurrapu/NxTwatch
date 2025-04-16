// components/Gaming/index.js
import {useContext} from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../ThemeContext'

import {
  GamingContainer,
  GamingContentContainer,
  GamingHeading,
  GamingVideosList,
} from './styledComponents'

const Gaming = () => {
  const {isDarkTheme} = useContext(ThemeContext)
  console.log("gameloaded");


  return (
    <>
      <Header />
      <GamingContainer>
        <Sidebar />
        <GamingContentContainer isDarkTheme={isDarkTheme}>
          <GamingHeading>Gaming</GamingHeading>
          <GamingVideosList>
            {/* Future list of gaming videos */}
          </GamingVideosList>
        </GamingContentContainer>
      </GamingContainer>
    </>
  )
}

export default Gaming
