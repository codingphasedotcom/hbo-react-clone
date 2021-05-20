import React, { useContext, useState} from 'react';

export const StateContext = React.createContext();

export function useStateContext(){
  return useContext(StateContext)
}

export function HBOProvider({children}){
  const [user, setUser] = useState('')
  const defaultUserImg = 'https://uifaces.co/our-content/donated/vIqzOHXj.jpg'
  const createUserAction = (e) => {
    setUser(e.target.value)
    console.log(2+2)
  }

  return(
    <StateContext.Provider
    value={{
      user,
      createUserAction,
      defaultUserImg
    }}>
      {children}
    </StateContext.Provider>
  )
}