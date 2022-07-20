import React from 'react';

const SearchBox = ({unSearch})=>{
   return(
    <div className='pa2'>
        <input 
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search'
        onChange={unSearch}
        />
    </div>
    )
}

export default SearchBox;