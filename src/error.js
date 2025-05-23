import {Component} from 'react'

class ErrorBoundary extends Component {
  state = {hasError: false}

  static getDerivedStateFromError() {
    return {hasError: true}
  }

  render() {
    const {hasError} = this.state
    const {children} = this.props

    if (hasError) return <h1>Something went wrong</h1>
    return children
  }
}

export default ErrorBoundary
