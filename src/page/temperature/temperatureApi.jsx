import axios from 'axios';
import Chart from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";

Chart.register(zoomPlugin);


const apiTemperature = "https://global-warming.org/api/temperature-api";
export const newArrayTime = [];
export const newArrayStation = [];
export const newArrayLand = [];

await axios
  .get(apiTemperature)
  .then((response) => {
    let dataApi = response.data.result;
    console.log(dataApi);

    dataApi.forEach((item, index) => {
      if (index % 2 === 0) {
        newArrayTime.push(item.time);
        newArrayStation.push(item.station);
        newArrayLand.push(item.land);

      }
    });
  })

  .catch((error) => {
    console.error("Error in request:", error);
  });