import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CartWidget from '../../containers/CartWidget';
import NavCategories from './NavCategories';
import {Link} from "react-router-dom";

const Navbar = ({ name , carro }) => {

    return (
        <header>
            <nav className='barra_de_navegacion'>
                <Link to={'/'}><img className='logo' src="../../logoalp.png" alt="Logo" /></Link>
                <Link to={'/'}><img className='titulo' src="../../galletita.png" alt="Logo" /></Link>
                <div className='nav_categories'>
                <NavCategories/>
                </div>

                
                <Link to={'/cart'}><CartWidget cuenta={carro} /></Link>
                
                
            </nav>
        </header>
    )
}

export default Navbar