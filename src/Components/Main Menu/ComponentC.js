import React from 'react'
import {UserContext} from "./../Main Menu/useApp"

function UseContext() {
  return (
    <div>
        <UserContext.Consumer>
            {value=><div>{value}</div>}
        </UserContext.Consumer>
    </div>
  )
}

export default UseContext