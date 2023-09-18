import Style from './home.module.css';
import { GiEarthAmerica } from 'react-icons/gi';
import image from '../../assets/image/global2.webp';

export default function home() {
  
    return (
        <>
       
        <h1 className={Style.home}> 
         <GiEarthAmerica/>
           Riscaldamento globale
         <GiEarthAmerica/>
        </h1>
         <section className={Style.container}>
        <p className={Style.text}>
        Quando si parla di riscaldamento globale, è facile pensare che sia un problema troppo grande per essere risolto. <br/>
        Invece le soluzioni ci sono, e possiamo metterle in atto insieme. <br/>
        Ma cosa intendiamo con “riscaldamento globale”? <br/>
        Anche detto global warming, descrive una serie di mutamenti climatici in atto in tutto il mondo. <br/>
        A partire dal XIX secolo le rivoluzioni industriali hanno permesso alle nostre società di progredire, <br/>
        ma solo in seguito hanno mostrato i danni che possono causare. <br/>
        In particolare il rilascio nell’aria di CO₂ e altri gas serra ha provocato 
        un aumento della temperatura media globale di 1,2° C rispetto ai livelli pre-industriali (1750-1880). <br/>
        Questo perché i gas di questo tipo, e in particolare l’anidride carbonica, creano una sorta di filtro dal quale il calore del sole,<br/>
        rimbalzato sulla terra, non riesce a uscire. Una gran quantità di calore rimane così intrappolato e provoca fenomeni climatici estremi. <br/>
        Questo fenomeno prende il nome di “effetto serra”. <br/>
        Nella seguente web app illustreremo l&apos;impatto effettivo del riscaldamento globale durante gli ultimi decenni.
        </p>
           <div>
            <img className={Style.image} src={image} alt="image-globo-home" />
           </div> 
        </section>
        
        </>

    )
}
