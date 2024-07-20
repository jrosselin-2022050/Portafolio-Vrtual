
import { useNavigate } from 'react-router-dom';
import '../CSS/NavBar.css'
import { Logo } from "./Logo.jsx";

const NavLink = ({ text, onClickHandler }) => {
  return (
    <span className='navbar-link' onClick={onClickHandler}>
      {text}
    </span>
  );
};

const NavBar = () => {
  const navigate = useNavigate();

  const NavigationToProyectos = () => {
    navigate('/Proyectos');
  };

  const NavigationToSobreMi = () => {
    navigate('/Acerca-De-Mi');
  };

  const NavigationToContacto = () => {
    navigate('/Contacto');
  };

  const NavigationToInicio = () => {
    navigate('/Inicio');
  };

  return (
    <div className='navbar-container'>
      <div className='logo'>
        <Logo onClickHandler={NavigationToInicio}  ></Logo>
      </div>
      <div className='navbar'>
        <NavLink text='Inicio' onClickHandler={NavigationToInicio} />
        <NavLink text='Proyectos' onClickHandler={NavigationToProyectos} />
        <NavLink text='Acerca de Mi' onClickHandler={NavigationToSobreMi} />
      
      </div>
    </div>
  );
};
 
export default NavBar;
