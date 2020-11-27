import  React ,{Component} from 'react';
import Follower from '../component/followers';
  import {connect} from 'react-redux';


  class Bio extends Component{
  
  
  render(){

        console.log("into Bio", this.props.data);
        const {name , bio, blog, company, location}= this.props.data.bio;
        const articleList=[];
        for(let i=0;i<20;i++)
        {
            articleList.push(<article>Data</article>);
        }

        return(

            <section className="section">
            
            <div className="articles">

            
            <article className="article" >
            <header>
            <img src="https://avatars0.githubusercontent.com/u/1327050?v=4" alt="Arnav Gupta"></img>
            <div>
                <p>{name}</p>
                <p>john@deo</p>
                
            </div>

            <a href="">Follow Button</a>

            </header>

            <p className="bio">
             { bio }
            </p>
            <div className="link">
             
         <p>

         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path></svg>
         {company}
         </p>
         <p>
         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
         {location}</p>
         <p>
         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg>
         <a href={blog}>{blog}</a>
          
         </p>


            </div>

            </article>




            </div>

           <div className="articles">

              <div className="follwoinglist">

              <article style={{display:"flex", flexDirection:"row"}}>
              <img src="https://avatars3.githubusercontent.com/u/972036?v=4" alt="stelios97"/>
              <div >
              <h4 style={{margin:0, textAlign:"left"}}>stelios97</h4>
              <a href="https://github.com/stelios97" >https://github.com/stelios97</a>
              </div>
              </article>
               
               {articleList}
              </div> 
           </div>
            </section>


        )
    }


  }

 
  export  default Bio;
/*function mapStateToProps(state) {
    return {
     // auth: state.auth,
     state:state.auth
    };
  }
  export default connect(mapStateToProps)(Bio);*/