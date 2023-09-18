import Style from './temperature.module.css';
import { FaTemperatureArrowUp } from 'react-icons/fa6';
import { Line } from 'react-chartjs-2';
import { newArrayLand, newArrayStation, newArrayTime }  from './temperatureApi';


export default function Temperature(){
   
      
    return(
        <>
        <h1 className={Style.home}>
            <FaTemperatureArrowUp/>
            Temperatura
            <FaTemperatureArrowUp/>
        </h1>

        <p className={Style.text}>
          Rispetto ai livelli preindustriali la temperatura media del Pianeta è aumentata di 0,98 °centigradi e la tendenza osservata dal 2000 a oggi fa prevedere che, in mancanza di interventi, potrebbe arrivare a +1,5 °C tra il 2030 e il 2050. <br/>
          Questo  vuol dire più inondazioni, più fenomeni atmosferici estremi e intere isole, regioni e metropoli a livello del mare sommerse dall&apos;acqua senza soluzioni tecnologiche adeguate.
        </p>

        <Graphic/>
        </>
    );
}

const setupChartTemperature = {
    labels: newArrayTime,
    datasets: [
      {
        label: "Temperatura",
        backgroundColor: "rgb(26, 129, 84)",
        borderColor: "rgb(26, 129, 84)",
        data: newArrayStation,
        borderWidth: 1, 
        fill: false,
        pointBorderWidth: -5, 
        pointRadius: 1.5,
      },
      {
        label: "Terreno",
        backgroundColor: "hsl(271, 76%, 53%)",
        borderColor: "hsl(271, 76%, 53%)",
        data: newArrayLand,
        borderWidth: 2, 
        fill: false,
        pointBorderWidth: -5, 
        pointRadius: 1.5,
      }
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

  const Graphic = () => {
    return (
      <div className={Style.container}>
        <div>
          <Line
            className={Style.graphic}
            data={setupChartTemperature}
            options={optionsChart}
          />
        </div>
      </div>
    );
  };