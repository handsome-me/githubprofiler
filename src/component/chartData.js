import React, {Component} from 'react';
import {Bar,Pie} from 'react-chartjs-2';

export default function Chart(props){
    
    const state = {
        labels: [],
        datasets: [
          {//////////////////////////////////////////////////////
            label: 'Repos (most stars)',
            backgroundColor:['rgba(75,192,192,1)','yellow','pink','red'],
            borderColor:['rgba(75,192,192,1)','yellow','pink','red'],
            borderWidth: 2,
            data: []
          }
        ]
      }
       
      const chartTitle=props.data.title;
   
      
      

      if(chartTitle=="mostStar")
      {
        const dataSet=props.data.props.mostPopularData.repos.dataSet;
     
        console.log("dataSet",dataSet);
     
        if(dataSet[0]!=undefined)
        dataSet[0].forEach(element => {
                
         console.log("element",element.title,"---",element.start);
               state.labels.push(element.title);
               state.datasets[0].data.push(element.start);
     
        });
        
        console.log(state);
      }else{
      
          
        const dataSet=props.data.props.mostPopularData.repos.mostForked;
           state.datasets.label="Most Forked";
           console.log(dataSet);
           let  i=1;
           for(let obj in dataSet)
           {
               console.log("mostForked");
               state.labels.push(dataSet[obj].title);
               state.datasets[0].data.push(dataSet[obj].fork);
               i++;
               if(i>4)
               break;


           }


      }
      let chart;
       if(chartTitle=="mostStar")
       {
          chart=<Bar
        data={state}
        options={{
          title:{
            display:true,
            text:'Most Popular Repos',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
       }else{
        chart=<Pie
        data={state}
        options={{
          title:{
            display:true,
            text:'Most Forked ',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />

       }

    return(

        <div className="chart">
        {chart}
      
      </div>
    )

}