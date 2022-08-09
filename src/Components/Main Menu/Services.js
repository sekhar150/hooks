import React from "react";
// import Reactlogo from './../../Assets/images/Amazon-4.jpg'


import ServiceData from './../../Assets/Json/Services.json'

var bgc={backgroundColor:'#12151c'}
function Services()
{
    return (<>
   <div className="container-fluid" style={bgc}
   >
       <div className="container p-5 text-center">

           <h1 className="pt-5 pb-5 text-white">Services</h1>

           <div className="row">

            {
                ServiceData.map((data,i)=>{
                    return(<div className="col-lg-4">
                    <div className="card text-center text-white p-3" style={bgc}>

                    <p className="text-center">
                   {/* <FontAwesomeIcon icon={data.icon} size="4x" className="fw-bold text-success" /> */}
                    </p>
                    <div className="card-body">
                        <h2 className="py-3">{data.name}</h2>
                        <p className="text-justify">{data.description}</p>
                    </div>

                </div></div>)
                })
            }




               {/* <div className="col-lg-4">

                   <div className="card text-center text-white p-3" style={bgc}>

                       <p className="text-center">
                      <FontAwesomeIcon icon={} size="4x" className="fw-bold text-success" />
                       </p>
                       <div className="card-body">
                           <h2 className="py-3">{}</h2>
                           <p className="text-justify">{}</p>
                       </div>

                   </div>



               </div> */}

           </div>

       </div>
   </div>
    
    </>)
}

export default Services;