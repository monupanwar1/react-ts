import { createContext, useState } from "react";

const UserContext =createContext();

const Userprovider = ({children}) => {

    const [user,setUser] =useState({
        name:"john doe"
    })

    const updateUser = (newName)=>{
        setUser({name:newName})
    }

  return (
    <UserContext.Provider value={{user,updateUser}}>
        {children}
    </UserContext.Provider>
  )
}
export {UserContext,Userprovider}



