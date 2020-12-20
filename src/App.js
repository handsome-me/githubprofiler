import logo from './logo192.png';
import './App.css';
import  Searchbox from './component/searchBox'
import { connect, connectAdvanced } from 'react-redux';
import CountInfo from './component/countInfo';
import {Bar} from 'react-chartjs-2';
import Chart from './component/chartData';
 import lru from   'lru-cache';
 import { useAuth0 } from '@auth0/auth0-react';
 import  logoImage from './static/images/logo.svg'

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
    console.log("isAuthenticated----____---->>>>",useAuth0());
   
    if (error) {
      
      return <div>Oops... {error.message}</div>;
    }
    if (isLoading) {
     
     return <div>Loading...</div>
  
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
      
      return(

        <section className="imageSec">
 <div class="container">
      
      <div>

        <img src={logoImage} alt="image"></img>
      </div>
     
    <button  class="btn" onClick={loginWithRedirect}>Log In / Sign Up</button>

    </div>
        </section>
      
  
      
      );
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
 
 