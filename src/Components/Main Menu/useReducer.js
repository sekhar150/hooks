import React,{useReducer} from 'react'

const initialState={count:0}

function reducer(state,action)

{
    switch(action.type)
    {
        case `increment`:
        return {count:state.count+1};
        case `decrement`:
        return {count:state.count-1};
        default:
            throw new Error();
    }
}
function App()
{
    const[state,dispatch]=useReducer(reducer,initialState)
    return(<>
    <h2 className='text-center'>count : {state.count}</h2>
    <center>
        <button className='btn btn-success w-25' onClick={()=>dispatch({type:`increment`})}>+</button>&nbsp;&nbsp;
        <button className='btn btn-danger w-25' onClick={()=>dispatch({type:`decrement`})}>-</button><br></br>
    </center>
    <br></br>
    </>)
}
export default App;