import { Link } from 'react-router-dom';
import './header.css';

export const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <nav className='links'>
                    <Link to={'/'}><p>Home</p></Link>
                    <Link to={'/detail'}><p>Detail</p></Link>
                    <Link to={'/category'}><p>Category</p></Link>
                    <Link to={'/cart'}><p>Cart</p></Link>
                </nav>
            </div>
        </header>
    );
}