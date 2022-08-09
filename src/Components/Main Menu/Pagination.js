import {React,useState,useEffect} from 'react'
import axios from 'axios'
import Pager from './Pager'
const url='https://jsonplaceholder.typicode.com/posts'

export default (props) => {
    //Posts_Update For API
    var[posts,setStateposts]=useState([])
    //Select_Default Max Posts Per Action
    var[DefaultMaxDisplayposts]=useState(8)
     //First_Button Number
    var[DefaulButton,setStateDefaultButton]=useState(1)

    //Last_Index
    var lastindex=DefaulButton*DefaultMaxDisplayposts
    var firstindex=lastindex-DefaultMaxDisplayposts

    //API Calls By Hooks
    useEffect(()=>{
        axios.get(url).then((result) => setStateposts(result.data))
    },[])

    // var DisplayDefaultButtonPosts=posts.slice(firstindex,lastindex)
    posts.slice(firstindex,lastindex)

    //Total_Posts From API
    var totalPosts=posts.length

    let handleButtonNumberChanges=(btnNumber)=>
    {
      setStateDefaultButton(btnNumber)
    }

  return (<>
       <div className='container p-5'>


       <h1 className='text-center py-2'>React Hooks pagination</h1>
        {/*pagination
       <nav>
        <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
        </nav>
        {/*pagination*/}

      <h5 className='text-center'>Showing {firstindex+1}-{lastindex} of {totalPosts} results for "Posts"</h5>
       
        <div className='row'>
        {
              posts.slice(firstindex,lastindex)
              .map((res,i)=>
          {
            return(<ul key={i}>

           <li>
               <h4>{res.id}{res.title}</h4>
               <p>{res.body}</p>
           </li>

         </ul>)  
          })
       } 
        </div>
        <Pager totalpostsInAPI={totalPosts} 
         maxDisplayrecordsPerButton={DefaultMaxDisplayposts}
         getButtonNumber={(bno)=>handleButtonNumberChanges(bno)}
         />
         
       </div>
    </>)
}

