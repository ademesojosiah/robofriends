import React from 'react';
import './card.css'

const Card = ({name,id,email})=>{
    return(
        <div className='bg-light-green dib tc br3 pa3 ma2 grow bw2 shadow-5' >
            <img src={`https://robohash.org/${id}?200x200`} alt='robot'></img>
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;