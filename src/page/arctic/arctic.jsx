import Style from './arctic.module.css';
import { IoIceCreamSharp } from 'react-icons/io5';
import { Line } from 'react-chartjs-2';
import { newArrayTime, newArrayArcticArea, newArrayArcticExtent, newArrayArcticRank } from './arcticApi';

export default function arctic(){
    return(
        <>
        <h1 className={Style.home}>
         <IoIceCreamSharp/>
            Ghiaccio polare
         <IoIceCreamSharp/>   
        </h1>

        <p className={Style.text}>
          I ghiacciai delle calotte polari, detti anche continentali o regionali, sono enormi masse glaciali con spessore decrescente verso la periferia dalle quali si possono formare gli iceberg. <br/>
          Questi ghiacciai sono definiti anche con il termine norvegese inlandsis (o islandsis). Lo scioglimento dei ghiacciai ha conseguenze pesanti. <br/>
          La rapida perdita riguardante quelli dell&apos;Antartide e della Groenlandia influenza le correnti oceaniche, poiché enormi quantità di acqua molto fredda di scioglimento glaciale che entra nelle acque oceaniche più calde sta rallentando le correnti oceaniche.
        </p>

        <LineChart/>
        </>
    );
}

const setupChartGlaciers = {
  labels: newArrayTime,
  datasets: [
    {
      label: "Area",
      backgroundColor: "rgb(26, 129, 84)",
      borderColor: "rgb(26, 129, 84)",
      data: newArrayArcticArea,
      borderWidth: 1,
      fill: false,
      pointBorderWidth: -5,
      pointRadius: 1.5,
      lineTension: 0.4, 
    },
    {
      label: "Estensione",
      backgroundColor: "hsl(160, 100%, 75%)",
      borderColor: "hsl(160, 100%, 75%)",
      data: newArrayArcticExtent,
      borderWidth: 2,
      fill: false,
      pointBorderWidth: -5,
      pointRadius: 1.5,
      lineTension: 0.2, 
    },
    {
      label: "Grado",
      backgroundColor: "hsl(271, 76%, 53%)",
      borderColor: "hsl(271, 76%, 53%)",
      data: newArrayArcticRank,
      borderWidth: 3,
      fill: false,
      pointBorderWidth: -5,
      pointRadius: 1.5,
      lineTension: 0.2, 
    },
  ],
};

const optionsChart = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgb(26, 129, 84)", 
      },
    },
    x: {
      grid: {
        color: "rgb(26, 129, 84)",
      },
    },
  },
  plugins: {
    zoom: {
      pan: {
        enabled: true,
        mode: "xy",
      },
      zoom: {
        enabled: true,
        mode: "xy",
      },
    },
  },
};

// eslint-disable-next-line react-refresh/only-export-components
const LineChart = () => {
  return (
    <div className={Style.container}>
      <div>
        <Line
          className={Style.graphic}
          data={setupChartGlaciers}
          options={optionsChart}
        />
      </div>
    </div>
  );
};
