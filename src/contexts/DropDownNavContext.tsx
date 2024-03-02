import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const DropDownNavContext = createContext<any>(undefined);
DropDownNavContext.displayName = "DropDownNavContext"

const DropDownNavProvider = ({ children } : { children: React.ReactNode }) => {
  const [ openNav, setOpenNav ] = useState(false);

  useEffect(() => {
    console.log(openNav);
  }, [openNav])

  return (
    <DropDownNavContext.Provider value={{ openNav, setOpenNav }}>
      {children}
    </DropDownNavContext.Provider>
  )
}

const useDropDownNav = () => {
  return useContext(DropDownNavContext);
}

export {
  DropDownNavProvider,
  useDropDownNav
}