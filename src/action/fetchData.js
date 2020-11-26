
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
          if (data.success) {
              console.log("SUCESS, GOT THE DATA");
              console.log(data);

              dispatch(saveCountInfo({followers:2000}));
              

            // dispatch action to save user
            //localStorage.setItem('token', data.data.token);
            //dispatch(loginSuccess(data.data.user));
            return;
          }
          console.log(data);
         // dispatch(loginFailed(data.message));
        });
    };  
}

export function saveCountInfo(data){

    return{
        type:"countInfoData",
        data:data


    }

}


