
export function login(email, password) {
    return (dispatch) => 
    {
      //dispatch(startLogin());
      const url = "https://api.github.com/users/championswimmer" ;  //APIUrls.login();
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;',
        }
        //body: getFormBody({ email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('data', data);
         // if (data.success) {
              console.log("SUCESS, GOT THE DATA");
              console.log(data);


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
                location:data.location


              }
              console.log("object2",obj2);
              dispatch(saveCountInfo(obj));
              dispatch(saveBio(obj2));
              

            // dispatch action to save user
            //localStorage.setItem('token', data.data.token);
            //dispatch(loginSuccess(data.data.user));
            return;
         // }
          console.log(data);
         // dispatch(loginFailed(data.message));
        });
    };  
}

export function saveCountInfo(data){

  console.log("action called, saveCountinfo");
    return{
        type:"countInfoData",
        data:data


    }

}

export function saveBio(data){
  console.log("action called, saveBio");
    return{
        type:"saveBio",
        data:data


    }


}


