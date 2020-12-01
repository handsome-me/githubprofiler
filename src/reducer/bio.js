const initialCountInfostate={

     bio:"cdc",
     blog:"cdcd",
     company:"cdcd",
     name:"cdcdc",
     location:"cdcdcdc",

      

}

export default function bio(state=initialCountInfostate, action){

    switch(action.type)
    {
        
        case "saveBio":
        {
            console.log("into saveBio", action.data);


            return{
               
                ...state,
                ...action.data

            }


          /*return {

            ...state,
            bio:action.data.bio,
            blog:action.data.blog,
            company:action.data.company,
            name:action.data.name,
            location:action.data.location,


             
          }*/


        }

        default:{
            return{

               ...state
            }
        }

    }


}
