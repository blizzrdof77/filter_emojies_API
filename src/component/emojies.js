import React, { Component } from 'react';
import data from './emojiList.json'
import './emojies.css'
class Emojies extends Component {
  constructor(props){
		super()
		this.state={
      inputVal:'',
      data,
		}
  }
  
	inOnChange=(e)=>{
    this.setState({inputVal:e.target.value});
    console.log("hello")
  }
  
  render=()=>{
    var libraries,
    libraries = data,
    inputVal = this.state.inputVal.trim().toLowerCase();
    if(inputVal.length > 0){
        libraries = libraries.filter(l => {
            return l.title.toLowerCase().match(inputVal) || l.keywords.toLowerCase().match(inputVal);
        });
    }
  

    return (
      <div className="emoji">
       	<input className="inpsty" type="text" name="searchInput" onChange={this.inOnChange} value={this.state.inputVal}/>
      	<ul>
	        {
	          libraries.slice(0, 20).map(function(libraries, index){
	            return <li className="lists" type="square" key={index}> {libraries.title} - {libraries.symbol}</li>;
	          })
	        }
        </ul>
      </div>
    );
  }
}

export default Emojies;