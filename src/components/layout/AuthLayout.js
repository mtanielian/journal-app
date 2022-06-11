import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const AuthLayout = ({ children }) => {
  const state = useSelector( state => state.auth)
  if (state.logged)
    return <Navigate to='/' />
  

  return (
    <>
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


export default AuthLayout