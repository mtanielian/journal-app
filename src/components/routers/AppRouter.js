import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { doLogin } from "../../actions/authActions"
import { loadRecentEvents } from "../../actions/eventActions"
import { auth } from "../../firebase/firebaseConfig"

import LoginPage from "../../pages/auth/LoginPage"
import RegisterPage from "../../pages/auth/RegisterPage"
import JournalPage from "../../pages/journal/JournalPage"
import AuthLayout from "../layout/AuthLayout"
import MainLayout from "../layout/MainLayout"

const AppRouter = () => {
  const dispatch = useDispatch()
  const [cheking, setCheking] = useState(true)


  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user?.uid) {
        const { uid, displayName, email } = user
        dispatch(doLogin({ uid, displayName, email }))
        dispatch(loadRecentEvents())
      }
      setCheking(false)
    })
  }, [dispatch, setCheking])

  if (cheking)
    return <h1>Cargando........</h1>


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth/login' element={<AuthLayout><LoginPage /></AuthLayout>} />
        <Route path='/auth/register' element={<AuthLayout><RegisterPage /></AuthLayout>} />
        <Route path='/auth/*' element={<AuthLayout><LoginPage /></AuthLayout>} />
        <Route path='/' element={<MainLayout><JournalPage /></MainLayout>} />
        <Route path='/journal' element={<MainLayout><JournalPage /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  )
}



export default AppRouter