// components/VideoDetails/styledComponents.js
import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
`

export const VideoContent = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: ${props => (props.dark ? '#181818' : '#ffffff')};
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`

export const Title = styled.h1`
  font-size: 20px;
  margin: 16px 0;
`

export const InfoRow = styled.div`
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: #64748b;
`

export const Views = styled.span``

export const DateText = styled.span``

export const ActionRow = styled.div`
  display: flex;
  gap: 16px;
  margin: 12px 0;
`

export const ActionButton = styled.button`
  background: transparent;
  border: none;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
`

export const ChannelInfo = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`

export const ChannelLogo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`

export const ChannelName = styled.p`
  font-weight: bold;
  margin-bottom: 4px;
  color: ${props => (props.dark ? '#ffffff' : '#0f0f0f')};
`

export const Description = styled.p`
  font-size: 14px;
  color: ${props => (props.dark ? '#cccccc' : '#606060')};
`
