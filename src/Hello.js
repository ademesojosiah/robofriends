import React, {Component} from 'react';
import './Hello.css';

class Hello extends Component{
    render(){
        return (
        <div className='header'>
            <h1>hello world </h1>
            <p>{this.props.greeting}</p>
        </div>
        
        );
    }
}




export default Hello