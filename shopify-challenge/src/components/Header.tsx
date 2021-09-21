import NasaLogo from '../assets/NasaLogo.png'


export default function Header() {
    return(
        <div className = 'header'>
            <h1>Spacetagram</h1>
            <img src={NasaLogo}></img>
        </div>
    )
}