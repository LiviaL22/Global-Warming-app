import Style from './No2.module.css';
import { MdScience } from 'react-icons/md';
import { Line } from 'react-chartjs-2';
import { newArrayTime, newArrayAverage, neWArrayTrend } from './No2Api';


export default function No2(){
    return(
        <>
        <h1 className={Style.home}>
            <MdScience/>
             NO2
            <MdScience/>
        </h1>

        <p className={Style.text}>
         Il biossido di azoto (NO2) è un gas di colore bruno-rossastro, poco solubile in acqua, tossico, dall’odore forte
         e pungente e con forte potere irritante. <br/>
         E’ un inquinante a prevalente componente secondaria, in quanto è il
         prodotto dell&apos;ossidazione del monossido di azoto (NO) in atmosfera; solo in proporzione minore viene
         emesso direttamente in atmosfera. <br/> La principale fonte di emissione degli ossidi di azoto (NOx=NO+NO2) è il
         traffico veicolare; altre fonti sono gli impianti di riscaldamento civili e industriali, le centrali per la
         produzione di energia e un ampio spettro di processi industriali. <br/> Il biossido di azoto è un inquinante ad ampia
         diffusione che ha effetti negativi sulla salute umana e insieme al monossido di azoto contribuisce ai
         fenomeni di smog fotochimico e delle piogge acide.
        </p>

        <LineChart/>
        </>
    )
}

const setupChartNo2 = {
    labels: newArrayTime,
    datasets: [
      {
        label: "Tasso medio",
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
        data: neWArrayTrend,
        borderWidth: 4, 
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
        min: 300,
        max: 350,
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

  const LineChart = () => {
    return (
      <div className={Style.container}>
        <div>
          <Line
            className={Style.graphic}
            data={setupChartNo2}
            options={optionsChart}
          />
        </div>
      </div>
    );
  };

