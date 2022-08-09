import {React} from 'react'
//Pager
export default (props) => {
     //undefined_Array
    var numbers=[]

    var {totalpostsInAPI,maxDisplayrecordsPerButton,getButtonNumber}=props

    var numberOfButtons=Math.ceil(totalpostsInAPI/maxDisplayrecordsPerButton)
     
    for(let i=1;i<=numberOfButtons;i++)
    {
        numbers.push(i)//Defined_Array
    }
  return (<>
       <div className='container p-5'>
       <ul className='pagination'>
       {
            numbers.map((bno,i)=>
            <li class="page-item">
            <a class="page-link" onClick={()=>getButtonNumber(bno)}>{bno}</a>
            </li>) 
       }
       </ul>
       </div>
    </>)
}

