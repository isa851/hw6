import { Link } from 'react-router-dom';
import './header.css';

export const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <nav className='links'>
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={'/detail'}><li>Detail</li></Link>
                    <Link to={'/category'}><li>Category</li></Link>
                    <Link to={'/cart'}><li>Cart</li></Link>
                </nav>
            </div>
            
        </header>
    );
}