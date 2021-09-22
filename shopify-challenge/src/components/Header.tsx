import NasaLogo from '../assets/NasaLogo.png';
import '../styling/Header.css';

export default function Header() {
    return(
        <div className = 'header'>
            <img src={NasaLogo} alt='Nasa Logo' />
            <h1>Spacetagram</h1>
        </div>
    )
}