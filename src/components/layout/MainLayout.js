import NavBar from "../navBar/NavBar"
import SideMenu from "../sideMenu/SideMenu"


const MainLayout = ({ children }) => {
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