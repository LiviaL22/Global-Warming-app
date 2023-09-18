import axios from 'axios';
import Chart from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";

Chart.register(zoomPlugin);


const apiNo2 = "https://global-warming.org/api/nitrous-oxide-api";
export const newArrayTime = [];
export const newArrayAverage = []; 
export const neWArrayTrend = [];

await axios
  .get(apiNo2)
  .then((response) => {
    let dataApi = response.data.nitrous;
    console.log(dataApi);

    dataApi.forEach((item, index) => {
      if (index % 2 === 0) {
        newArrayTime.push(item.date);
        newArrayAverage.push(item.average);
        neWArrayTrend.push(item.trend);
      }
    });
  })

  .catch((error) => {
    console.error("Error in request:", error);
  });
