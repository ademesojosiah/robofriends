import React from 'react';

const Card = (props)=>{
    return(
        <div className='bg-light-green dib tc br3 pa3 ma2 grow bw2 shadow-5' >
            <img src={`https://robohash.org/${props.id}?200x200`} alt='robot'></img>
            <div>
                <h1>{props.name}</h1>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card;