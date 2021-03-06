export function getReposData(url)
{
   return (dispatch)=>{

    console.log("Repos URL-> ",url);

       fetch(url, {

        method: 'GET',
        headers: {
          'Content-Type': 'application/json;',
        }
       }).then((response) => response.json())
       .then((data) => {

           //console.log(data);
           //now sort the repos top 5 , most start, and it should be fork=false;

             let dataSet= data.filter((ele, index)=>{

             
                 //console.log(ele.fork=='true', ele.fork);

                if(!ele.fork)
                {
                  console.log(ele.fork);
                  return ele;

                }


               


              })

              //sort top 5  start repos, watchers_count compare
             // console.log("Dataset", dataSet);

            let sortedRepos={
              data:[]
            }

            console.log(dataSet.length>5?4:dataSet.length);
            const iCount=dataSet.length>5?4:dataSet.length

            for(let i=0;i<iCount;i++)
            {
                 //sort top 4 repos , by star
 
              
                 console.log("counting->>", i);

               //  console.log(dataSet[i].watchers_count);

               for(let j=i+1;j<dataSet.length;j++)
              {

                if(dataSet[i].watchers_count<dataSet[j].watchers_count)
                {
                  //replace if i<j
                  let temp=dataSet[i];
                  dataSet[i]=dataSet[j];
                  dataSet[j]=temp;


                }
  
  
              }
              const makeObj={
                "title":dataSet[i].name,
                "start":dataSet[i].watchers_count
              }
              sortedRepos.data.push(makeObj);

              // console.log(sortedRepos);
               
             
            }

            const forkSorted=dataSet.sort(function(a, b){ if(a.fork > b.fork) return -1});
            console.log("ForkedSorted",forkSorted);
              
          
            
             
            const tempMostForkedObj=[]
             for(let i=0;i<forkSorted.length;i++)
             {
          const tObj={

                "title": forkSorted[i].name,
                "fork":forkSorted[i].forks
              };
              tempMostForkedObj.push(tObj);

              
             } 
            dispatch(setForkedData(tempMostForkedObj));
            
            console.log("sortedRepos",...sortedRepos.data);


            dispatch(setReposData(sortedRepos.data));


    return;

       })


   }
      



}


export function getFollowersList(url)
{
  return (dispatch)=>{

    console.log("into getFollowersList Function");

    fetch(url,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;',
      }


    }).then(response=>response.json())
    .then((data)=>{

       console.log("FollowersList, GOT it", data);
         
            let dataSet=[]
            for(let i=0;i<data.length;i++)
            {
              let tempObj={
                login:"",
                avatar_url:"",
                profile_url:""
              }

              tempObj.login=data[i].login;
              tempObj.avatar_url=data[i].avatar_url;
              tempObj.profile_url='https://github.com/'+tempObj.login;
              
              dataSet.push(tempObj);


            }

       dispatch(setFollowerlist(dataSet));


    })


  }


}

export function login(userName) {
    return async(dispatch) => 
    {
      //dispatch(startLogin());
      const url = "https://api.github.com/users/"+userName;  //APIUrls.login();
      const res=fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;',
        }
        //body: getFormBody({ email, password }),
      });
      
      res.then((response) => response.json())
        .then((data) => {
          console.log('data', data);
         // if (data.success) {
              //console.log("SUCESS, GOT THE DATA");
            //  console.log(data);


              const obj={
                followers:data.followers,
                gists:data.public_gists,
                following:data.following,
                repos:data.public_repos,

              } 

              const obj2={

                bio:data.bio,
                company:data.company,
                blog:data.blog,
                name:data.name,
                location:data.location,
                avatar_url:data.avatar_url


              }
             // console.log("object2",obj2);
              
              dispatch(saveCountInfo(obj));
             // console.log("Bio Obj2", obj2);

             console.log("calling SaveBio...");
              dispatch(saveBio(obj2));
              
              dispatch(getReposData(data.repos_url));
              dispatch(getFollowersList(data.followers_url));
             
               
              

            // dispatch action to save user
            //localStorage.setItem('token', data.data.token);
            //dispatch(loginSuccess(data.data.user));
            return;
         // }
        
         // dispatch(loginFailed(data.message));
        });
        
         
        console.log("asychronous code");
        

    };
  
}

export function saveCountInfo(data){

  console.log("action called, saveCountinfo", data);
    return{
        type:"countInfoData",
        data:data


    }

}

export function saveBio(data){
  console.log("action called, saveBio",data);
    return{
        type:"saveBio",
        data:data


    }


}

export function setReposData(data)
{
  console.log("action called, getReposData",data);

  return{

    type:"saveReposData",
    data:data

  }
    


}

export function setFollowerlist(data)
{
  console.log("into  action, setFollowersList", data);

  return{

 type:"setFollowers",
 data:data

  }


}
export function setForkedData(data){
  
  console.log("action called. setForkedData", data);

  return {
   
    type:'saveForkedData',
    data:data
    
  }

}


