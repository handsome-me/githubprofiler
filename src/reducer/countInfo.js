

const initialCountInfostate={

    following:0,
    followers:0,
    repos:0,
    gist:0

      

}

export default function auth(state=initialCountInfostate, action) {
    switch (action.type) {
      case "displayCountInfoData":
        return {
          ...state,
           
        };
        case "countInfoData":
          return{
            ...state

          }
       
      default:
        return state;
    }
  }