import { useDebugValue } from "react";


const initialFollowersState={

  /*{

    login:""// userName
    avatar_url:""// avatar_url,
    profile_url:"https://github.com/{login}",//


  }*/

}


export default function followersList(state =initialFollowersState,action)
{
    switch(action.type)
    {
        case "setFollowers":{

            console.log("into reducer, followersList", action.data);

            return{

               ...state,
               ...action.data 

            }

        }

        

        default:{
           
            return state;
            
        }
    }
   




}