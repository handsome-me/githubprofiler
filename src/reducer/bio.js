const initialCountInfostate={

     bio:"",
     blog:"",
     company:"",
     name:"",
     location:"",

      

}

export default function bio(state=initialCountInfostate, action){

    switch(action.type)
    {
        
        case "saveBio":
        {
            console.log("into saveBio", action.data);
          return {

            ...state,
           ...action.data
             

          }
        }

        default:{
            return{
                state
            }
        }

    }


}
