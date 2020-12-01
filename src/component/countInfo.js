import  React ,{Component} from 'react';
import Follower from '../component/followers';
  import {connect} from 'react-redux';
  import Bio from '../component/bio';


class CountInfo extends Component{

 

    render()
    {


        
        const state= this.props;

         console.log("into countInfo", state);
        return(
       
            <div> 
            <div className="div1">

                 <Follower data={{state:state,title:"Repos"}}></Follower>
                 <Follower data={{state:state,title:"Followers"}}></Follower>
            
                 <Follower data={{"state":state,title:"Following"}}></Follower>
                 <Follower data={{"state":state,title:"Gists"}}></Follower>
            
            </div>
            
            <div className="div 2" >

            
             <Bio></Bio>

            </div>

            </div>

        )
    }

}


function mapStateToProps(state) {
    return {
     // auth: state.auth,
     state:state.auth,
     mostPopularData:state.mostPopularData,
     followersList:state.followersList
    };
  }
  export default connect(mapStateToProps)(CountInfo);
//export default  CountInfo;