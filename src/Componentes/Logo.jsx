import logo from '../Img/logo.png'
import '../CSS/NavBar.css'

export const Logo = ({text}) => {

 
    return (
        <div className='logo'>
            <img  src={logo} alt="" />
            <span>&nbsp;&nbsp;{text}</span>
        </div>
    )
}