import logo from './logo192.png';
import './App.css';
import  Searchbox from './component/searchBox'
import { connect, connectAdvanced } from 'react-redux';
import CountInfo from './component/countInfo';
import {Bar} from 'react-chartjs-2';
import Chart from './component/chartData';
 import lru from   'lru-cache';


function App(props) {
   

    console.log('into App.js', props);
   

                                               
  
    // maxAge is in ms
    

  return (
    <div className="App">
       <Searchbox></Searchbox>
       <CountInfo></CountInfo>
       <div className="chartCollection">
       <Chart data={{title:'mostStar',props}}></Chart>
       <Chart data={{title:'mostForked', props}}></Chart>
       </div>
      
       
        
       
      

    </div>
    
  );
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

 

 nn

export default connect(mapStateToProps)(App);
 
 