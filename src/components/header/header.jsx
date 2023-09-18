import Style from './header.module.css';
import { Link } from 'react-router-dom';


export default function header(){
    return(
        <>
        
        <div className={Style.navbar}>

            <Link to='/'>Home</Link>
            <Link to='/arctic'>Ghiaccio Polare</Link>
            <Link to='/temperature'>Temperatura</Link>
            <Link to='/Co2'>Co2</Link>
            <Link to='/methane'>Metano</Link>
            <Link to='/No2'>NO2</Link>
            

        </div>
        </>
    )
}