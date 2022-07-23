import React,{Component}  from 'react';
import Cardlist from '../component/Cardlist';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll'
// import {robots} from './robots';
import './App.css'

class App extends Component{
    constructor(){
        super()
        this.state ={
            robots:[],
            searchField: ''
        }

    }


    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then( response => response.json())
            .then(users => this.setState({robots:users}))
    }

    onsearch=(e)=>{
        this.setState({searchField:e.target.value})
    }



    render(){
        const filteredArray = this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })


        return( 
            <div className='tc'>
                <h1 className='hhs f1'>Robofriends</h1>
                <SearchBox unSearch={this.onsearch}/>
                <Scroll>
                    <Cardlist robots={filteredArray}/>
                </Scroll>
            </div>
    );}
}

export default App;