import { createContext, useState } from "react";

export const UiContext = createContext()

export const UiContextProvicer = ({ children }) => {
  const [menuOpen, setMenuOpen ] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }

  return (
    <UiContext.Provider value={{ menuOpen, toggleMenu }}>
      {children}
    </UiContext.Provider>
  )
}