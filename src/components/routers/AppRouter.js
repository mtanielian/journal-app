import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "../../pages/auth/LoginPage"
import RegisterPage from "../../pages/auth/RegisterPage"
import JournalPage from "../../pages/journal/JournalPage"
import MainLayout from "../layout/MainLayout"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth/login' element={<LoginPage />} />
        <Route path='/auth/register' element={<RegisterPage />} />
        <Route path='/auth/*' element={<LoginPage />} />
        <Route path='/' element={<MainLayout><JournalPage /></MainLayout>} />
        <Route path='/journal' element={<MainLayout><JournalPage /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  )
}



export default AppRouter