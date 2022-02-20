import React from 'react'
import Card from './Card';
import Cardtada from './Cardtada';

const Thor = () => {
    return (
        <Card 
        imagename={Cardtada[3].img} 
        heroname={Cardtada[3].sname}
        tiltea ={Cardtada[3].title}
        /> 
    )
}

export default Thor;
