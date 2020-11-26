import logo from './logo192.png';
import './App.css';
import  Searchbox from './component/searchBox'
import { connect } from 'react-redux';
import CountInfo from './component/countInfo';



function App(props) {
   console.log(props);
  return (
    <div className="App">
       <Searchbox></Searchbox>
       <CountInfo></CountInfo>
    </div>
    
  );
}

//export default App;
function mapStateToProps(state) {
  

  return {
  //  posts: state.posts,
  //  auth: state.auth,
  state:state.auth
  };
}

 

export default connect(mapStateToProps)(App);
