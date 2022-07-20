import React from 'react';
import Card from './Card';

const Cardlist = ({robots})=>{
    let cardArray = robots.map((user,i)=>{
        return <Card id={user.id} name={robots[i].name} email={robots[i].email}/>
    })
    return(
        cardArray
    )
}

export default Cardlist