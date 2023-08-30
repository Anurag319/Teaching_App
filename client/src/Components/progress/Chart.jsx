
import { useEffect, useState, useContext } from "react";
import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { studentsquiz } from "../../service/api";
import {DataContext} from '../../context/DataProvider';
import "../../css/linechart.css"

// const labels = ["January", "February", "March", "April", "May", "June"];

// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "Students Quiz Dataset",
//       backgroundColor: "black",
//       borderColor: "red",
//       data: [0, 10, 5, 2, 20, 30, 45],
//     },
//   ],
// };

const LineChart = () => {
    const [dailyData, setDailyData] = useState([]);

    const { account } = useContext(DataContext);

    const fetchApi = async () => {
      var user =  account.username;
      const dailyData = await studentsquiz({username : user});
      if(dailyData.data.data!=="") setDailyData(dailyData.data.data.quiz);
      console.log(dailyData);
    };
  
    useEffect(() => {
      fetchApi();
    }, []);


  return (
    <div className="linechart">
      <Line 
        data={{
            labels: dailyData.map((element,index) =>
                index+1
        ),
        datasets:[
            {
                data: dailyData.map((data) => data),
                label: "Marks vs Quiz dataset",
                borderColor: "red",
                backgroundColor: "yellow",
                hoverBackgroundColor: "aqua",
                fill: {
                    target: "origin", // 3. Set the fill options
                    above: "#c3d3a1"
                }
            }
        ]}} 
        // height="200px"
        // width="200px"
        // options={{ maintainAspectRatio: false, aspectRatio: 2}}
        />
    </div>
  );
};

export default LineChart;