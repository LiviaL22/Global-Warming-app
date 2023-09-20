import Style from './methane.module.css';
import {GiMaterialsScience} from 'react-icons/gi';
import { Line } from 'react-chartjs-2';
import { newArrayTime, newArrayAverage, newArrayTrend } from './methaneApi';

export default function methane(){
    return(
        <>
        <h1 className={Style.home}>
            <GiMaterialsScience/>
             Metano
            <GiMaterialsScience/>
        </h1>

        <p className={Style.text}>
         Il metano (CH4) è un gas serra che nel riscaldamento dell’atmosfera risulta più potente dell’anidride carbonica, <br/>
         anche se è un inquinante climatico di breve durata (in inglese short lived climate pollutants). Il metano avrebbe una capacità di deteriorarsi molto più rapida, fino a scomparire in gran parte dopo un decennio. <br/>
         Dato che è solo apparentemente consolante, dal momento che la quantità di metano in atmosfera nel 2020, secondo la National oceanic and atmospheric administration (Noaa), ha registrato livelli record, a dispetto del rallentamento economico prodotto dalla pandemia. <br/>
         E dall’era pre-industriale, il metano risulta essere “colpevole” di ben il 30% del riscaldamento globale. Da qui l’urgenza di agire: secondo le stime elaborate dalla Climate and clean air coalition, una riduzione fino al 45% delle emissioni di metano avrebbe un forte impatto anche sulla salute umana, <br/>
         prevenendo 260mila morti premature ed evitando 775mila ricoveri ospedalieri legati all’asma.
        </p>

        <LineChart/>
        </>
    )
}

const setupChartMethane = {
    labels: newArrayTime,
    datasets: [
      {
        label: " Tasso medio",
        backgroundColor: "rgb(26, 129, 84)",
        borderColor: "rgb(26, 129, 84)",
        data: newArrayAverage,
        borderWidth: 2, 
        fill: false,
        pointBorderWidth: -5, 
        pointRadius: 1.5,
      },
      {
        label: "Trend",
        backgroundColor: "hsl(271, 76%, 53%)",
        borderColor: "hsl(271, 76%, 53%)",
        data: newArrayTrend,
        borderWidth: 3, 
        fill: false,
        pointBorderWidth: -5, 
        pointRadius: 1.5,
      },
    ],
  };
  
  const optionsChart = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 1600,
        max: 2000,
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
            data={setupChartMethane}
            options={optionsChart}
          />
        </div>
      </div>
    );
  };

