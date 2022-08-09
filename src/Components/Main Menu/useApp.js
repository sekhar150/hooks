import React from 'react'
import UseContext from './ComponentC'
import {createContext} from 'react'

const UserContext=React.createContext()


function UseApp() {
  return (
    <div>
        <center>
        <UserContext.Provider value={"Hello React"}>
            <UseContext />
        </UserContext.Provider>
        </center>
    </div>
  )
}

export default UseApp
export {UserContext}