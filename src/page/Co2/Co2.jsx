import Style from './Co2.module.css';
import { MdCo2 } from 'react-icons/md';
import { Line } from 'react-chartjs-2';
import { newArrayTime, newArrayTrend, newArrayCycle } from './Co2Api';

export default function Co2(){
    return(
        <>
        <h1 className={Style.home}>
            <MdCo2/>
             Co2
            <MdCo2/>
        </h1>

        <p className={Style.text}>
         E&apos; un gas incolore e inodore, detto genericamente anidride carbonica o biossido di carbonio.
         E&apos; tra i gas ad effetto serra (Greenhouse gas o GHG) che maggiormente contribuiscono al riscaldamento del pianeta. <br/>
         Tali gas presenti nell&apos;atmosfera terrestre catturano il calore del sole impedendogli di ritornare nello spazio.
        </p>

        <Graphic/>
        </>
    );
}

const setupChartCo2 = {
    labels: newArrayTime,
    datasets: [
      {
        label: "Trend",
        backgroundColor: "rgb(26, 129, 84)",
        borderColor: "rgb(26, 129, 84)",
        data: newArrayTrend,
        borderWidth: 2, 
        fill: false,
        pointBorderWidth: -5, 
        pointRadius: 1.5,
      },
      {
        label: "Ciclo",
        backgroundColor: "hsl(271, 76%, 53%)",
        borderColor: "hsl(271, 76%, 53%)",
        data: newArrayCycle,
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
        min: 350,
        max: 450,
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
            data={setupChartCo2}
            options={optionsChart}
          />
        </div>
      </div>
    );
  };