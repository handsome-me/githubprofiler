import  React ,{Component} from 'react';

 



class Follower extends Component{


    constructor()
    {

        super();

    }

    render()
    {

         let title=this.props.data.title;

        return(
       
            <div className="detailInfo">
            
            <div style={{display:"block"},{boxSizing:"border-box"},{marginTop:5}}>
            0
            <p>{title}</p> 
             
            </div>
             

            </div>



        )
    }

}


export default Follower;