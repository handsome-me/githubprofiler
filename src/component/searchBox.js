
import  React  from 'react';

import { connect } from 'react-redux';
import {login} from '../action'
import auth from '../reducer/countInfo';
// 
function Searchbox(props)
{
    console.log("into searchBox", props);
    function handleClick(){
       
        console.log("into handle search");

        console.log(props.dispatch(login()));

    }
     
    return (



        <div className="searchDiv">

 
        <input  type="TextBox" ></input>
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