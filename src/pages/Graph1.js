import React, { useEffect } from 'react'
import CanvasJSReact from '@canvasjs/react-charts';
import axios from 'axios';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default function Graph1() {

  useEffect(() => {
    doApi();
  },[])

  const doApi = async() => {
    try {
      const url = "http://fs1.co.il/bus/phones/list.php";
      const {data} = await axios.get(url);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const options = {
    animationEnabled: false,
    exportEnabled: true,
    theme: "light2", //"light1", "dark1", "dark2"
    title: {
      text: "Test graph 111"
    },
    axisY: {
      includeZero: true
    },
    data: [{
      type: "column", //change type to bar, line, area, pie, etc
      //indexLabel: "{y}", //Shows y value on all Data Points
      indexLabelFontColor: "red",
      indexLabelPlacement: "outside",
      dataPoints: [
        { label: "koko", y: 71 },
        { label: "biden", y: 55 },
        { label: "trump", y: 50 },
        { label: "obama", y: 65 },
        { label: "bush", y: 71 },
      ]
    }]
  }

  // const options = {
  //   animationEnabled: false,
  //   exportEnabled: true,
  //   theme: "light2", //"light1", "dark1", "dark2"
  //   title: {
  //     text: "Test graph 111"
  //   },
  //   axisY: {
  //     includeZero: true
  //   },
  //   data: [{
  //     type: "column", //change type to bar, line, area, pie, etc
  //     //indexLabel: "{y}", //Shows y value on all Data Points
  //     indexLabelFontColor: "red",
  //     indexLabelPlacement: "outside",
  //     dataPoints: [
  //       { label: "koko", y: 71 },
  //       { label: "biden", y: 55 },
  //       { label: "trump", y: 50 },
  //       { label: "obama", y: 65 },
  //       { label: "bush", y: 71 },
  //     ]
  //   }]
  // }

  return (
    <div className='container'>
      <h1>Graph test:</h1>
      <CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
				/* containerProps={{ width: '100%', height: '300px' }} */
			/>
    </div>
  )
}
