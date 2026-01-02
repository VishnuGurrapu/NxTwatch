import {useState, useContext, useEffect} from 'react'
import {useHistory, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../ThemeContext'

import {
  LoginContainer,
  FormContainer,
  WebsiteLogo,
  InputContainer,
  Label,
  Input,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

const Login = () => {
  const {isDarkTheme} = useContext(ThemeContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const history = useHistory()

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()

    if (response.ok) {
      const {jwt_token: jwtToken} = data
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      history.replace('/')
    } else {
      setErrorMsg(data.error_msg)
    }
  }

  return (
    <LoginContainer isDark={isDarkTheme}>
      <FormContainer isDark={isDarkTheme} onSubmit={handleSubmit}>
        <WebsiteLogo
          src={
            isDarkTheme
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          }
          alt="website logo"
        />
        <InputContainer>
          <Label htmlFor="username" isDark={isDarkTheme}>
            USERNAME
          </Label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            isDark={isDarkTheme}
            placeholder="Username"
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="password" isDark={isDarkTheme}>
            PASSWORD
          </Label>
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            isDark={isDarkTheme}
            placeholder="Password"
          />
        </InputContainer>
        <CheckboxContainer>
          <Checkbox
            id="showPassword"
            type="checkbox"
            checked={showPassword}
            onChange={e => setShowPassword(e.target.checked)}
          />
          <CheckboxLabel htmlFor="showPassword" isDark={isDarkTheme}>
            Show Password
          </CheckboxLabel>
        </CheckboxContainer>
        <LoginButton type="submit">Login</LoginButton>
        {errorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
      </FormContainer>
    </LoginContainer>
  )
}

export default Login
