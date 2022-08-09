import {React,useState,useEffect} from 'react'
import axios from 'axios'

const url='http://fakestoreapi.com/products'

export default (props) => {
    //state_object Implementation By Hooks
    var[products,setStateproducts]=useState([])
    //API Calls By Hooks
    useEffect(()=>{
        axios.get(url).then((result) => setStateproducts(result.data))
    },[])
  return (<>
       <div className='container p-5'>

       <h1 className='text-center h2'>React useEffect Hooks For API Calls</h1>
       
        <div className='row'>
        {
          products.map((res,i)=>
          {
            return(<div className='col-lg-3' key={i}>

            <div className="card">
            <img src={res.image} className="card-img-top w-100 mx-auto my-2" style={{height:200}} />
            <div className="card-body text-center">
                <h6 className="card-title">{res.title.slice(0,17)}</h6>
                <h6 className="card-title">${res.price}</h6>
                <p className="card-text">{res.description.slice(0,20)}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
</div>

         </div>)  
          })
       } 
        </div>
       </div>
    </>)
}

