import axios from 'axios';
import Chart from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";

Chart.register(zoomPlugin);

export const newArrayTime = []; 
export const newArrayAverage = []; 
export const newArrayTrend = [];

await axios
  .get("https://global-warming.org/api/methane-api")
  .then((response) => {
    let dataApi = response.data.methane;
    console.log(dataApi);

    dataApi.forEach((item, index) => {
      if (index % 2 === 0) {
        newArrayTime.push(item.date);
        newArrayAverage.push(item.average);
        newArrayTrend.push(item.trend);
      }
    });
  })

  .catch((error) => {
    console.error("Error in request:", error);
  });