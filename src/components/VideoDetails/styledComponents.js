import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
`

export const VideoBody = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
`

export const VideoContent = styled.div`
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  background-color: ${props => (props.dark ? '#181818' : '#ffffff')};
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`

export const Title = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 12px;
  line-height: 1.4;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #64748b;
  margin-bottom: 8px;
`

export const Views = styled.p`
  margin: 0;
`

export const DateText = styled.p`
  margin: 0;
`

export const ActionRow = styled.div`
  display: flex;
  gap: 12px;
  margin: 16px 0;
`

export const ActionButton = styled.button`
  background: transparent;
  border: none;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  &:hover {
    color: #2563eb;
  }
`

export const ChannelInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-top: 20px;
  flex-wrap: wrap;
`

export const ChannelLogo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  flex-shrink: 0;
`

export const ChannelName = styled.p`
  font-weight: bold;
  margin-bottom: 6px;
  color: ${props => (props.dark ? '#ffffff' : '#0f0f0f')};
`

export const Description = styled.p`
  font-size: 14px;
  color: ${props => (props.dark ? '#cccccc' : '#606060')};
  margin-top: 10px;
`

export const LoaderContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FailureContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
`

export const FailureHeading = styled.h1`
  color: ${props => (props.dark ? '#ffffff' : '#1e293b')};
`

export const FailureText = styled.p`
  color: ${props => (props.dark ? '#94a3b8' : '#475569')};
  margin-top: 8px;
`
