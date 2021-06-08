import React, { useContext, useState} from 'react';
import ls from 'local-storage';

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
  const [sideNavOpen, setSideNavOpenAction] = useState(false)
  const [accountModalOpen, setAccountModalOpenAction] = useState(false)
  const [searchOpen, setSearchOpenAction] = useState(false)
  const [watchList, setWatchList] = useState(ls.get('myList'))

  const addToList = (video) => {
    let myList;
    if(ls('myList') !== null) {
      myList = ls.get('myList') 
      myList.push(video)
      ls.set('myList', myList)
      setWatchList(myList)
    } else {
      ls.set('myList', [video])
    }
  }

  const removeFromList = (videoId) => {
    let myList = ls('myList')
    myList = myList.filter((item) => item.mediaId != videoId)
    ls.set('myList', myList)
    setWatchList(myList)
  }



  const thumbTypes = ['large-v', 'small-v', 'large-h', 'small-h']

  return(
    <StateContext.Provider
    value={{
      user,
      createUserAction,
      defaultUserImg,
      sideNavOpen,
      setSideNavOpenAction,
      accountModalOpen,
      setAccountModalOpenAction,
      searchOpen, 
      setSearchOpenAction,
      thumbTypes,
      removeFromList,
      addToList,
      watchList
    }}>
      {children}
    </StateContext.Provider>
  )
}