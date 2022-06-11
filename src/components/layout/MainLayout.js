import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import NavBar from "../navBar/NavBar"
import SideMenu from "../sideMenu/SideMenu"


const MainLayout = ({ children }) => {
  const auth = useSelector(state => state.auth)
  if (!auth.logged)
    return <Navigate to='/auth/login' />

  

  return (
    <>
      <NavBar />
      <SideMenu />
      <main style={{
        margin: '80px auto',
        maxWidth: '1440px',
        padding: '0px 30px'
      
      }}>
        {children}
      </main>
    </>
  )
}


export default MainLayout