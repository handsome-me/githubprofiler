import  React ,{Component} from 'react';
import {connect } from 'react-redux';
 



class Follower extends Component{


    constructor()
    {

        super();

    }

    render()
    {
      //  console.log("props",this.props);

         let title=""+this.props.data.title;
         
         const state=this.props.data.state.state;
        
         let name=title.toLowerCase();
           //console.log(title);
          const t= state[name];
         // console.log(name,t );
           
        return(
       
            <div className="detailInfo">
            
            <div style={{display:"block"},{boxSizing:"border-box"},{marginTop:5}}>
              
              {state[name]}
            <p>{title}</p> 
             
            </div>
             

            </div>



        )
    }

}


export default Follower;