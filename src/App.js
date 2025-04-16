// src/App.js
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import {ThemeProvider} from './components/ThemeContext'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoDetails from './components/VideoDetails'

import ProtectedRoute from './components/ProtectedRoute'
import ErrorBoundary from './error'
import './App.css'

console.log('app')
const App = () => (
  <ThemeProvider>
    <ErrorBoundary>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <Route render={() => <h1>404: Page not found</h1>} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  </ThemeProvider>
)

export default App;

//  import NotFound from './components/NotFound'
//  <BrowserRouter>
//
//       <Switch>
//         // <Route exact path="/login" component={Login} />
//         // <ProtectedRoute exact path="/" component={Home} />
//         // <ProtectedRoute exact path="/trending" component={Trending} />
//         // <ProtectedRoute exact path="/gaming" component={Gaming} />
//         // <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
//         // <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
//         // <Route component={NotFound} />
//
//       </Switch>
//
//     </BrowserRouter>
