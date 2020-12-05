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
         const color=this.props.data.color;
         
         const state=this.props.data.state.state;
        
         let name=title.toLowerCase();
           //console.log(title);
          const t= state[name];
         // console.log(name,t );
           
        return(
       
            <div className="detailInfo">
            
            <span class={color}>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg></span>
            <div style={{display:"block"},{boxSizing:"border-box"},{marginTop:5}}>
              
              {state[name]}
            <p>{title}</p> 
             
            </div>
             

            </div>



        )
    }

}


export default Follower;