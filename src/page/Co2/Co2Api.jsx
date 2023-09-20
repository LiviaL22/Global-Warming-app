import axios from 'axios';
import Chart from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";

Chart.register(zoomPlugin);

export const newArrayTime = []; 
export const newArrayTrend = []; 
export const newArrayCycle = [];

await axios
  .get("https://global-warming.org/api/co2-api")
  .then((response) => {
    let dataApi = response.data.co2;
    console.log(dataApi);

    dataApi.forEach((item, index) => {
      if (index % 2 === 0) {
        newArrayTime.push(item.year);
        newArrayTrend.push(item.trend);
        newArrayCycle.push(item.cycle);
      }
    });
  })

  .catch((error) => {
    console.error("Error in request:", error);
  });