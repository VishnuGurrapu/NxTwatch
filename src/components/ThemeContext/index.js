import {createContext, useState} from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [savedVideos, setSavedVideos] = useState([])

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme)
  }

  const addVideoToSaved = video => {
    setSavedVideos(prevVideos => {
      const videoExists = prevVideos.find(item => item.id === video.id)
      if (videoExists) return prevVideos
      return [...prevVideos, video]
    })
  }

  const removeVideoFromSaved = videoId => {
    setSavedVideos(prevVideos =>
      prevVideos.filter(video => video.id !== videoId),
    )
  }

  const toggleSaveVideo = video => {
    const isAlreadySaved = savedVideos.find(item => item.id === video.id)
    if (isAlreadySaved) {
      removeVideoFromSaved(video.id)
    } else {
      addVideoToSaved(video)
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        toggleTheme,
        savedVideos,
        addVideoToSaved,
        removeVideoFromSaved,
        toggleSaveVideo,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
