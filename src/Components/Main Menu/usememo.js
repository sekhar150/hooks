import React, { useState } from 'react'

export default function Memo() {

    const[Counter,setCounter]=React.useState(0)
    const[Number,setNumber]=React.useState(5)
    const Factorial=React.useMemo(()=>fact(Number),[Number])
  return (
    <center>
        Factorial:{Factorial}<br></br>
        <button onClick={()=>setCounter(Counter+1)}>Counter Increment</button><br></br>
        <button onClick={()=>setNumber(Number+1)}>Number Increment</button><br></br>
        Counter:{Counter}
    </center>
  )
   
}
const fact=(n)=>
   {
       let answer=1;
       for(var i=n;i>=1;i--)
       {
           answer=answer*i
       }
       console.log(`Factorial Function Calling`)

       return answer;
   }
