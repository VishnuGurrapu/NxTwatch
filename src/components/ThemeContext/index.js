// components/ThemeContext/index.js
import {createContext, useState} from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [savedVideos, setSavedVideos] = useState([])
  console.log("theme loaded");
  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme)
  }

  const addVideoToSaved = video => {
    setSavedVideos(prevVideos => {
      const videoExists = prevVideos.find(item => item.id === video.id)
      if (videoExists) {
        return prevVideos
      }
      return [...prevVideos, video]
    })
  }

  const removeVideoFromSaved = videoId => {
    setSavedVideos(prevVideos =>
      prevVideos.filter(video => video.id !== videoId),
    )
  }

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        toggleTheme,
        savedVideos,
        addVideoToSaved,
        removeVideoFromSaved,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
