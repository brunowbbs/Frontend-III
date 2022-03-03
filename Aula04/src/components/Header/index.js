import './styles.css';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <header className='header_container_home'>
      <img src={logo} alt="Logo" className='logo_header_home' />
      <ul className='list_item_home'>
        <li className='item_home'>Home</li>
        <li className='item_home'>Sobre</li>
        <li className='item_home'>Contato</li>
      </ul>

    </header>
  )
}