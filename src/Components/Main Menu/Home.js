import React from "react";
import {Link} from 'react-router-dom'
import { auth } from "../../firebase.js";

import './../../Assets/js/bootstrap.js'

import Reactlogo from './../../Assets/images/Apple_12.jpg'

import Reactlogo1 from'./../../Assets/images/Amzon.jpg'

import Reactlogo2 from'./../../Assets/images/Amazon-3.jpg'

import Reactlogo3 from'./../../Assets/images/Amazon-1.jpg'

import Reactlogo4 from'./../../Assets/images/Amazon-4.jpg'

import Amazon from './../../Assets/images/snap-5.jpg'

var styles={
    backgroundImage:`url(${Amazon})`
}

const Home = ({presentUser}) =>
{
    return (<>
    <h4 className="text-center">Welcome {presentUser}</h4>
<div className="container-fluid bg-dark">
    
   <div className="row">
       
       <div className="col lg 2 mb-3">
         <nav>
            <ul className="list-group">
                <Link className="list-group-item"><i className="bi bi-arrow-right-circle-fill px-2"></i>All Offers</Link>
                <Link className="list-group-item"><i className="bi bi-arrow-right-circle-fill px-2"></i>Mobiles</Link>
                <Link className="list-group-item"><i className="bi bi-arrow-right-circle-fill px-2"></i>Tablets</Link>
                <Link className="list-group-item"><i className="bi bi-arrow-right-circle-fill px-2"></i>Electronics</Link>
                <Link className="list-group-item"><i className="bi bi-arrow-right-circle-fill px-2"></i>Computers</Link>
                <Link className="list-group-item"><i className="bi bi-arrow-right-circle-fill px-2"></i>Gaming</Link>
                <Link className="list-group-item"><i className="bi bi-arrow-right-circle-fill px-2"></i>Kitchen Ware</Link>
                <Link className="list-group-item"><i className="bi bi-arrow-right-circle-fill px-2"></i>Accessories</Link>
                <Link className="list-group-item"><i className="bi bi-arrow-right-circle-fill px-2"></i>Books</Link>
                <Link className="list-group-item"><i className="bi bi-arrow-right-circle-fill px-2"></i>Mens Fashion</Link>
                <Link className="list-group-item"><i className="bi bi-arrow-right-circle-fill px-2"></i>Womens Fashion</Link>
                <Link className="list-group-item"><i className="bi bi-arrow-right-circle-fill px-2"></i>Vision Care</Link>
                <Link className="list-group-item"><i className="bi bi-arrow-right-circle-fill px-2"></i>Health Care</Link>
                <Link className="list-group-item"><i className="bi bi-arrow-right-circle-fill px-2"></i>Ipads</Link>
                <Link className="list-group-item"><i className="bi bi-arrow-right-circle-fill px-2"></i>Laptops</Link>
                
                
                
            </ul>
         </nav>
       </div>
       

      
       <div className="col-lg-10 mb-2">
       <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Reactlogo1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={Reactlogo2} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={Reactlogo3} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={Reactlogo4} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
          </div>
          
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6">
                   <figure className="card p-4 bg-light text-black">
                       <img src={Reactlogo} className="card-img-top mx-auto mtn-3" />
                       <div className="card-body text-center my-2">
                           <figcaption className="card-title h5 my-2">
                               Apple iPhone 12 (128GB) - Blue</figcaption>
                           <figcaption className="card-text mb-3">
                               <span className="h3">&#8377;60,999</span>&nbsp;
                               <span><s>&#8377;70,999</s></span>
         
                             </figcaption>
                           <button className="btn btn-primary">Buy Now</button>
                       </div>
                   </figure>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                     <figure className="card p-4 bg-light text-black">
                         <img src={Reactlogo} className="card-img-top mx-auto mtn-3" />
                         <div className="card-body text-center my-2">
                             <figcaption className="card-title h5 my-2">
                                 Apple iPhone 12 (128GB) - Blue</figcaption>
                             <figcaption className="card-text mb-3">
                                 <span className="h3">&#8377;60,999</span>&nbsp;
                                 <span><s>&#8377;70,999</s></span>
           
                               </figcaption>
                             <button className="btn btn-primary">Buy Now</button>
                         </div>
                     </figure>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6">
                         <figure className="card p-4 bg-light text-black">
                             <img src={Reactlogo} className="card-img-top mx-auto mtn-3"/>
                             <div className="card-body text-center my-2">
                                 <figcaption className="card-title h5 my-2">
                                     Apple iPhone 12 (128GB) - Blue</figcaption>
                                 <figcaption className="card-text mb-3">
                                     <span className="h3">&#8377;60,999</span>&nbsp;
                                     <span><s>&#8377;70,999</s></span>
               
                                   </figcaption>
                                 <button className="btn btn-primary">Buy Now</button>
                             </div>
                         </figure>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                             <figure className="card p-4 bg-light text-black">
                                 <img src={Reactlogo} className="card-img-top mx-auto mtn-3" />
                                 <div className="card-body text-center my-2">
                                     <figcaption className="card-title h5 my-2">
                                         Apple iPhone 12 (128GB) - Blue</figcaption>
                                     <figcaption className="card-text mb-3">
                                         <span className="h3">&#8377;60,999</span>&nbsp;
                                         <span><s>&#8377;70,999</s></span>
                   
                                       </figcaption>
                                     <button className="btn btn-primary">Buy Now</button>
                                 </div>
                             </figure>
                              </div>
                </div>
            </div> 
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6">
                   <figure className="card p-4 bg-light text-black">
                       <img src={Reactlogo} className="card-img-top mx-auto mtn-3" />
                       <div className="card-body text-center my-2">
                           <figcaption className="card-title h5 my-2">
                               Apple iPhone 12 (128GB) - Blue</figcaption>
                           <figcaption className="card-text mb-3">
                               <span className="h3">&#8377;60,999</span>&nbsp;
                               <span><s>&#8377;70,999</s></span>
         
                             </figcaption>
                           <button className="btn btn-primary">Buy Now</button>
                       </div>
                   </figure>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                     <figure className="card p-4 bg-light text-black">
                         <img src={Reactlogo} className="card-img-top mx-auto mtn-3" />
                         <div className="card-body text-center my-2">
                             <figcaption className="card-title h5 my-2">
                                 Apple iPhone 12 (128GB) - Blue</figcaption>
                             <figcaption className="card-text mb-3">
                                 <span className="h3">&#8377;60,999</span>&nbsp;
                                 <span><s>&#8377;70,999</s></span>
           
                               </figcaption>
                             <button className="btn btn-primary">Buy Now</button>
                         </div>
                     </figure>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6">
                         <figure className="card p-4 bg-light text-black">
                             <img src={Reactlogo} className="card-img-top mx-auto mtn-3" />
                             <div className="card-body text-center my-2">
                                 <figcaption className="card-title h5 my-2">
                                     Apple iPhone 12 (128GB) - Blue</figcaption>
                                 <figcaption className="card-text mb-3">
                                     <span className="h3">&#8377;60,999</span>&nbsp;
                                     <span><s>&#8377;70,999</s></span>
               
                                   </figcaption>
                                 <button className="btn btn-primary">Buy Now</button>
                             </div>
                         </figure>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                             <figure className="card p-4 bg-light text-black">
                                 <img src={Reactlogo} className="card-img-top mx-auto mtn-3" />
                                 <div className="card-body text-center my-2">
                                     <figcaption className="card-title h5 my-2">
                                         Apple iPhone 12 (128GB) - Blue</figcaption>
                                     <figcaption className="card-text mb-3">
                                         <span className="h3">&#8377;60,999</span>&nbsp;
                                         <span><s>&#8377;70,999</s></span>
                   
                                       </figcaption>
                                     <button className="btn btn-primary">Buy Now</button>
                                 </div>
                             </figure>
                              </div>
                </div>
            </div> 
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6">
                   <figure className="card p-4 bg-light text-black">
                       <img src={Reactlogo} className="card-img-top mx-auto mtn-3" />
                       <div className="card-body text-center my-2">
                           <figcaption className="card-title h5 my-2">
                               Apple iPhone 12 (128GB) - Blue</figcaption>
                           <figcaption className="card-text mb-3">
                               <span className="h3">&#8377;60,999</span>&nbsp;
                               <span><s>&#8377;70,999</s></span>
         
                             </figcaption>
                           <button className="btn btn-primary">Buy Now</button>
                       </div>
                   </figure>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                     <figure className="card p-4 bg-light text-black">
                         <img src={Reactlogo} className="card-img-top mx-auto mtn-3" />
                         <div className="card-body text-center my-2">
                             <figcaption className="card-title h5 my-2">
                                 Apple iPhone 12 (128GB) - Blue</figcaption>
                             <figcaption className="card-text mb-3">
                                 <span className="h3">&#8377;60,999</span>&nbsp;
                                 <span><s>&#8377;70,999</s></span>
           
                               </figcaption>
                             <button className="btn btn-primary">Buy Now</button>
                         </div>
                     </figure>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6">
                         <figure className="card p-4 bg-light text-black">
                             <img src={Reactlogo} className="card-img-top mx-auto mtn-3" />
                             <div className="card-body text-center my-2">
                                 <figcaption className="card-title h5 my-2">
                                     Apple iPhone 12 (128GB) - Blue</figcaption>
                                 <figcaption className="card-text mb-3">
                                     <span className="h3">&#8377;60,999</span>&nbsp;
                                     <span><s>&#8377;70,999</s></span>
               
                                   </figcaption>
                                 <button className="btn btn-primary">Buy Now</button>
                             </div>
                         </figure>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                             <figure className="card p-4 bg-light text-black">
                                 <img src={Reactlogo} className="card-img-top mx-auto mtn-3" />
                                 <div className="card-body text-center my-2">
                                     <figcaption className="card-title h5 my-2">
                                         Apple iPhone 12 (128GB) - Blue</figcaption>
                                     <figcaption className="card-text mb-3">
                                         <span className="h3">&#8377;60,999</span>&nbsp;
                                         <span><s>&#8377;70,999</s></span>
                   
                                       </figcaption>
                                     <button className="btn btn-primary">Buy Now</button>
                                 </div>
                             </figure>
                              </div>
                </div>
            </div> 
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6">
                   <figure className="card p-4 bg-light text-black">
                       <img src={Reactlogo} className="card-img-top mx-auto mtn-3" />
                       <div className="card-body text-center my-2">
                           <figcaption className="card-title h5 my-2">
                               Apple iPhone 12 (128GB) - Blue</figcaption>
                           <figcaption className="card-text mb-3">
                               <span className="h3">&#8377;60,999</span>&nbsp;
                               <span><s>&#8377;70,999</s></span>
         
                             </figcaption>
                           <button className="btn btn-primary">Buy Now</button>
                       </div>
                   </figure>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                     <figure className="card p-4 bg-light text-black">
                         <img src={Reactlogo} className="card-img-top mx-auto mtn-3" />
                         <div className="card-body text-center my-2">
                             <figcaption className="card-title h5 my-2">
                                 Apple iPhone 12 (128GB) - Blue</figcaption>
                             <figcaption className="card-text mb-3">
                                 <span className="h3">&#8377;60,999</span>&nbsp;
                                 <span><s>&#8377;70,999</s></span>
           
                               </figcaption>
                             <button className="btn btn-primary">Buy Now</button>
                         </div>
                     </figure>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6">
                         <figure className="card p-4 bg-light text-black">
                             <img src={Reactlogo} className="card-img-top mx-auto mtn-3"/>
                             <div className="card-body text-center my-2">
                                 <figcaption className="card-title h5 my-2">
                                     Apple iPhone 12 (128GB) - Blue</figcaption>
                                 <figcaption className="card-text mb-3">
                                     <span className="h3">&#8377;60,999</span>&nbsp;
                                     <span><s>&#8377;70,999</s></span>
               
                                   </figcaption>
                                 <button className="btn btn-primary">Buy Now</button>
                             </div>
                         </figure>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6">
                             <figure className="card p-4 bg-light text-black">
                                 <img src={Reactlogo} className="card-img-top mx-auto mtn-3"/>
                                 <div className="card-body text-center my-2">
                                     <figcaption className="card-title h5 my-2">
                                         Apple iPhone 12 (128GB) - Blue</figcaption>
                                     <figcaption className="card-text mb-3">
                                         <span className="h3">&#8377;60,999</span>&nbsp;
                                         <span><s>&#8377;70,999</s></span>
                   
                                       </figcaption>
                                     <button className="btn btn-primary">Buy Now</button>
                                 </div>
                             </figure>
                              </div>
                </div>
                <nav>
                    <ul className="pagination justify-content-center">
                        <Link className="page-item"><a className="page-link" href="#">1</a></Link>
                        <Link className="page-item"><a className="page-link" href="#">2</a></Link>
                        <Link className="page-item"><a className="page-link" href="#">3</a></Link>
                        <Link className="page-item"><a className="page-link" href="#">4</a></Link>
                        <Link className="page-item"><a className="page-link" href="#">5</a></Link>
                        <Link className="page-item"><a className="page-link" href="#">6</a></Link>
                        <Link className="page-item"><a className="page-link" href="#">7</a></Link>
                        <Link className="page-item"><a className="page-link" href="#">8</a></Link>
                        <Link className="page-item"><a className="page-link" href="#">9</a></Link>
                        <Link className="page-item"><a className="page-link" href="#">10</a></Link>
                        
                    </ul>
                </nav>
            </div> 
         
         
       </div>
       
   </div>
   <button className="btn btn-primary" style={{marginLeft:"650px"}} onClick={()=>auth.signOut()}>Sign Out</button>

</>)
}

export default Home;