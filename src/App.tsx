import './App.css'
import { TamaguiProvider } from '@tamagui/core'
import tamaguiConfig from '../tamagui.config'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Login from './pages/login';

function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Router basename="/personal-tracker">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </TamaguiProvider>
  )
}

export default App
