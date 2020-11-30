

//this recuse contains , most popular Respos, Languages, Most Forked to display on chart data

const initialState={
 
    //repos with most start
    "repos":{

        //title and start
        dataSet:[],
        mostForked:{},
        /**{
         * title:"android",
         * start:220
         * 
         * } */


    }


}
         
export default function mostPopularData( state=initialState, action)
    {
        console.log("into reducer, mostPopular", action.data);
        switch(action.type){

          case "saveReposData":{
              
              state.repos.dataSet[0]=action.data;

            return{
                
                ...state
                 
                
                
            }


          }
          case "saveForkedData":{

              console.log("into saveForkedData, Reducer");
              console.log(action.data);

             const obj={
                 ...state.repos.mostForked,
                 ...action.data
                
                }
                state.repos.mostForked=obj;
                return{

                    ...state
                    
                }

          }

          default:
              return state;



        }          



    }
