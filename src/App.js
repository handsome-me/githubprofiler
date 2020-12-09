import logo from './logo192.png';
import './App.css';
import  Searchbox from './component/searchBox'
import { connect, connectAdvanced } from 'react-redux';
import CountInfo from './component/countInfo';
import {Bar} from 'react-chartjs-2';
import Chart from './component/chartData';
 import lru from   'lru-cache';
 import { useAuth0 } from '@auth0/auth0-react';

function App(props) {
   
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

    console.log('into App.js', props);
    
    if (error) {
      
      return <div>Oops... {error.message}</div>;
    }
  
    
    if (isAuthenticated) {
      return (
        <div className="App">
        <div>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log out
          </button>
        </div>
           <Searchbox></Searchbox>
           <CountInfo></CountInfo>
           <div className="chartCollection">
           <Chart data={{title:'mostStar',props}}></Chart>
           <Chart data={{title:'mostForked', props}}></Chart>
           </div>
          
           
            
           
          
    
        </div>)
         
      
    } else {
      if (isLoading) {
        console.log("isAuthenticated , please check if the user is authenticated",isAuthenticated);
       return <div>Loading...</div>
    
      }
      return <button onClick={loginWithRedirect}>Log in</button>;
    }
     
 
}
 

function mapStateToProps(state) {
  

  return {
  //  posts: state.posts,
  //  auth: state.auth,
  state:state.auth,
  mostPopularData:state.mostPopularData,
  bio:state.bio

  };
}

 

 

export default  connect(mapStateToProps)(App);
 
 