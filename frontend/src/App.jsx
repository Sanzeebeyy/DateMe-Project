import './App.css'
import ProtectedRoute from './components/ProtectedRoutes'
import LandingPage from './pages/landingPage'
import Register from './pages/registerPage'
import Login from './pages/loginPage'
import { Routes, Route } from 'react-router'
import Interactions from './pages/interactionPage'
import UpdateUser from './pages/updateUser'
import UploadPhoto from './pages/uploadPhoto'
import Matches from './pages/matchesPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>

        <Route path='/register' element={<Register />}></Route>

        <Route path='/login' element={<Login />}></Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/interactions" element={<Interactions />} />
          <Route path="/user/update" element={<UpdateUser />} />
          <Route path="/user/upload-photo" element={<UploadPhoto/>} />
          <Route path="/matches" element={<Matches/>} />
        </Route>

      </Routes>
    </>
  )
}

export default App
