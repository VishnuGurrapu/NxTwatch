// components/Login/styledComponents.js
import styled from 'styled-components'

export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({isDark}) => (isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const FormContainer = styled.form`
  background-color: ${({isDark}) => (isDark ? '#000000' : '#ffffff')};
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 350px;
`

export const WebsiteLogo = styled.img`
  width: 120px;
  margin: 0 auto 24px;
  display: block;
`

export const InputContainer = styled.div`
  margin-bottom: 20px;
`

export const Label = styled.label`
  color: ${({isDark}) => (isDark ? '#f1f1f1' : '#64748b')};
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
  display: block;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  background-color: ${({isDark}) => (isDark ? '#0f0f0f' : '#ffffff')};
  color: ${({isDark}) => (isDark ? '#ffffff' : '#1e293b')};
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const Checkbox = styled.input`
  margin-right: 8px;
`

export const CheckboxLabel = styled.label`
  color: ${({isDark}) => (isDark ? '#f1f1f1' : '#0f0f0f')};
  font-size: 14px;
`

export const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 13px;
  margin-top: 8px;
`
