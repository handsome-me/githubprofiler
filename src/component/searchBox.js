
import  React  from 'react';

import { connect } from 'react-redux';
import {login} from '../action'
import auth from '../reducer/countInfo';
// 

 
function Searchbox(props)
{


     let userName="";
    console.log("into searchBox", props);
    function handleClick(e){
       
        console.log("into handle search");

        console.log(props.dispatch(login(userName)));

    }

    function handleChange(e)
{

    userName=e.target.value;
    console.log("into handleCHange", userName);

}
     
    return (



        <div className="searchDiv">

        
        <input  type="TextBox" onChange={handleChange}></input>
        <button className="button" onClick={handleClick}>Search</button>
        
         

        </div>

    )


}
function mapStateToProps(state) {
    return {
     // auth: state.auth,
     state:state.auth
    };
  }
  export default connect(mapStateToProps)(Searchbox);
  
//export default  Searchbox;