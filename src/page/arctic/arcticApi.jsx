import axios from 'axios';
import Chart from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";

Chart.register(zoomPlugin);


const apiArctic = "https://global-warming.org/api/arctic-api";
export const newArrayTime = []; 
export const newArrayArcticArea = []; 
export const newArrayArcticExtent = [];
export const newArrayArcticRank = [];

await axios
  .get(apiArctic)
  .then((response) => {
    let dataApi = response.data.arcticData;
    console.log(dataApi);

    dataApi.forEach((item, index) => {
      if (index % 2 === 0) {
        newArrayTime.push(item.year);
        newArrayArcticArea.push(item.area);
        newArrayArcticExtent.push(item.extent);
        newArrayArcticRank.push(item.rank);
      }
    });
  })

  .catch((error) => {
    console.error("Error in request:", error);
  });
