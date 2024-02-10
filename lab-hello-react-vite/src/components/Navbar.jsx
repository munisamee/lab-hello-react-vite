import './Navbar.css';
// import Pictures from './Pictures';
import ImageOne from '../assets/ironhack-logo.png';
import ImageTwo from '../assets/burger-menu.png';

function Navbar() {
    return (
        <nav>
            <div className='logo'>
            <img src={ImageOne} alt="ironhack-logo_image"  />
            <img src={ImageTwo} alt="burger-menu_image"  />


            {/* <Pictures /> */}
            </div>

        </nav>
    )
}

export default Navbar