import React from 'react';
import "./Card.css";



const Card = (props) => {
    return (            
               <div className="col-md-4 ddd">
               <div className="card">
               <div className="row">
                     <div className="col-md-5">
                         <img src={props.imagename} alt="" />
                     </div>
                     <div className="col-md-7">
                         <h3 className='name'>{props.heroname}</h3>
                         <p>{props.tiltea }</p>
                     </div>
                 </div>
               </div>
                </div>
    )
}

export default Card;
