

const initialCountInfostate={

    following:0,
    followers:0,
    repos:0,
    gists:0

      

}

export default function auth(state=initialCountInfostate, action) {
    switch (action.type) {
      case "displayCountInfoData":
        {
          return {
            ...state,
             
          }
        }
        
        case "countInfoData":{
          console.log("into countinfoData", state);
          return{
           
            ...state,
            ...action.data

          }
          
        }
           
       
      default:
        return state;
    }
  }