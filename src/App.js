import React, { Component } from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox'
import {robots} from './robots';

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots:robots,
            searchField:''
        }
    }


    onSearch=(e)=>{
        this.setState({searchField:e.target.value})

    }



    render(){
        const filteredArray = this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return(
            <div className='tc'>
                <h1>Robofriends</h1>
                <SearchBox unSearch={this.onSearch}/>
                <Cardlist robots={filteredArray}/>
            </div>
        )
    }
}

export default App;