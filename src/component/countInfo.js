import  React ,{Component} from 'react';
import Follower from '../component/followers';
  

class CountInfo extends Component{

 

    render()
    {


        
        
        return(
       
            <div className="div1">

                 <Follower data={{title:"Repos"}}></Follower>
                 <Follower data={{title:"Followers"}}></Follower>
            
                 <Follower data={{title:"Following"}}></Follower>
                 <Follower data={{title:"Gist"}}></Follower>
            
            </div>
       

        )
    }

}


export default  CountInfo;