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
  const basePath = import.meta.env.VITE_BASE_PATH || '/'

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Router basename={basePath}>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </TamaguiProvider>
  )
}

export default App
