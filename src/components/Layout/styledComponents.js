import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const LayoutMain = styled.div`
  display: flex;
  flex-grow: 1;
  
  overflow: hidden;
`

export const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
  height: calc(100vh - 64px);
`
